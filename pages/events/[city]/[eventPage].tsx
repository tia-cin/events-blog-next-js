import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { Title } from "../../../components";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const EventPage: NextPage<{ event: Event }> = ({ event }) => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");

  //updates "email" State value
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // send data to API
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { city, eventPage } = router.query;
    // validation regular expression
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if there is no match, correct value format
    if (!email.match(regex)) {
      alert("Please use a correct email address");
    }

    try {
      // send to API the data
      const response = await axios.post(
        "/api/email-registration", // URL
        { email, city, eventPage }, // DATA
        { headers: { "Content-Type": "application/json" } }
      );

      // if response failed, send an Error
      if (response.status !== 200)
        throw new Error(`Status Code: ${response.status}`);

      // send "correct" message
      alert(response.data.message);
      // reset "email" value
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title text={event.name.split("-").join(" ")} />
      <section className="flex flex-col md:flex-row bg-slate-100 p-2 rounded">
        <Image
          src={event.image}
          width={500}
          height={500}
          alt={event.name}
          className="rounded w-full"
        />
        <div className="relative">
          <p className="text-xl m-5 md:my-0 ">{event.description}</p>
          <span className="italic absolute right-0 bottom-0">
            - Article by Lorem Ipsum
          </span>
        </div>
      </section>
      <div className="bg-slate-100 mt-5 rounded p-2">
        <form className="flex items-center justify-between" onSubmit={onSubmit}>
          <label>Suscribe to this Event</label>
          <div>
            <input
              onChange={onChange}
              value={email}
              className="rounded p-1"
              type="email"
              placeholder="Please enter your email"
            />
            <button type="submit" className="bg-blue-300 p-1 ml-1 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");

  const paths = events
    .map(
      (
        c: City // new array (lenght: events)
      ) =>
        c.events.map((ev: Event) => {
          // new array (lenght: city events)
          return {
            params: {
              city: c.city, // each city
              eventPage: ev.name.toString(), // each event of city
            },
          };
        })
    )
    .flat(1); // concat city arry with events array

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { events } = await require("../../../data/data.json");
  const { city, eventPage }: any = params;
  // get "eventPage" from "city"
  const event = events
    .find((c: City) => c.city === city)
    .events.find((ev: Event) => ev.name === eventPage);

  return {
    props: {
      event,
    },
  };
};

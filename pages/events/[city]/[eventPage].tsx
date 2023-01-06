import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { Title } from "../../../components";
import Image from "next/image";

const EventPage: NextPage<{ event: Event }> = ({ event }) => (
  <div>
    <Title text={event.name.split("-").join(" ")} />
    <section className="flex bg-slate-100 p-2 rounded">
      <Image
        src={event.image}
        width={500}
        height={500}
        alt={event.name}
        className="rounded"
      />
      <div className="relative">
        <p className="text-xl mx-5">{event.description}</p>
        <span className="italic absolute right-0 bottom-0">
          - Article by Lorem Ipsum
        </span>
      </div>
    </section>
  </div>
);

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");

  const paths = events
    .map((c: City) => {
      return c.events.map((ev: Event) => {
        return {
          params: {
            city: c.city,
            eventPage: ev.name.toString(),
          },
        };
      });
    })
    .flat(1);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { events } = await require("../../../data/data.json");
  const { city, eventPage }: any = params;
  const event = events
    .find((c: City) => c.city === city)
    .events.find((ev: Event) => ev.name === eventPage);

  return {
    props: {
      event,
    },
  };
};

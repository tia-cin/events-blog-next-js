import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Title } from "../components";
import { City } from "../types";

const AddEvent: NextPage<{ cities: string[] }> = ({ cities }) => {
  const [inputs, setInputs] = React.useState({
    name: "",
    city: "",
    description: "",
    image: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Title text="Add New Event" />
      <div className="">
        <form className="grid grid-cols-2 gap-5 mt-5" onSubmit={onSubmit}>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Name</label>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              className="rounded p-1"
              value={inputs.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event City</label>
            <select
              value={inputs.city}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                e.target.value === "add-new-city"
                  ? window.open("/add-city", "_self")
                  : setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
              name="name"
              className="rounded p-1"
            >
              {cities.map((city: string, i: number) => (
                <option key={i} value={city} className="capitalize">
                  {city}
                </option>
              ))}
              <option value="add-new-city">Add New City</option>
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Description</label>
            <textarea
              value={inputs.description}
              name="description"
              placeholder="Event Description"
              className="w-full h-200 rounded p-1"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Picture</label>
            <input
              type="image"
              value={inputs.image}
              className="w-full h-200"
              name="image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-300 p-2 rounded text-lg" type="submit">
            Create New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

export const getServerSideProps: GetServerSideProps = async () => {
  const { events } = await require("../data/data.json");
  const cities = events.map((c: City) => c.city);

  return {
    props: {
      cities,
    },
  };
};

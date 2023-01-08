import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Title } from "../components";
import { City } from "../types";

const AddEvent: NextPage<{ cities: any }> = ({ cities }) => {
  const [inputs, setInputs] = React.useState({
    name: "",
    city: "",
    description: "",
    image: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

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
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event City</label>
            <select name="city" onChange={onChange} className="rounded p-1">
              <option className="capitalize">Add New City</option>
              {cities.map((city: string, i: number) => (
                <option className="capitalize" key={i}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Description</label>
            <textarea
              name="description"
              placeholder="Event Description"
              className="w-full h-200 rounded p-1"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Picture</label>
            <input
              type="image"
              className="w-full h-200"
              name="image"
              onChange={onChange}
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
  const cities = events.map((city: City) => city.city);

  return {
    props: {
      cities,
    },
  };
};

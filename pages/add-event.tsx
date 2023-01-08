import { NextPage } from "next";
import React from "react";
import { Title } from "../components";

const AddEvent: NextPage = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    city: "",
    description: "",
    image: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      <Title text="Add New Event" />
      <div>
        <form className="grid grid-cols-2 gap-2">
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

            <input
              type="text"
              name="city"
              placeholder="Event City"
              className="rounded p-1"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Description</label>
            <textarea
              name="description"
              placeholder="Event Description"
              className="w-700 h-200 rounded p-1"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Picture</label>
            <input
              type="image"
              className="w-700 h-200"
              name="image"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

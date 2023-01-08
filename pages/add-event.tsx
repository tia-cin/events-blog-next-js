import { NextPage } from "next";
import React from "react";
import { Title } from "../components";

const AddEvent: NextPage = () => {
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
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event City</label>
            <input
              type="text"
              name="city"
              placeholder="Event City"
              className="rounded p-1"
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Description</label>
            <textarea
              name="description"
              placeholder="Event Description"
              className="w-700 h-200 rounded p-1"
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">Event Picture</label>
            <input type="image" className="w-700 h-200" name="image" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

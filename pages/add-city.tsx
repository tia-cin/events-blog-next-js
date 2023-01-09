import { NextPage } from "next";
import React from "react";
import { Title } from "../components";

const AddCity: NextPage = () => {
  return (
    <div>
      <Title text="Add New City" />
      <div className="mt-5">
        <form>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">City Name</label>
            <input
              type="text"
              placeholder="City Name"
              className=" rounded p-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="flex flex-col justify-center">
              <label className="text-lg font-semibold">Event Description</label>
              <textarea
                name="description"
                placeholder="City Description"
                className="w-full h-200 rounded p-1"
              />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-lg font-semibold">City Picture</label>
              <input type="image" className="w-full h-200" name="image" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCity;

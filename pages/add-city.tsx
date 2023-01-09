import { NextPage } from "next";
import React from "react";
import { Title } from "../components";

const AddCity: NextPage = () => {
  const [inputs, setInputs] = React.useState({
    city: "",
    desc: "",
    image: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Title text="Add New City" />
      <div className="mt-5">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col justify-center">
            <label className="text-lg font-semibold">City Name</label>
            <input
              type="text"
              placeholder="City Name"
              className=" rounded p-1"
              name="city"
              value={inputs.city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputs({ ...inputs, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="flex flex-col justify-center">
              <label className="text-lg font-semibold">Event Description</label>
              <textarea
                name="desc"
                placeholder="City Description"
                className="w-full h-200 rounded p-1"
                value={inputs.desc}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-lg font-semibold">City Picture</label>
              <input
                type="image"
                className="w-full h-200"
                name="image"
                value={inputs.image}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-300 p-2 rounded text-lg" type="submit">
            Add New City
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCity;

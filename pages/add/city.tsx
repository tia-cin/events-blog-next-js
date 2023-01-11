import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Title } from "../../components";

const AddCity: NextPage = () => {
  const [cityInput, setCityInput] = React.useState({
    city: "",
    desc: "",
    image: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setCityInput({ ...cityInput, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // send to API the data
      const response = await axios.post(
        "/api/add-city", // URL
        cityInput, // DATA
        { headers: { "Content-Type": "application/json" } }
      );

      // if response failed, send an Error
      if (response.status !== 200)
        throw new Error(`Status Code: ${response.status}`);

      // send "correct" message
      alert(response.data.message);
      // reset state values
      setCityInput({ city: "", desc: "", image: "" });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cityInput);

  return (
    <div>
      <Title text="Add City" />
      <div>
        <form className="grid grid-cols-2 gap-5" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <label className="text-lg">Event Name</label>
            <input
              type="text"
              name="city"
              className="p-1 rounded"
              placeholder="Type Event Name"
              onChange={onChange}
              value={cityInput.city}
            />
          </div>

          <div className="flex justify-between">
            <label className="text-lg">Event Image</label>
            <input
              type="text"
              name="image"
              className="p-1 rounded"
              placeholder="Paste Image URL"
              onChange={onChange}
              value={cityInput.image}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg">Event Description</label>
            <textarea
              name="desc"
              className="w-300 rounded"
              placeholder="Type Event Description"
              onChange={onChange}
              value={cityInput.desc}
            />
          </div>
          {cityInput.image && (
            <div>
              <Image
                src={cityInput.image}
                alt={cityInput.city}
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          )}
          <div className="flex justify-center mt-10">
            <button type="submit" className="bg-blue-300 p-1 px-2 rounded">
              Add City
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCity;

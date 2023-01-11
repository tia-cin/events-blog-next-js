import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Title } from "../../../components";

const AddEvent: NextPage = () => {
  const { query } = useRouter();
  const { city } = query;
  const [eventInput, setEventInput] = React.useState({
    name: "",
    description: "",
    image: "",
    city: city,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEventInput({ ...eventInput, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // send to API the data
      const response = await axios.post(
        "/api/add-event", // URL
        { eventInput }, // DATA
        { headers: { "Content-Type": "application/json" } }
      );

      // if response failed, send an Error
      if (response.status !== 200)
        throw new Error(`Status Code: ${response.status}`);

      // send "correct" message
      alert(response.data.message);
      // reset "email" value
      setEventInput({ name: "", description: "", image: "", city });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(eventInput);

  return (
    <div>
      <Title text={`Add Event in ${query.city}`} />
      <div>
        <form className="grid grid-cols-2 gap-5" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <label className="text-lg">Event Name</label>
            <input
              type="text"
              name="name"
              className="p-1 rounded"
              placeholder="Type Event Name"
              onChange={onChange}
              value={eventInput.name}
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
              value={eventInput.image}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg">Event Description</label>
            <textarea
              name="description"
              className="w-300 rounded"
              placeholder="Type Event Description"
              onChange={onChange}
              value={eventInput.description}
            />
          </div>
          {eventInput.image && (
            <div>
              <Image
                src={eventInput.image}
                alt={eventInput.name}
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          )}
          <div className="flex justify-center mt-10">
            <button type="submit" className="bg-blue-300 p-1 px-2 rounded">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

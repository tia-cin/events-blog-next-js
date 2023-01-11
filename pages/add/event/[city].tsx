import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Title } from "../../../components";

const AddEvent: NextPage = () => {
  const { query } = useRouter();
  const [eventInput, setEventInput] = React.useState({
    name: "",
    description: "",
    image: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEventInput({ ...eventInput, [e.target.name]: e.target.value });

  console.log(eventInput);

  return (
    <div>
      <Title text={`Add Event in ${query.city}`} />
      <div>
        <form className="grid grid-cols-2 gap-5">
          <div className="flex justify-between">
            <label className="text-lg">Event Name</label>
            <input
              type="text"
              name="name"
              className="p-1 rounded"
              placeholder="Type Event Name"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg">Event Description</label>
            <input
              type="text"
              name="description"
              className="p-1 rounded"
              placeholder="Type Event Description"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg">Event Image</label>
            <input
              type="text"
              name="image"
              className="p-1 rounded h-fit"
              placeholder="Paste Image URL"
              onChange={onChange}
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
        </form>
        <div className="flex justify-center mt-10">
          <button type="submit" className="bg-blue-300 p-1 px-2 rounded">
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

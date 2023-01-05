import Image from "next/image";
import React from "react";
import { City, Event } from "../types";

export const CardCity: React.FC<{ city: City }> = ({ city }) => {
  return (
    <section className="bg-slate-200 rounded p-2 my-5">
      <div>
        <Image
          width={400}
          height={200}
          src={city.image}
          className=" w-full rounded"
          alt={`${city.city}`}
        />
        <div className="my-2">
          <h2 className="text-lg font-medium capitalize">
            Events in {city.city}
          </h2>
          <p>{city.desc.slice(0, 250).concat("...")}</p>
        </div>
      </div>
      <button
        onClick={() => window.open(`/events/${city.city}`, "_self")}
        className="border-2 border-gray-900 w-full rounded font-light text-xl my-1"
      >
        Read More
      </button>
    </section>
  );
};

export const CardEvent: React.FC<{ event: Event }> = ({ event }) => (
  <div className="flex bg-slate-100 p-2 rounded">
    <Image
      src={event.image}
      alt={event.name}
      width={400}
      height={200}
      className="rounded w-300 h-200"
    />
    <div className="mx-2 ">
      <h2 className="text-3xl font-medium">{event.name}</h2>
      <p>{event.description.slice(0, 200).concat("...")}</p>
      <button
        // onClick={() => window.open(`/events/${event.city}`, "_self")}
        className="border-2 border-gray-900 w-full rounded font-light text-xl my-1"
      >
        Read More
      </button>
    </div>
  </div>
);

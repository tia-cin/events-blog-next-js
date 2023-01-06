import Image from "next/image";
import Link from "next/link";
import React from "react";
import { City, Event } from "../types";

export const CardCity: React.FC<{ city: City }> = ({ city }) => (
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
    <Link href={`/events/${city.city}`} passHref>
      <button className="border-2 border-gray-900 w-full rounded font-light text-xl my-1">
        Read More
      </button>
    </Link>
  </section>
);

export const CardEvent: React.FC<{ event: Event; city: string }> = ({
  event,
  city,
}) => (
  <div className="flex bg-slate-100 p-2 rounded flex-col md:flex-row">
    <Image
      src={event.image}
      alt={event.name}
      width={400}
      height={200}
      className="rounded w-300 h-200"
    />
    <div className="mx-2 ">
      <h2 className="text-3xl font-medium capitalize">
        {event.name.split("-").join(" ")}
      </h2>
      <p>{event.description.slice(0, 200).concat("...")}</p>
      <Link passHref href={`/events/${city}/${event.name}`}>
        <button className="border-2 border-gray-900 w-full rounded font-light text-xl my-1">
          Read More
        </button>
      </Link>
    </div>
  </div>
);

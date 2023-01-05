import Image from "next/image";
import React from "react";
import { City } from "../types";

const Card: React.FC<{ city: City }> = ({ city }) => {
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

export default Card;

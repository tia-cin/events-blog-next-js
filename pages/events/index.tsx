import { GetStaticProps, NextPage } from "next";
import React from "react";

const Events: NextPage = () => {
  return (
    <div className="h-full mx-16">
      <h1 className=" text-2xl font-semibold mt-5">Events Page</h1>
      <div>
        <a href="/events/bali">
          <section>
            <img />
            <h2>Events in Bali</h2>
          </section>
        </a>
        <a href="/events/miami">
          <section>
            <img />
            <h2>Events in Miami</h2>
          </section>
        </a>
        <a href="/events/tokyo">
          <section>
            <img />
            <h2>Events in Tokyo</h2>
          </section>
        </a>
      </div>
    </div>
  );
};

export default Events;

export const getStaticProps: GetStaticProps = async () => {
  const { events } = await require("../data/data.json");

  return {
    props: {
      events,
    },
  };
};

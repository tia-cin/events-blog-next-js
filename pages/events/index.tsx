import { GetStaticProps, NextPage } from "next";
import React from "react";
import { CardCity, Title } from "../../components";
import { City } from "../../types";

const Events: NextPage<{ events: City[] }> = ({ events }) => {
  return (
    <div>
      <Title text="Events Page" />
      <div className="grid grid-cols-3 gap-8">
        {events.map((city: City, i: number) => (
          <CardCity key={i} city={city} />
        ))}
      </div>
    </div>
  );
};

export default Events;

export const getStaticProps: GetStaticProps = async () => {
  const { events } = await require("../../data/data.json");

  return {
    props: {
      events,
    },
  };
};

import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { City } from "../../types";

const Events: NextPage = ({ events }: any) => {
  return (
    <div>
      <Title text="Events Page" />
      <div className="grid grid-cols-3 gap-8">
        {events.map((city: City, i: number) => (
          <Card key={i} city={city} />
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

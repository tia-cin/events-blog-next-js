import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { CardEvent, Title } from "../../../components";

const index: NextPage<{ data: City }> = ({ data }) => (
  <div>
    <Title text={`Events in ${data.city}`} />
    <div className="grid grid-cols-2 gap-8 max-[600px]:gap-3">
      {data.events.map((event: Event, i: number) => (
        <CardEvent event={event} city={data.city} />
      ))}
    </div>
  </div>
);

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");
  const paths = events.map((event: City) => {
    return {
      params: {
        city: event.city.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { events } = await require("../../../data/data.json");
  const { city }: any = context.params;
  const cityEvents: City = events.filter((e: City) => e.city === city)[0];

  return {
    props: {
      data: cityEvents,
    },
  };
};

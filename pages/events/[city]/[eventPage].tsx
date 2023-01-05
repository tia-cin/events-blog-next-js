import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";

const EventPage: NextPage<{ event: any }> = ({ event }) => {
  console.log(event);

  return <div>{event}</div>;
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");
  const paths = events.map((city: City) => {
    params: {
      city: city.city;
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { events } = await require("../../../data/data.json");
  const { currEvents }: any = context.params;
  const event = events.filter((event: Event) => event.name === currEvents)[0];

  return {
    props: {
      event,
    },
  };
};

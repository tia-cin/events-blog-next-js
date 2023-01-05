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

  return {
    paths: [{ params: { event: "Hi" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { events } = await require("../../../data/data.json");
  const { currEvent }: any = context.params;
  const event = events.filter((event: Event) => event.name === currEvent)[0];

  return {
    props: {
      event,
    },
  };
};

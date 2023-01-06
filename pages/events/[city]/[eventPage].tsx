import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";

const EventPage: NextPage<{ event: Event[] }> = ({ event }) => {
  console.log(event);

  return <div></div>;
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");

  const paths = events.map((c: City) => {
    return c.events.map((ev: Event) => {
      return {
        params: {
          city: c.city,
          eventPage: ev.name.toString(),
        },
      };
    });
  });

  return {
    paths: paths.flat(1),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { events } = await require("../../../data/data.json");
  const { city, eventPage }: any = params;
  const event = events
    .find((c: City) => c.city === city)
    .events.find((ev: Event) => ev.name === eventPage);

  return {
    props: {
      event,
    },
  };
};

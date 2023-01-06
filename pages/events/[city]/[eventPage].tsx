import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { useRouter } from "next/router";

const EventPage: NextPage<{ events: Event[] }> = ({ events }) => {
  const router = useRouter();

  // console.log(events);

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
  const event = events.find((c: City) => c.city === city);

  console.log(event);

  return {
    props: {
      events,
    },
  };
};

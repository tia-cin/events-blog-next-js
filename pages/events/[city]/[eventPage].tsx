import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { useRouter } from "next/router";

const EventPage: NextPage<{ events: Event[] }> = ({ events }) => {
  const router = useRouter();

  console.log(router, events);

  return <div></div>;
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");

  const paths = events.map((city: City) => {
    return {
      params: {
        city: city.city.toString(),
        eventPage: "",
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { events } = await require("../../../data/data.json");
  console.log(params);

  return {
    props: {
      events,
    },
  };
};

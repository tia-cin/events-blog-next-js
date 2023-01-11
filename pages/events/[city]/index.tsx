import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { City, Event } from "../../../types";
import { CardEvent, Title } from "../../../components";

const index: NextPage<{ data: City }> = ({ data }) => (
  <div>
    <Title
      text={`Events in ${data.city}`}
      button={`Add event in ${data.city}`}
    />
    <div className="grid grid-cols-2 gap-8 max-[600px]:gap-3">
      {data.events.length > 1 ? (
        data.events.map((event: Event, i: number) => (
          <CardEvent event={event} city={data.city} key={i} />
        ))
      ) : (
        <p className="text-xl">No events found</p>
      )}
    </div>
  </div>
);

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const { events } = await require("../../../data/data.json");
  // get an array of every city of structure { params: { city: cityName } }
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { events } = await require("../../../data/data.json");
  const { city }: any = params; // city name from params
  const cityEvents: City = events.find((e: City) => e.city === city); // get data from city from params

  return {
    props: {
      data: cityEvents,
    },
  };
};

import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { City } from "../types";

export default function Home({ events }: any) {
  return (
    <>
      <Head>
        <title>Events Blog</title>
        <meta
          name="description"
          content="Blog about touristic activities in cities around the world while season"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-16">
        <h1 className=" text-2xl font-semibold mt-5">
          Explore events in these cities
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {events.map((city: City, i: number) => (
            <section className="bg-slate-200 rounded p-2 my-5" key={i}>
              <div className="">
                <Image
                  width={400}
                  height={200}
                  src={city.image}
                  className=" w-full rounded"
                  alt={`${city.city}`}
                />
                <div className="my-2">
                  <h2 className="text-lg font-medium capitalize">
                    Events in {city.city}
                  </h2>
                  <p>{city.desc.slice(0, 250).concat("...")}</p>
                </div>
              </div>
              <button
                onClick={() => window.open(`/events/${city.city}`, "_self")}
                className="border-2 border-gray-900 w-full rounded font-light text-xl my-1"
              >
                Read More
              </button>
            </section>
          ))}
        </div>
      </main>
      <footer className="flex justify-center">
        <div className="bottom-0 fixed mb-3">
          <p className="text-center font-medium">
            Copyright © 2019 by Events Blog <br />
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { events } = await require("../data/data.json");

  return {
    props: {
      events,
    },
  };
};

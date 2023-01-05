import Head from "next/head";
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
      <header className="bg-slate-300 h-16 p-1.5">
        <nav className="flex items-center justify-between">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3959/3959542.png"
            className="w-10 h-10 m-1 mx-3 hover:scale-105 transition-all cursor-pointer"
          />
          <div className="w-80 flex justify-evenly">
            <a
              href="/"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              Home
            </a>
            <a
              href="/events"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              Events
            </a>
            <a
              href="/about"
              className="font-semibold text-lg hover:text-white transition-all hover:text-xl"
            >
              About Us
            </a>
          </div>
        </nav>
      </header>
      <main className="grid grid-cols-3 mx-16 gap-8">
        {events.map((city: City, i: number) => (
          <section className="bg-slate-200 rounded p-2 my-5" key={i}>
            <div>
              <img />
            </div>
            <div>
              <h2 className="text-lg font-medium capitalize">
                Events in {city.city}
              </h2>
              <p>{city.desc}</p>
            </div>
            <button
              onClick={() => window.open(`/events/${city.city}`, "_self")}
              className="border-2 border-gray-900 w-full rounded font-light text-xl my-1"
            >
              Read More
            </button>
          </section>
        ))}
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

export const getServerSideProps = async () => {
  const { events } = await require("../data/data.json");

  return {
    props: {
      events,
    },
  };
};

import { GetServerSideProps, NextPage } from "next";
import { Card, Title } from "../components";
import { City } from "../types";

const Home: NextPage = ({ events }: any) => {
  return (
    <main>
      <Title text="Explore events tn these cities" />
      <div className="grid grid-cols-3 gap-8">
        {events.map((city: City, i: number) => (
          <Card city={city} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { events } = await require("../data/data.json");

  return {
    props: {
      events,
    },
  };
};

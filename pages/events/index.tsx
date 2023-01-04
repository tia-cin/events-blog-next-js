import { GetStaticProps, NextPage } from "next";
import React from "react";

const Events: NextPage = ({ title }: any) => {
  return (
    <div>
      <h1>Events Page</h1>
      <main>
        <a href="">
          <section>
            <img />
            <h2>Events in Bali</h2>
          </section>
        </a>
        <a href="">
          <section>
            <img />
            <h2>Events in Miami</h2>
          </section>
        </a>
        <a href="">
          <section>
            <img />
            <h2>Events in Tokyo</h2>
          </section>
        </a>
      </main>
    </div>
  );
};

export default Events;

export const getServerSideProps: GetStaticProps = (context) => {
  return {
    props: {
      title: "Hello!",
    },
  };
};

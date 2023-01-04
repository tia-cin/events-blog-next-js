import React from "react";
import { GetStaticProps } from "next";

const Event = ({ title }: any) => {
  return <div>{title}</div>;
};

export default Event;

export const getServerSideProps: GetStaticProps = (context) => {
  return {
    props: {
      title: "Hello!",
    },
  };
};

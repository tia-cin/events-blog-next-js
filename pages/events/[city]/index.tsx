import React from "react";
import { GetStaticProps } from "next";

const index = ({ title }: any) => {
  return <div>{title}</div>;
};

export default index;

export const getServerSideProps: GetStaticProps = (context) => {
  return {
    props: {
      title: "Hello!",
    },
  };
};

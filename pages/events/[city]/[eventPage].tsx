import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

const Event = ({ title }: any) => {
  return <div>{title}</div>;
};

export default Event;

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const { events } = await require("../../../data/data.json");

//   return {
//     paths: {
//       data: "123",
//     },
//     fallback: false,
//   };
// };

// export const getServerSideProps: GetStaticProps = (context) => {
//   return {
//     props: {
//       title: "Hello!",
//     },
//   };
// };

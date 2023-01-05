import React from "react";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="text-2xl font-semibold mt-5">{text}</h1>;
};

export default Title;

import React from "react";

const Title: React.FC<{ text: string }> = ({ text }) => (
  <h1 className="text-2xl font-semibold mt-5 capitalize">{text}</h1>
);

export default Title;

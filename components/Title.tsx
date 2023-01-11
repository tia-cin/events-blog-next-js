import Link from "next/link";
import React from "react";

const Title: React.FC<{ text: string; button?: string }> = ({
  text,
  button,
}) => (
  <header className="flex justify-between items-center my-3">
    <h1 className="text-2xl font-semibold mt-5 capitalize">{text}</h1>
    {button && (
      <Link href={`/${button.toLocaleLowerCase().split(" ").join("/")}`}>
        <button className="p-2 bg-blue-200 rounded capitalize">{button}</button>
      </Link>
    )}
  </header>
);

export default Title;

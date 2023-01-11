import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Title } from "../../components";

const AddCity: NextPage = () => {
  const router = useRouter();
  const [cityInput, setCityInput] = React.useState({
    city: "",
    desc: "",
    image: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCityInput({ ...cityInput, [e.target.name]: e.target.value });

  return (
    <div>
      <Title text="Add Event" />
    </div>
  );
};

export default AddCity;

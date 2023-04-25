import React from "react";
import Background from "../assets/Background.jpg";
import Form from "./Form";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <Form />
        <img src={Background} />
      </section>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../../components/Navbar";
import { Api } from "../../consumoApi/consumoApi";
import ListaPosts from "./ListaPosts";

const Home = () => {
  const { data } = Api();

  console.log(data);
  return (
    <div>
      <Navbar />
      <ListaPosts blog={data} />
    </div>
  );
};

export default Home;
import React from "react";
import Navbar from "../../components/Navbar";
import Foot from "../../components/footer";
import { Api } from "../../consumoApi/consumoApi";
import ListaPosts from "./ListaPosts";

const Home = () => {
  const { data } = Api();
  return (
    <div>
      <Navbar />
      <ListaPosts blog={data} />
    </div>
  );
};

export default Home;
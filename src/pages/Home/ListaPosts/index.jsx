import React from "react";
import Posts from "./Posts";
import {} from "./style.css";


const ListaPosts = ({blog}) => {
  return (
    <div className="tela">
      {
      blog.map((blog, index) => (
        <Posts blog={blog} key={index} id={index}/>
      ))
      }
    </div>
  );
};

export default ListaPosts;
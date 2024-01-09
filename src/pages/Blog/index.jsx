import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar"
import Foot from "../../components/footer/index.jsx"
import { useParams } from 'react-router'
import './styles.css'

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get("https://api-fake-blog.herokuapp.com/postagens").then((response) => {
        const data = response.data;
        const index = parseInt(id)
        const postagens = data[index];
        setBlog(postagens);
      });
  }, []);

  return (
    <div >
      <Navbar/>
      {blog ? (
        <div className="conteudo">
          <header>
            <h1>{blog.title}</h1>
          </header>
          <img
            src={`https://api-fake-blog.herokuapp.com${blog.thumbImage}`} 
            alt={blog.thumbImageAltText}
          />
          <p className="descrição">{blog.description}</p>
          <p className="data">Postagem realizada em: {blog.postDate}</p>
        </div>
      ) : (
        <h3>Carregando conteudo da publicação ...</h3>
      )}
      <Foot/>
    </div>
  );
}

export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Posts = ( obj ) => {
  const {blog: 
    { description, title, thumbImageAltText, postDate, profileName, profileThumbImage, thumbImage }} = obj
  const { id } = obj
  return (
    <div className="card">
          <img src={`https://api-fake-blog.herokuapp.com${thumbImage}`} alt={thumbImageAltText} class="card-img-top"></img>
    <div class="card-body">
      
      <h5 class="card-title mb-4">{title}</h5>
      <p class="card-text">{description}</p>
      <p class="card-text"><small class="text-muted"> Postado em: {postDate}</small></p>
        <div className="autor">
        <img src={profileThumbImage} />
          <div>
            <h4>{profileName}</h4>  
          </div>
        </div>
        <Link className="blogItem-link" to={`/postagens/${id}`}>
          Ler mais
        </Link>
    </div>
    </div>
    
  );
};

export default Posts;
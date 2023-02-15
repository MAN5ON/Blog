import React from "react";
import { Link } from "react-router-dom";

import s from "../../styles/blog/blog.module.css";

export const BlogShield = ({id, author, title, introText, introIMG, creationDate, likes, views,}) => {
  return (
    <div className={s.itemBlog}>
      <Link to={`/posts/${id}`}>
        <div className={s.nameBlog}>{title.toUpperCase()}</div>
      </Link>
      <img
        className={s.blogPic}
        src={introIMG}
        alt=""
      ></img>
      <div className={s.blogDescription}>{introText}</div>
      <div className={s.footerBlog}>
        <div className={s.blogDate}>{creationDate}</div>
        <div className={s.blogLikes}>{likes} likes</div>
        <div className={s.blogwiews}>{views} views</div>
        <div className={s.authorBlog}>{author.toUpperCase()}</div>  
      </div>
    </div>
  );
};

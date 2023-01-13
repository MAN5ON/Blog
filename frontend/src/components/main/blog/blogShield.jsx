import React from "react";
import { Link } from "react-router-dom";

import s from "../../styles/blog/blog.module.css";

export const BlogShield = ({id, author, title, introText, introIMG, creationDate, likes, views,}) => {
  return (
    <div className={s.itemBlog}>
      <div className={s.authorBlog}>{author}</div>
      <Link to={`/${id}`}>
        <div className={s.nameBlog}>{title}</div>
      </Link>

      <img
        className={s.blogPic}
        src={introIMG}
        alt=""
      ></img>
      <div className={s.blogDescription}>{introText}</div>
      <div className={s.blogTags}>
        <div className={s.blogTagItem}>#first</div>
        <div className={s.blogTagItem}>#second</div>
        <div className={s.blogTagItem}>#third</div>
      </div>
      <div className={s.footerBlog}>
        <div className={s.blogDate}>Post created {creationDate}</div>
        <div className={s.blogLikes}>{likes} likes</div>
        <div className={s.blogwiews}>{views} views</div>
      </div>
    </div>
  );
};

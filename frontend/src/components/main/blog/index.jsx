import { React } from "react";
import { Link } from "react-router-dom";
import s from "../../styles/blog.module.css";
import { BlogItem } from "./blogItem";
import { NewPostItem } from "./newPostItem";

export const Blog = () => {


  return (
    <div className={s.blogPage}>
      <Link to="/new" ><button className={s.newBlogButton}>NEW POST</button></Link>
      
      <BlogItem />
    </div>
  );
};

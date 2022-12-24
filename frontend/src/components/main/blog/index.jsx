import { useState, React } from "react";
import s from "../../styles/blog.module.css";
import { BlogItem } from "./blogItem";

export const Blog = () => {


  return (
    <div className={s.blogPage}>
      <BlogItem />
    </div>
  );
};

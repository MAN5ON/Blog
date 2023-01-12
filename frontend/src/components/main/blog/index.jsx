import { React } from "react";
import { Link } from "react-router-dom";

import { BlogShield } from "./blogShield";
import s from "../../styles/blog/blog.module.css";

export const Blog = () => {
  return (
    <div className={s.blogPage}>
      <BlogShield />
      <BlogShield />
      <BlogShield />
    </div>
  );
};

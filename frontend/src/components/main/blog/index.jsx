import { React } from "react";
import { Link } from "react-router-dom";

import { TemplateButton } from "../../templates/button";
import { BlogShield } from "./blogShield";
import s from "../../styles/blog/blog.module.css";

export const Blog = () => {
  return (
    <div className={s.blogPage}>
      <Link to="/new">
        <div className={s.newPost}>
          <TemplateButton text="NEW POST" />
        </div>
      </Link>

      <BlogShield />
      <BlogShield />
      <BlogShield />
    </div>
  );
};

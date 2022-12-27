import { React } from "react";
import { Link } from "react-router-dom";

import { BlogItem } from "./blogItem";
import { CommentItem } from "./commentItem";
import { TemplateButton } from "../../resources/button";
import { InputComment } from "./inputComment";
import { useState } from "react";
import s from "../../styles/blog.module.css";

export const Blog = () => {
  const [blogComments, mapBlogComments] = useState([]);

  return (
    <div className={s.blogPage}>
      <Link to="/new">
        <div className={s.newPost}>
          <TemplateButton text="NEW POST" />
        </div>
      </Link>

      <BlogItem />
      {blogComments.slice(0).map((comment) => (
        <CommentItem {...comment} />
      ))}
      <InputComment />
    </div>
  );
};

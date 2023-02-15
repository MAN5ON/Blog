import React from "react";
import { TemplateButton } from "../../templates/button";
import s from "../../styles/blog/newPost.module.css";

export const NewPostItem = () => {
  return (
    <div className={s.newPost}>
      <input placeholder="Title" />
      <textarea placeholder="Write a preview for your post" />
      <textarea placeholder="Tell us something interesting" />
      <div className={s.addButtons}>
        <TemplateButton text="ADD TEXT" />
        <TemplateButton text="ADD IMAGE" />
      </div>
      <TemplateButton text="PUBLISH" />
    </div>
  );
};

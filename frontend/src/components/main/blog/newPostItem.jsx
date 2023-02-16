import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { TemplateButton } from "../../templates/button";
import { selectIsAuth } from "../../redux/authSlice";

import s from "../../styles/blog/newPost.module.css";

export const NewPostItem = () => {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to="/log-in" />;
  }

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

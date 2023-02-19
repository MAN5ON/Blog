import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../axios";

import { TemplateButton } from "../../templates/button";
import { selectIsAuth } from "../../redux/authSlice";

import s from "../../styles/blog/newPost.module.css";

export const NewPostItem = () => {
  const inputFileRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/log-in" />;
  }

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Error: Can't upload file.");
    }
  };

  return (
    <form className={s.newPost}>
      <input placeholder="Title" />
      <textarea placeholder="Write a preview for your post" />
      <TemplateButton
        text="Choose your intro picture"
        click={() => inputFileRef.current.click()}
      />
      <input
        type="file"
        ref={inputFileRef}
        placeholder="Choose your intro picture"
        hidden
      />
      <textarea placeholder="Tell us something interesting" />
      <div className={s.addButtons}>
        <TemplateButton text="Add Text" />
        <TemplateButton text="Add Picture" />
      </div>
      <div className={s.publish}>
        <TemplateButton text="PUBLISH" type="submit" disabled={!isValid} />
      </div>
    </form>
  );
};

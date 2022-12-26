import React from "react";
import s from "../../styles/newPost.module.css";

export const NewPostItem = () => {
  return (
    <div className={s.newPost}>
        <input placeholder="Title" />
        <textarea placeholder="Write a preview for your post" />
        <textarea placeholder="Tell us something interesting" />
        <button>+</button>
        <div className={s.addButtons}>
          <button>ADD TEXT BLOCK</button>
          <button>ADD IMAGE</button>
        </div>
        <div className={s.tags}>
            <input placeholder='add-tags' maxLength='20'></input>
        </div>
      <button>PUBLISH</button>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/blogSlice";

import s from "../../styles/blog.module.css";

export const InputComment = () => {
  const [comment, setComment] = useState("");

  return (
    <div className={s.leaveComment}>
      <textarea
        className={s.comment}
        value={comment}
        maxLength={100}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button className={s.sendButton} onClick={useDispatch(addComment(comment))}>
        ✍️
      </button>
    </div>
  );
};

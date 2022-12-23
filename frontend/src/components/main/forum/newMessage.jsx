import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/forumSlice";
import s from "../../styles/forum.module.css";

export const NewMessageForm = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const addMessageToForum = () => {
        if (text.trim().length) {
          dispatch(addMessage({ text }));
          setText("");
        }
      };

  return (
    <div className={s.inputForm}>
      <div className={s.username}>Guest3426345</div>

      <textarea
        className={s.message}
        placeholder="Text message"
        value={text}
        wrap="white-space"
        maxLength={300}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button className={s.sendButton} onClick={addMessageToForum}>
        Send Message
      </button>
    </div>
  );
};

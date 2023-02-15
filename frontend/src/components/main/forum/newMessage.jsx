import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/forumSlice";
import { TemplateButton } from "../../templates/button";
import s from "../../styles/forum/inputForm.module.css";

export const NewMessageForm = () => {
  const hiddenElem = document.querySelector('#hidden')
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addMessageToForum = () => {
    if (text.trim().length) {
      dispatch(addMessage({ text }));
      setText("");
      hiddenElem.scrollIntoView()
    }
  };

  return (
    <div className={s.inputForm}>
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
      <TemplateButton text="SEND" click={addMessageToForum} />
    </div>
  );
};

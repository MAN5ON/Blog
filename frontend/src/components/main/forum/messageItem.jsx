import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteMessage, updateMessageStatus } from "../../redux/forumSlice";

import s from "../../styles/forum/forum.module.css";

export const MessageItem = ({ id, text, date, updateStatus }) => {
  const [message, updateMessage] = useState(`${text}`);

  const dispatch = useDispatch();
  const updateMessageInForum = () => {
    if ((updateStatus = true)) {
      console.log(typeof message);
      if (message.trim().length) {
        dispatch(updateMessage({ id, message }));
      }
    } else {
      dispatch(updateMessageStatus({ id }));
    }
  };

  return (
    <div className={s.chatMessage}>
      <div className={s.headMessage}>
        <div className={s.username}>{id}</div>
        <button
          className={s.deleteMessage}
          onClick={() => dispatch(deleteMessage({ id }))}
        >
          ❌
        </button>
      </div>
      {updateStatus === false ? (
        <div className={s.message}>{text}</div>
      ) : (
        <textarea
          className={s.message}
          value={message}
          onChange={(e) => {
            updateMessage(e.target.value);
          }}
        />
      )}

      <div className={s.basementMessage}>
        <div className={s.dateMessage}>{date}</div>
        <button className={s.likes} onClick={updateMessageInForum}>
          🖊️
        </button>
      </div>
    </div>
  );
};

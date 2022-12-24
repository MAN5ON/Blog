import React from "react";
import s from "../../styles/forum.module.css";
import { useDispatch } from "react-redux";
import { deleteMessage, updateMessage } from "../../redux/forumSlice";

export const MessageItem = ({ id, text, date, updateStatus }) => {
  const dispatch = useDispatch();

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
      {updateStatus === false ?
        <div className={s.message}>{text}</div>
       :
       <textarea className={s.message}>{text}</textarea>
       }
      

      <div className={s.basementMessage}>
        <div className={s.dateMessage}>{date}</div>
        <button
          className={s.likes}
          onClick={() => dispatch(updateMessage({ id }))}
        >
          🖊️
        </button>
      </div>
    </div>
  );
};

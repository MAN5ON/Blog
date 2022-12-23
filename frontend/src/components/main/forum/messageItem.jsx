import React from "react";
import s from "../../styles/forum.module.css";
import { useDispatch } from "react-redux";
import { deleteMessage, toggleLikeStatus } from "../../redux/forumSlice";

export const MessageItem = ({ id, text, date, likesCount, likeStatus }) => {
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

      <div className={s.message}>{text}</div>

      <div className={s.basementMessage}>
        <div className={s.dateMessage}>{date}</div>
        <button className={s.likes} onClick={() => dispatch(toggleLikeStatus({id}))}>
          {likesCount} {likeStatus === true ? "❤️" : "🖤"}
        </button>
      </div>
    </div>
  );
};

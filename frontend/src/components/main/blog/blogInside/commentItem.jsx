import React from "react";

import s from "../../../styles/blog/commentItem.module.css";

export const CommentItem = (comment) => {
  return (
    <div className={s.commentItem}>
      <div className={s.headComment}>
        <div className={s.username}>{comment.id}</div>
        <button className={s.deleteComment}>❌</button>
      </div>

      <div className={s.textComment}>{comment.comment}</div>

      <div className={s.basementComment}>
        <div className={s.dateComment}>{comment.dateComment}</div>
        <button className={s.likes}>
          {comment.likesCount} {comment.likeStatus === true ? "❤️" : "🖤"}
        </button>
      </div>
    </div>
  );
};

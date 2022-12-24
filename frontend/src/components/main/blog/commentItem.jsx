import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteComment, toggleLikeStatus } from "../../redux/blogSlice";
import s from "../../styles/blog.module.css";

export const CommentItem = (comments) => {
  return (
    <div className={s.comments}>
      {comments.slice(0).map((comments) => (
        <div className={s.commentItem}>
          <div className={s.headComment}>
            <div className={s.username}>{comments.id}</div>
            <button
              className={s.deleteComment}
              onClick={() => deleteComment(comments.id)}
            >
              ❌
            </button>
          </div>

          <div className={s.textComment}>{comments.comment}</div>

          <div className={s.basementComment}>
            <div className={s.dateComment}>{comments.dateComment}</div>
            <button
              className={s.likes}
              onClick={() => toggleLikeStatus(comments.id)}
            >
              {comments.likesCount} {comments.likeStatus === true ? "❤️" : "🖤"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

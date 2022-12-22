import { useState, React } from "react";
import s from "../../styles/blog.module.css";

export const Blog = () => {
  const [comments, viewComments] = useState([]);
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (comment.trim().length) {
      viewComments([
        ...comments,
        {
          id: new Date().toISOString(),
          comment,
          likesCount: 0,
          likeStatus: false,
          dateComment: new Date().toLocaleString(),
        },
      ]);
      setComment("");
    }
  };

  const deleteComment = (commentID) => {
    viewComments(comments.filter((c) => c.id !== commentID));
  };
  const toggleLikeStatus = (commentID) => {
    viewComments(
      comments.map((c) => {
        if (c.id !== commentID) {
          return c;
        } else {
          return { ...c, likeStatus: !c.likeStatus };
        }
      })
    );
  };

  return (
    <div className={s.blogPage}>
      <div className={s.itemBlog}>
        <div className={s.authorBlog}>Renat Bikmukhamedov</div>
        <div className={s.nameBlog}>Blog #1</div>
        <img
          className={s.blogPic}
          src="https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        ></img>
        <div className={s.blogDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat
          corporis, maxime ducimus magnam cupiditate commodi veniam, officiis
          explicabo eveniet, temporibus cumque atque quasi aliquid dignissimos
          non nesciunt. Eos, omnis!
        </div>
        <div className={s.blogTags}>
          <div className={s.blogTagItem}>#first</div>
          <div className={s.blogTagItem}>#second</div>
          <div className={s.blogTagItem}>#third</div>
        </div>
        <div className={s.footerBlog}>
          <div className={s.blogDate}>Post created 18.12.2022</div>
          <div className={s.blogLikes}>15 likes</div>
          <div className={s.blogwiews}>141 wiews</div>
        </div>

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
                  {comments.likesCount}{" "}
                  {comments.likeStatus === true ? "❤️" : "🖤"}
                </button>
              </div>
            </div>
          ))}

          <div className={s.leaveComment}>
            <textarea
              className={s.comment}
              value={comment}
              maxLength={100}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button className={s.sendButton} onClick={addComment}>
              ✍️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

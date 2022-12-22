import { useState } from "react";
import s from "../../styles/forum.module.css";

export const Forum = () => {
  const [forum, viewForum] = useState([]);
  const [message, setMessage] = useState("");
  const addMessage = () => {
    if (message.trim().length) {
      viewForum([
        ...forum,
        {
          id: new Date().toISOString(),
          message,
          likesCount: 0,
          likeStatus: false,
          dateMessage: new Date().toLocaleString(),
        },
      ]);
      setMessage("");
    }
  };
  const deleteMessage = (messageID) => {
    viewForum(forum.filter((m) => m.id !== messageID));
  };
  const toggleLikeStatus = (messageID) => {
    viewForum(
      forum.map((m) => {
        if (m.id !== messageID) {
          return m;
        } else {
          return { ...m, likeStatus: !m.likeStatus}   
        }
      })
    );
  };

  return (
    <main className={s.forumPage}>
      <div className={s.inputForm}>
        <div className={s.username}>Guest3426345</div>
        <textarea
          className={s.message}
          placeholder="Text message"
          value={message}
          wrap="white-space"
          maxLength={300}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className={s.sendButton} onClick={addMessage}>
          Send Message
        </button>
      </div>
      {forum
        .slice(0)
        .reverse()
        .map((forum) => (
          <div className={s.chatMessage}>
            <div className={s.headMessage}>
              <div className={s.username}>{forum.id}</div>
              <button
                className={s.deleteMessage}
                onClick={() => deleteMessage(forum.id)}
              >
                ❌
              </button>
            </div>

            <div className={s.message}>{forum.message}</div>

            <div className={s.basementMessage}>
              <div className={s.dateMessage}>{forum.dateMessage}</div>
              <button
                className={s.likes}
                onClick={() => toggleLikeStatus(forum.id)}
              >
                {forum.likesCount} {forum.likeStatus === true ? "❤️" : "🖤"}
              </button>
            </div>
          </div>
        ))}
    </main>
  );
};

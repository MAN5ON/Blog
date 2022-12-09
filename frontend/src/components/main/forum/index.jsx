import s from "../../styles/forum.module.css";

export const Forum = () => {
  return (
    <main className={s.forumPage}>
      <div className={s.inputForm}>
        <div className={s.username}>Guest3426345</div>
        <textarea
          className={s.message}
          placeholder="Text message"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button className={s.sendButton}>Send Message</button>
      </div>
      <div className={s.chatMessage}>
        <div className={s.username}>Username</div>
        <div className={s.message}>Message</div>
        <div className={s.likesField}>
          <div className={s.likesCounter}>14</div>
          <button className={s.likes}>♡❤️</button>
        </div>
      </div>
    </main>
  );
};

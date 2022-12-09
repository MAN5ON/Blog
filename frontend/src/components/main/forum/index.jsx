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
        <div className={s.statMessage}>
          <div className={s.dateMessage}>10.12.2022</div>
          <button className={s.likes}>14 ♡❤️</button>
        </div>
      </div>
    </main>
  );
};

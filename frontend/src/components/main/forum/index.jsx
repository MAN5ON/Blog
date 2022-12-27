import React from "react";
import { useSelector } from "react-redux";

import { NewMessageForm } from "./newMessage";
import { MessageItem } from "./messageItem";
import s from "../../styles/forum/forum.module.css";

export const Forum = () => {
  const forum = useSelector((state) => state.forum.forumMessages);

  return (
    <main className={s.forumPage}>
      <div className={s.messageHistory}>
      {forum.slice(0).map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
      </div>
      <NewMessageForm />
    </main>
  );
};

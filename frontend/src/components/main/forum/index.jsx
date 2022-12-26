import React from "react";
import { useSelector } from "react-redux";

import { MessageItem } from "./messageItem";
import s from "../../styles/forum.module.css";
import { NewMessageForm } from "./newMessage";

export const Forum = () => {

  const forum = useSelector((state) => state.forum.forumMessages);

  return (
    <main className={s.forumPage}>
      <NewMessageForm />

      {forum
        .slice(0)
        .map((message) => (
          <MessageItem key={message.id} {...message} />
        ))}
    </main>
  );
};

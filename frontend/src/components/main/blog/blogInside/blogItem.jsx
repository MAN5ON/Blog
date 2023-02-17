import axios from "../../../axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { IsLoading } from "../../../templates/isLoading";
import { CommentItem } from "./commentItem";
import { InputComment } from "./newComment";
import { TemplateButton } from "../../../templates/button";

import s from "../../../styles/blog/blogItem.module.css";

export const BlogItem = () => {
  const userData = useSelector((state) => state.auth.data);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []);

  return isLoading ? (
    <IsLoading />
  ) : (
    <div className={s.blogPage}>
      <div className={s.blogItem}>
        <div className={s.info}>
          <div className={s.creationDate}>
            {new Date(data.createdAt).toLocaleString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour12: "false",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
          <div className={s.author}>{data.author}</div>
        </div>
        <h1 className={s.header}> {data.title.toUpperCase()} </h1>
        <div className={s.content}>
          {data.postArr.map((item) =>
            item.itemType === "text" ? (
              <div className={s.textItem}>{item.itemContent}</div>
            ) : item.itemType === "image" ? (
              <img
                className={s.imageItem}
                src={item.itemContent}
                alt="Didn't load"
              />
            ) : (
              <div className={s.error}>Error: undefined type.</div>
            )
          )}
        </div>
        <div className={s.blogFooter}>
          {userData?._id === data.author ? (
            <div className={s.withProperty}>
              <TemplateButton text="Delete" />
              <TemplateButton text="Edit" />
            </div>
          ) : (
            <div className={s.withProperty}></div>
          )}
          <div className={s.statistic}>
            <span className={s.views}>{data.viewsCount} views 👀</span>
            <span className={s.likes}>{data.likesCount} likes ❤️</span>
          </div>
        </div>
      </div>
      {/* {data.comments.map((comment) => (
        <CommentItem
          author={comment.author}
          text={comment.text}
          dateComment={new Date(comment.createdAt).toLocaleString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour12: "false",
            hour: "numeric",
            minute: "numeric",
          })}
          likesCount={comment.likesCount}
        />
      ))} */}

      <InputComment />
    </div>
  );
};

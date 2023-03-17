import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "../../axios";
import { EditPage } from "./editPage";
import { UserPage } from "./userPage";
import { IsLoading } from "../../templates/isLoading";

import s from "../../styles/profile/profile.module.css";

export const Profile = () => {
  const [editPage, showEditPage] = useState(false);

  const userData = useSelector((state) => state.auth.data);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/profile/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователя");
      });
  }, []);

  const props = { showEditPage, data };

  return isLoading ? (
    <IsLoading />
  ) : (
    <div className={s.profilePage}>
      <div className={s.userLogin}>{data.login}</div>
      <div className={s.userName}>{data.name + " " + data.surname}</div>

      {editPage ? <EditPage {...props} /> : <UserPage {...props} />}

      <div className={s.regDate}>
        {new Date(data.createdAt).toLocaleString("en", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour12: "false",
          hour: "numeric",
          minute: "numeric",
        })}
      </div>
    </div>
  );
};

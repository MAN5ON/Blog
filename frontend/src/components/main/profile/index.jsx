import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "../../axios";
import { EditPage } from "./editPage";
import { UserPage } from "./userPage";
import { IsLoading } from "../../templates/isLoading";

import s from "../../styles/profile/profile.module.scss";
import avatar from "../../../assets/img/photo-1511367461989-f85a21fda167.jpeg";

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
		<main className={s.profilePage}>
			<header className={s.profileHead}>
				<img src={avatar} alt="profile pic" className={s.profilePic} />
				<article className={s.userInfo}>
					<footer className={s.regDate}>
						{new Date(data.createdAt).toLocaleString("en", {
							year: "numeric",
							month: "long",
							day: "numeric",
							hour12: "false",
							hour: "numeric",
							minute: "numeric",
						})}
					</footer>
					<article>
						<h1 className={s.userLogin}>
							{data.login.toUpperCase()}
						</h1>
						<p className={s.userName}>
							{data.name + " " + data.surname}
						</p>
					</article>
				</article>
			</header>
			<p>About me:</p>

			{editPage ? <EditPage {...props} /> : <UserPage {...props} />}
		</main>
	);
};

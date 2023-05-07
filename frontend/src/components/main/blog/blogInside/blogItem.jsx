import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "../../../axios";
import { IsLoading } from "../../../templates/isLoading";
import { CommentItem } from "./commentItem";
import { InputComment } from "./newComment";
import { TemplateButton } from "../../../templates/button";

import s from "../../../styles/blog/blogItem.module.scss";

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
		<main className={s.blogPage}>
			<article className={s.blogItem}>
				<article className={s.info}>
					<p className={s.creationDate}>
						{new Date(data.createdAt).toLocaleString("en", {
							year: "numeric",
							month: "long",
							day: "numeric",
							hour12: "false",
							hour: "numeric",
							minute: "numeric",
						})}
					</p>
					<p className={s.author}>{data.login}</p>
				</article>
				<h1 className={s.header}> {data.title.toUpperCase()} </h1>
				<article className={s.content}>
					{data.postArr.map((item) =>
						item.itemType === "text" ? (
							<p className={s.textItem}>{item.itemContent}</p>
						) : item.itemType === "image" ? (
							<img
								className={s.imageItem}
								src={item.itemContent}
								alt="Didn't load"
							/>
						) : (
							<div className={s.error}>
								Error: undefined type.
							</div>
						)
					)}
				</article>
				<footer className={s.blogFooter}>
					{userData && userData._id === data.author ? (
						<article className={s.withProperty}>
							<TemplateButton text="Delete" />
							<TemplateButton text="Edit" />
						</article>
					) : userData ? (
						<TemplateButton text="Commend" />
					) : (
						<div></div>
					)}
					<p className={s.statistic}>
						{data.viewsCount} views | {data.likesCount} likes
					</p>
				</footer>
			</article>
			{data.comments &&
				data.comments.map((comment) => (
					<CommentItem
						author={comment.author}
						text={comment.text}
						dateComment={new Date(comment.createdAt).toLocaleString(
							"en",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
								hour12: "false",
								hour: "numeric",
								minute: "numeric",
							}
						)}
						likesCount={comment.likesCount}
					/>
				))}

			{userData ? (
				<InputComment />
			) : (
				<p>Log in to use the functionality of the site</p>
			)}
		</main>
	);
};

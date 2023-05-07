import React from "react";

import s from "../../../styles/blog/commentItem.module.scss";

export const CommentItem = (comment) => {
	return (
		<article className={s.commentItem}>
			<header className={s.headComment}>
				<p className={s.username}>{comment.id}</p>
				<button className={s.deleteComment}>❌</button>
			</header>
			<p className={s.textComment}>{comment.comment}</p>
			<footer className={s.basementComment}>
				<p className={s.dateComment}>{comment.dateComment}</p>
				<button className={s.likes}>
					{comment.likesCount}{" "}
					{comment.likeStatus === true ? "❤️" : "🖤"}
				</button>
			</footer>
		</article>
	);
};

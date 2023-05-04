import React, { useState } from "react";

import { TemplateButton } from "../../../templates/button";

import s from "../../../styles/blog/newComment.module.scss";

export const InputComment = () => {
	const [comment, setComment] = useState("");

	return (
		<div className={s.leaveComment}>
			<textarea
				className={s.comment}
				value={comment}
				maxLength={100}
				onChange={(e) => {
					setComment(e.target.value);
				}}
			/>
			<TemplateButton text="✍️" />
		</div>
	);
};

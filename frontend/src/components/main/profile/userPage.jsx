import s from "../../styles/profile/profile.module.scss";

export const UserPage = ({ userInfo, showEditPage }) => {
	return (
		<div className={s.userPage}>
			<div className={s.shortInfo}>{userInfo}</div>
			<button
				className={s.settingsButton}
				onClick={() => showEditPage(true)}
			>
				⚙️
			</button>
		</div>
	);
};

import s from "../../styles/profile/profile.module.scss";
export const UserPage = ({ userInfo, showEditPage }) => {
	return (
		<div className={s.userPage}>
			{userInfo ? (
				<p className={s.shortInfo}>{userInfo}</p>
			) : (
				<footer className={s.helper}>Write something here!</footer>
			)}
			<span onClick={() => showEditPage(true)} className={s.edit}>
				edit
			</span>
		</div>
	);
};

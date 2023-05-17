import s from "../../styles/profile/profile.module.scss";

export const UserPage = ({userInfo, showEditPage, isYourPage}) => {
    return (<section className={s.userPage}>

        {userInfo ? <p className={s.shortInfo}>{userInfo}</p> : !isYourPage ?
            <footer className={s.shortTemp}>We don't know much about this user yet.</footer> : <>
                <footer className={s.helper}>Write something here!</footer>
                <span onClick={() => showEditPage(true)} className={s.edit}>edit</span>
            </>}
    </section>);
};

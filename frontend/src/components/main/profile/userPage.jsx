import s from "../../styles/profile.module.css";

export const UserPage = ({pageText, changePageText, showEditPage}) => {
  return (
    <div className={s.userPage}>
      <div className={s.shortInfo}>{pageText}</div>
      <button className={s.settingsButton} onClick={()=> showEditPage(true)}>⚙️</button>
    </div>
  );
};

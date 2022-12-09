import s from "../../styles/profile.module.css";

export const EditPage = () => {
  return (
    <div className={s.editPage}>
      <textarea className={s.userInfo} maxLength="300" />
      <button className={s.saveButton}>Save</button>
    </div>
  );
};

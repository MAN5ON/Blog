import s from "../../styles/profile.module.css";

export const EditPage = () => {
  return (
    <div className={s.editPage}>
      <textarea className={s.userInfo} maxlength="300" />
      <button className={s.saveButton}>Save</button>
    </div>
  );
};

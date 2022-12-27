import s from "../../styles/profile/profile.module.css";

export const EditPage = ({ pageText, changePageText, showEditPage }) => {
  return (
    <div className={s.editPage}>
      <textarea
        className={s.userInfo}
        maxLength="150"
        value={pageText}
        onChange={(e) => changePageText(e.target.value)}
      />
      <button className={s.saveButton} onClick={() => showEditPage(false)}>
        Save
      </button>
    </div>
  );
};

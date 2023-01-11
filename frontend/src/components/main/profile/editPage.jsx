import s from "../../styles/profile/profile.module.css";
import { TemplateButton } from "../../templates/button";

export const EditPage = ({ pageText, changePageText, showEditPage }) => {
  return (
    <div className={s.editPage}>
      <textarea
        className={s.userInfo}
        maxLength="150"
        value={pageText}
        onChange={(e) => changePageText(e.target.value)}
      />
      <TemplateButton text="SAVE" click={() => showEditPage(false)}/>
    </div>
  );
};

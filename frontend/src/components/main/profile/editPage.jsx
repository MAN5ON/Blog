import React, {useState} from "react"

import { TemplateButton } from "../../templates/button";

import s from "../../styles/profile/profile.module.css";

export const EditPage = ({ showEditPage, data }) => {
  const [userInfo, changeUserInfo] = useState("");
  const handlerSave = () => {
    showEditPage(false)

  }

  return (
    <form className={s.editPage}>
      <textarea
        className={s.userInfo}
        maxLength="150"
        value={userInfo}
        onChange={(e) => changeUserInfo(e.target.value)}
      />
      <TemplateButton text="SAVE" click={() => showEditPage(false)}/>
    </form>
  );
};

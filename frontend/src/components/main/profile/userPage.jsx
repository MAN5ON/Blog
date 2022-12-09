import s from "../../styles/profile.module.css";

export const UserPage = () => {
  return (
    <div className={s.userPage}>
      <div>
        Write here something...
        <br />
        what I can use.
        <br />
        to Find
      </div>
      <button className={s.settingsButton}>⚙️</button>
    </div>
  );
};

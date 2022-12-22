import s from "../styles/auth.module.css";

export const LogIn = ({ showLogin }) => {
  return (
    <div className={s.authPage}>
      <div className={s.inputs}>
        <input placeholder="Email"/>
        <input type="password" placeholder="Password"/>
      </div>
      <button className={s.MainButton}>LOG IN</button>
      <button className={s.SecondButton} onClick={()=>showLogin(false)}>Sign Up</button>
    </div>
  );
};

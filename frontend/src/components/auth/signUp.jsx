import s from "../styles/auth.module.css";

export const SignUp = ({ showLogin }) => {
  return (
    <div className={s.authPage}>
      <div className={s.inputs}>
        <input placeholder="Email" />
        <input placeholder="Login" />
        <input placeholder="Name" />
        <input placeholder="Surname" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </div>
      <button className={s.MainButton}>SIGN UP</button>
      <button className={s.SecondButton} onClick={()=>showLogin(true)}>Log In</button>
    </div>
  );
};

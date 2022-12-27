import { TemplateButton } from "../templates/button";
import s from "../styles/auth/auth.module.css";

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
      <TemplateButton text='SIGN UP'/>
      <button className={s.SecondButton} onClick={()=>showLogin(true)}>Log In</button>
    </div>
  );
};

import { TemplateButton } from "../templates/button";
import s from "../styles/auth/auth.module.css";
import { Link } from "react-router-dom";

export const SignUp = ({ showLogin }) => {
  return (
    <div className={s.authPage}>
      <div className={s.inputs}>
        <input type="email" placeholder="Email" />
        <div className={s.helpText}></div>
        <input placeholder="Login" />
        <div className={s.helpText}></div>
        <input placeholder="Name" />
        <div className={s.helpText}></div>
        <input placeholder="Surname" />
        <div className={s.helpText}></div>
        <input type="password" placeholder="Password" />
        <div className={s.helpText}></div>
        <input type="password" placeholder="Confirm Password" />
        <div className={s.helpText}></div>
      </div>
      <TemplateButton text="SIGN UP" />
      <Link to="/log-in">
        <button className={s.SecondButton}>Log In</button>
      </Link>
    </div>
  );
};

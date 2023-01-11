import { TemplateButton } from "../templates/button";
import s from "../styles/auth/auth.module.css";
import { Link } from "react-router-dom";

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
      <TemplateButton text="SIGN UP" />
      <Link to="/log-in">
        <button className={s.SecondButton}>Log In</button>
      </Link>
    </div>
  );
};

import { Link } from "react-router-dom";
import { TemplateButton } from "../templates/button";
import s from "../styles/auth/auth.module.css";

export const LogIn = () => {
  return (
    <div className={s.authPage}>
      <div className={s.inputs}>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <TemplateButton text="LOG IN" />
      <Link to="/sign-up">
        <button className={s.SecondButton}>Sign Up</button>
      </Link>
    </div>
  );
};

import { TemplateButton } from "../resources/button";
import s from "../styles/auth.module.css";

export const LogIn = ({ showLogin }) => {
  return (
    <div className={s.authPage}>
      <div className={s.inputs}>
        <input placeholder="Email"/>
        <input type="password" placeholder="Password"/>
      </div>
      <TemplateButton text='LOG IN'/>
      <button className={s.SecondButton} onClick={()=>showLogin(false)}>Sign Up</button>
    </div>
  );
};

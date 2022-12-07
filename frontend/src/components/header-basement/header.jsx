import { Link } from "react-router-dom";
import s from "./../styles/header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.navBar}>
        <Link to="/" className={s.header}>
          <h2>Welcome</h2>
        </Link>
        <Link to="/forum" className={s.header}>
          Forum
        </Link>
        <Link to="/profile" className={s.header}>
          Profile
        </Link>
      </div>

      <Link to="/login" className={s.loginButton}>
        Login
      </Link>
    </header>
  );
};

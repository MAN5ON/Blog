import { Link } from "react-router-dom";
import s from "./../styles/header.module.css";

export const Header = () => {
  const isAuth = false
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

      {isAuth ? (
        <div className={s.headerIsAuth}>
          <Link to="/post-editor">
            <button>New post</button>
          </Link>
          <button>Log out</button>
        </div>
      ) : (
        <Link to="/log-in" className={s.loginButton}>
          <button>Auth</button>
        </Link>
      )}
    </header>
  );
};

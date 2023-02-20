import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout, selectIsAuth } from "../redux/authSlice";
import { TemplateButton } from "../templates/button";

import s from "./../styles/header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <header className={s.header}>
      <Link to="/posts" className={s.header}>
        <h1>Welcome</h1>
      </Link>

      {isAuth ? (
        <div className={s.headerIsAuth}>
          <Link to="/profile">
            <button className={s.profile}>👤</button>
          </Link>
          <Link to="/post-editor">
            <TemplateButton text="New Post" />
          </Link>
          <div className={s.logout}>
            <TemplateButton
              click={onClickLogout}
              text="Logout"
              className={s.logout}
            />
          </div>
        </div>
      ) : (
        <Link to="/log-in">
          <TemplateButton text="Auth" />
        </Link>
      )}
    </header>
  );
};

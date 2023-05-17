import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {logout, selectIsAuth} from "../redux/authSlice";

import s from "./../styles/header/header.module.scss";

export const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const onClickLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            dispatch(logout());
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("userID")
        }
    };

    return (<header className={s.header}>
        <footer className={s.footer}>
            <a className={s.link} href="https://vk.com/renais5ance">
                VK
            </a>
            <a className={s.link} href="https://t.me/M4N50N">
                Telegram
            </a>
            <a className={s.link} href="https://github.com/MAN5ON">
                GitHub
            </a>
            <a
                className={s.link}
                href="https://www.codewars.com/users/MAN5ON"
            >
                Codewars
            </a>
        </footer>
        <nav className={s.nav}>
            <Link to="/" className={s.welcome}>
                <h1>Welcome</h1>
            </Link>
            {isAuth ? (<div className={s.isAuth}>
                <Link to="/post-editor">
                    <span>New Post</span>
                </Link>
                <Link to={`/profile/${isAuth._id}`}>
                    <span>Profile</span>
                </Link>
                <Link to="/about">
                    <span>About</span>
                </Link>
                <span onClick={onClickLogout} className={s.logout}>
							Log out
						</span>
            </div>) : (<Link to="/log-in">
                <span className={s.login}>Log in</span>
            </Link>)}
        </nav>
    </header>);
};

import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import axios from "../../axios";
import {EditPage} from "./editPage";
import {UserPage} from "./userPage";
import {IsLoading} from "../../templates/isLoading";
import {selectIsAuth} from "../../redux/authSlice";

import s from "../../styles/profile/profile.module.scss";
import avatar from "../../../assets/img/photo-1511367461989-f85a21fda167.jpeg";
import {NotFound} from "../../notFound";


export const Profile = () => {
    const [editPage, showEditPage] = useState(false);
    const isAuth = useSelector(selectIsAuth)
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false)
    const {id} = useParams();
    const isYourPage = id === isAuth?._id

    useEffect(() => {
        axios
            .get(`/profile/${id}`)
            .then((res) => {
                setData(res.data);
                setError(false)
                setLoading(false);
            })
            .catch((err) => {
                console.warn(err);
                setError(true)
                setLoading(false)
                alert(err)
            });
    }, []);

    const props = {showEditPage, data, isYourPage};

    return isLoading ? (<IsLoading/>) : !isAuth ?
        <main className={s.confirm}>To view information about other users, you must <Link to={"/log-in"}>LOG IN</Link>
        </main> : isError ? <NotFound/> : (<main className={s.profilePage}>
                <header className={s.profileHead}>
                    <img src={avatar} alt="profile pic" className={s.profilePic}/>
                    <section className={s.userInfo}>
                        <footer className={s.regDate}>
                            {new Date(data.createdAt).toLocaleString("en", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour12: "false",
                                hour: "numeric",
                                minute: "numeric",
                            })}
                        </footer>
                        <section>
                            <h1 className={s.userLogin}>
                                {data.login.toUpperCase()}
                            </h1>
                            <p className={s.userName}>
                                {data.name + " " + data.surname}
                            </p>
                        </section>
                    </section>
                </header>
                <p>About me:</p>
                {editPage ? <EditPage {...props} /> : <UserPage {...props} />}
            </main>
        )
};

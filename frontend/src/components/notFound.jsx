import React from "react";

import s from "./styles/notFound.module.scss"
import img404 from "../assets/img/404.svg"
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <main className={s.lostPage}>
            <h1>Oops... You shouldn't be here...</h1>
            <p>Perhaps the information on this page or the link is no longer relevant.</p>
            <p>Follow This -> <Link to="/">link</Link> {"<-"} </p>
            <img src={img404} alt={"404"}/>
        </main>
    )
}
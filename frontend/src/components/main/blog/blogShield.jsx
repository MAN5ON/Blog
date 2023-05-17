import React from "react";
import {Link} from "react-router-dom";

import s from "../../styles/blog/blogShield.module.scss";

export const BlogShield = ({
                               id,
                               author,
                               title,
                               introText,
                               introIMG,
                               creationDate,
                               likes,
                               views,
                           }) => {
    return (
        <article className={s.blogShield}>
            <Link to={`/${id}`} className={s.picContain}>
                <img className={s.blogPic} src={introIMG} alt=""/>
            </Link>
            <section className={s.info}>
                <header className={s.headerPost}>
                    <p className={s.datePost}>{creationDate}</p>
                    <header className={s.statistic}>
                        <p>{views} views</p>
                        <p> {likes} likes</p>
                    </header>
                </header>
                <section className={s.textPost}>
                    <Link to={`/${id}`} className={s.headPost}>
                        {title.toUpperCase()}
                    </Link>
                    <p className={s.descriptionPost}>{introText}</p>
                </section>
                <Link to={`/profile/${author._id}`} className={s.authorPost}>
                    by {author.login.toUpperCase()}
                </Link>
            </section>
        </article>
    );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";

import { BlogShield } from "./blogShield";
import s from "../../styles/blog/blog.module.css";
import { fetchPosts } from "../../redux/blogSlice";
import { BlogLoadingShield } from "./blogLoadingShield";

export const Blog = () => {
  const dispatch = useDispatch()
  const { posts, tags, comments } = useSelector(state => state.blog)
  const isPostLoading = posts.status === 'loading'
  useEffect(()=> {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className={s.blogPage}>
      {(isPostLoading ? [Array(3)] : posts.items.map((obj, index) => isPostLoading ?
       (<BlogLoadingShield  key={index}/>) :
        (<BlogShield key={index}
           id={obj._id}
           title={obj.title} 
           introText={obj.introText} 
           introIMG={obj.introIMG} 
           creationDate={new Date(obj.createdAt).toLocaleString("en", {  year: 'numeric', month: 'long', day: 'numeric', hour12: 'false', hour: 'numeric', minute:'numeric', })}
           likes={obj.likesCount}
           views={obj.viewsCount}/>)
      ))}
    </div>
  );
};

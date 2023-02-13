import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";

import { BlogShield } from "./blogShield";
import s from "../../styles/blog/blog.module.css";
import { fetchPosts } from "../../redux/blogSlice";
import { IsLoading } from "../../templates/isLoading";

export const Blog = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.blog)
  const isPostLoading = posts.status === 'loading'
  useEffect(()=> {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className={s.blogPage}>
      {(isPostLoading ? <IsLoading/> :
       posts.items == null ? alert("Post's array is empty") :
        posts.items.map((obj, index) => 
        (<BlogShield key={index}
           id={obj._id}
           author = {obj.author.login}
           title={obj.title} 
           introText={obj.introText} 
           introIMG={obj.introIMG} 
           tags={obj.tags}
           creationDate={new Date(obj.createdAt).toLocaleString("en", {  year: 'numeric', month: 'long', day: 'numeric', hour12: 'false', hour: 'numeric', minute:'numeric', })}
           likes={obj.likesCount}
           views={obj.viewsCount}/>)
      ))}
    </div>
  );
};

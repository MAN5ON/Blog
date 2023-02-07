import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import s from "../../../styles/blog/blogItem.module.css";
import { CommentItem } from "./commentItem";
import { InputComment } from "./newComment";

export const BlogItem = () => {
  const [data, setData] = useState;
  const [isLoading, setLoading] = useState;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/posts/${id}`).then( res => {
      setData(res.data)
    }).catch( err => {console.warn(err)
    alert('Ошибка при получении статьи')
  })
  }, [])

  return (
    <div className={s.blogItem}>
      <h1 className={s.header}> Заголовок </h1>
      <div className={s.info}>
        <div className={s.creationDate}>Post created 18.12.2022</div>
        <div className={s.author}>Renat Bikmukhamedov</div>
      </div>
      <div className={s.textItem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        quae quas assumenda illo illum ea! Itaque amet nesciunt nulla officia
        aut nihil ratione vero. Optio blanditiis magni at delectus repellat!
        Voluptatum, harum. Praesentium consequatur qui, deserunt aliquam amet
        vero nulla odit eum aut sint quaerat numquam, exercitationem tempore
        quos sit. Cumque fuga cum fugit laudantium, veritatis sunt beatae
        quisquam nam. Ea suscipit impedit similique sequi, ex, iste recusandae
        quaerat fuga culpa aliquam corrupti autem rem, laudantium eligendi
        dolorum et ipsa ut non. Harum quis minus aliquid enim, rem magnam dolor?
        Temporibus debitis voluptatem, similique incidunt alias consequuntur,
        magni aliquid suscipit ipsum tenetur nostrum dolore voluptatum nemo
        aperiam soluta officia dignissimos ex rerum reprehenderit iure hic.
        Eaque dolores velit at labore. Officia laborum, hic consequuntur
        reiciendis quas quasi qui necessitatibus alias natus assumenda
        excepturi, fugit facere ea maxime laudantium. Molestiae nulla neque
        provident deleniti quasi eveniet beatae corporis, facere architecto
        consectetur. Cumque rerum dolore quidem accusantium earum laborum
        tempore voluptatem dolorum repellendus molestias fuga beatae, quod qui?
        Quaerat eveniet beatae tenetur hic recusandae velit obcaecati? Facilis
        necessitatibus explicabo recusandae sequi voluptate. Labore, odio
        laudantium ipsum omnis nobis ab aut quisquam dolorum assumenda totam.
        Totam eum accusantium consequatur, vel dolor libero! Illo modi sed quos
        odit provident excepturi, quasi ipsum commodi voluptatum. Fugiat quasi
        placeat soluta sed quis fugit voluptatum illo quas nihil nisi corporis
        distinctio, tempora voluptatibus. Pariatur, molestias ea? Omnis
        necessitatibus suscipit tempore alias quasi nihil rem possimus
        reiciendis error.
      </div>
      <img
        className={s.imageItem}
        src="https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      ></img>
      <div className={s.textItem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti
        odio. Numquam deleniti ratione veniam illum inventore mollitia odit, est
        soluta saepe? Ipsam quod consequuntur, nemo vel ab facilis sapiente.
        Consectetur aspernatur adipisci praesentium minima harum laborum amet
        nihil saepe maxime dolore reprehenderit unde, quibusdam odit sunt,
        dolorum placeat iure esse dicta corporis minus in aliquid dignissimos
        fugit. Labore, nulla. Voluptate accusantium consequuntur iste est
        adipisci ullam nihil alias molestiae magni, doloremque sint sit
        blanditiis! Aspernatur molestias incidunt nihil. Sit necessitatibus
        quasi aliquam molestias, nobis dolorum ipsa labore porro veniam. Culpa
        nulla tempore vero optio assumenda vitae in tempora quibusdam fugit
        temporibus! Hic sapiente accusamus qui voluptatem! Soluta nemo nulla
        magnam! Nobis maxime ipsa deleniti exercitationem culpa rerum eveniet
        hic? Esse minus rem obcaecati consequatur at saepe corrupti eveniet est
        aperiam maiores, hic voluptas, facere fugiat omnis! Deleniti eligendi
        laudantium odio. A, veniam repudiandae? Magnam et facere quo ad nemo?
      </div>

      <div className={s.blogTags}>
        <div className={s.blogTagItem}>#first</div>
        <div className={s.blogTagItem}>#second</div>
        <div className={s.blogTagItem}>#third</div>
      </div>

      <div className={s.likes}>15 ❤️</div>
      <hr width="70%" color="gray" />

      <CommentItem />
      <InputComment />
    </div>
  );
};

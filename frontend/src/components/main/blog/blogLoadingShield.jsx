import React from "react";

import s from "../../styles/blog/blog.module.css";

export const BlogLoadingShield = () => {
  return (
    <div className={s.itemBlogLoading}>
      <div className={s.nameBlog}>Loading...</div>
      <div className={s.blogDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis sit officia aliquam eaque facilis ut explicabo nemo nesciunt earum corrupti temporibus nostrum molestias tenetur fugit, ratione incidunt minus ipsa.
        Reprehenderit dolores sunt ipsa dolorum possimus est. Asperiores voluptas atque sed dolorum fugiat dolorem suscipit aperiam omnis a vitae nihil placeat similique dolore, et fuga, ducimus quisquam natus. Voluptatum, soluta?
        Beatae dignissimos voluptate illo, doloremque quam provident necessitatibus tenetur distinctio quaerat culpa praesentium, ratione quos odio? Incidunt, et culpa, porro minima fugiat, cupiditate soluta illo neque ipsum quas facere unde.
        Quos totam, rem reprehenderit fugiat pariatur beatae. Dolore expedita quidem velit impedit repellat dignissimos, praesentium esse corrupti alias a quaerat doloribus maxime, ipsum accusamus asperiores ducimus et tempore itaque fugit?
        Ut sequi numquam ipsum maiores sint deleniti, accusantium corporis iusto culpa esse impedit exercitationem, dolores eum! A aliquid ratione dolorem dolor suscipit ab saepe facilis perspiciatis repellat. Voluptatem, dolorum doloremque.
      </div>
      <div className={s.blogTags}>
        <div className={s.blogTagItem}>#???</div>
        <div className={s.blogTagItem}>#???</div>
        <div className={s.blogTagItem}>#???</div>
      </div>
      <div className={s.footerBlog}>
        <div className={s.blogDate}>???</div>
        <div className={s.blogLikes}>??? likes</div>
        <div className={s.blogwiews}>??? wiews</div>
      </div>
    </div>
  );
};

import s from "../../styles/blog.module.css";

export const Blog = () => {
  return (
    <div className={s.blogPage}>
      <div className={s.blogItem}>
        <div className={s.blogAuthor}>Renat Bikmukhamedov</div>
        <div className={s.blogName}>Blog #1</div>
        <img
          className={s.blogPic}
          src="https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        ></img>
        <div className={s.blogDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quaerat
          corporis, maxime ducimus magnam cupiditate commodi veniam, officiis
          explicabo eveniet, temporibus cumque atque quasi aliquid dignissimos
          non nesciunt. Eos, omnis!
        </div>
        <div className={s.blogTags}>
          <div className={s.blogTagItem}>#first</div>
          <div className={s.blogTagItem}>#second</div>
          <div className={s.blogTagItem}>#third</div>
        </div>
        <div className={s.footerBlog}>
          <div className={s.blogDate}>Post created 18.12.2022</div>
          <div className={s.blogLikes}>15 likes</div>
          <div className={s.blogwiews}>141 wiews</div>
        </div>
        <div className={s.comments}>
          <div className={s.commentItem}>
            <div className={s.authorComment}>Maria Lepilina</div>
            <div className={s.comment}>Cool!</div>
            <div className={s.statComment}>
              <div className={s.dateComment}>18.12.2022</div>
              <button className={s.likesComment}>2 ❤️</button>
            </div>
          </div>

          <div className={s.commentItem}>
            <div className={s.authorComment}>Maria Lepilina</div>
            <div className={s.comment}>Cool!(2)</div>
            <div className={s.statComment}>
              <div className={s.dateComment}>18.12.2022</div>
              <button className={s.likesComment}>1 ♡</button>
            </div>
          </div>

          <div className={s.commentItem}>
            <div className={s.authorComment}>Maria Lepilina</div>
            <div className={s.comment}>Cool!(3)</div>
            <div className={s.statComment}>
              <div className={s.dateComment}>18.12.2022</div>
              <button className={s.likesComment}>1 ♡</button>
            </div>
          </div>

          <div className={s.leaveComment}>
            <textarea />
            <button className={s.sendButton}>✍️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

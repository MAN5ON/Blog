import s from "../styles/basement.module.css";

export const Basement = () => {
  return (
    <footer className={s.footer}>
      <p>Links:</p>
      <div className={s.basement}>
        <div className={s.social}>
          <a href="https://github.com/MAN5ON">
            <p>GitHub</p>
          </a>
          <a href="https://www.codewars.com/users/MAN5ON">
            <p>Codewars</p>
          </a>
          <a href="https://vk.com/renais5ance">
            <p>VK</p>
          </a>
        </div>
        <div className={s.gmail}>
          <a className={s.mail} href="mailto: bikmukhamedov.renat@gmail.com">
            <p>Contact Us!</p>
          </a>
          <div>+7(906)403-07-75</div>
        </div>
        
      </div>
      <p>2022. Povered by Renat Bikmukhamedov. All Rights Reserved.</p>
    </footer>
  );
};

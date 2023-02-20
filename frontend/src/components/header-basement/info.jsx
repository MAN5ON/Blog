import s from "../styles/info.module.css";

export const Info = () => {
  return (
    <div className={s.info}>
      Вы находитесь на странице пэт проекта "Fullstack Blog using MERN" <br />
      Я, как её создатель, приветствую вас!
      <br />
      <br />
      На сайте используются: <br />
      <br />
      Frontend:
      <ul>
        <li>React</li>
        <li>Redux (Toolkit)</li>
        <li>React Router Dom</li>
        <li>React Hook Form</li>
        <li>Axios</li>
      </ul>
      <br />
      Backend:
      <ul>
        <li> MongoDB</li>
        <li>Express, Express-validator</li>
        <li>JWT</li>
        <li>Bcrypt</li>
        <li>Multer</li>
      </ul>
      <br />
      <footer className={s.footer}>
        <div className={s.contacts}>
          <a className={s.link} href="mailto: bikmukhamedov.renat@gmail.com">
            <p>
              Contact Me: <br />
              bikmukhamedov.renat@gmail.com
            </p>
          </a>
          <a className={s.link} href="https://t.me/M4N50N">
            <p>Telegram</p>
          </a>
          <p>+7(906)403-07-75 - Ренат</p>
        </div>
        <div className={s.social}>
          <p>Links:</p>
          <a className={s.link} href="https://github.com/MAN5ON">
            <p>GitHub</p>
          </a>
          <a className={s.link} href="https://www.codewars.com/users/MAN5ON">
            <p>Codewars</p>
          </a>
          <a className={s.link} href="https://vk.com/renais5ance">
            <p>VK</p>
          </a>
        </div>
      </footer>
    </div>
  );
};

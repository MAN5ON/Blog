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
    </div>
  );
};

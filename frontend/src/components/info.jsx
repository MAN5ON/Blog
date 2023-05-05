import { Link } from "react-router-dom";
import s from "./styles/info.module.scss";

export const Info = () => {
	return (
		<main className={s.info}>
			Вы находитесь на странице pet проекта "Fullstack Blog using MERN"
			<br /> Я, как её создатель, приветствую вас!
			<br /> Для перехода на страницу блога кликните по `
			<Link
				to={"/post"}
				style={{ textDecoration: "underline", color: "lime" }}
			>
				Welcome
			</Link>
			` в левом верхнем углу <br />
			На сайте используются:
			<div className={s.stack}>
				<div className={s.firstCol}>
					<ul>
						Frontend:
						<li>SASS</li>
						<li>React</li>
						<li>Redux (Toolkit)</li>
						<li>React Router Dom</li>
						<li>React Hook Form</li>
						<li>Axios</li>
					</ul>
				</div>
				<div className={s.secCol}>
					<ul>
						Backend:
						<li> MongoDB</li>
						<li>Express, Express-validator</li>
						<li>JWT</li>
						<li>Bcrypt</li>
						<li>Multer</li>
					</ul>
				</div>
			</div>
			<a className={s.link} href="mailto: bikmukhamedov.renat@gmail.com">
				<p>
					Contact Me: <br />
					bikmukhamedov.renat@gmail.com
				</p>
			</a>
		</main>
	);
};

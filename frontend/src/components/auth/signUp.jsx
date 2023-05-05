import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { TemplateButton } from "../templates/button";
import { selectIsAuth, fetchRegister } from "../redux/authSlice";

import s from "../styles/auth/auth.module.scss";

export const SignUp = ({ showLogin }) => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "test2@test.ru",
			login: "testUser2",
			name: "Ivan",
			surname: "Ivanov",
			password: "123456",
		},
		mode: "onChange",
	});

	const onSubmit = async (values) => {
		const data = await dispatch(fetchRegister(values));

		if (!data.payload) {
			alert("Error: failed to register");
		}

		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload.token);
		}
	};

	if (isAuth) {
		return <Navigate to="/posts" />;
	}

	return (
		<main className={s.authPage}>
			<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<article className={s.inputs}>
					<input
						type="email"
						placeholder="Email"
						{...register("email", {
							required: "please enter your email",
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "email validation error",
							},
						})}
					/>
					<footer className={s.helpText}>
						{errors.email?.message}
					</footer>
					<input
						placeholder="Login"
						{...register("login", {
							required: "please enter your login",
							pattern: {
								value: /^[a-zA-Z0-9]+$/,
								message:
									"login can only contain  english letters and numbers",
							},
							minLength: {
								value: 5,
								message: "minimum login length is 5",
							},
							maxLength: {
								value: 25,
								message: "maximum login length is 25",
							},
						})}
					/>
					<footer className={s.helpText}>
						{errors.login?.message}
					</footer>
					<input
						placeholder="Name"
						{...register("name", {
							required: "please enter your name",
							pattern: {
								value: /^[A-Za-z]+$/i,
								message: "you can use only english letters",
							},
							minLength: {
								value: 2,
								message: "minimum name length is 2",
							},
							maxLength: {
								value: 25,
								message: "maximum name length is 25",
							},
						})}
					/>
					<footer className={s.helpText}>
						{errors.name?.message}
					</footer>
					<input
						placeholder="Surname"
						{...register("surname", {
							required: "please enter your surname",
							pattern: {
								value: /^[A-Za-z]+$/i,
								message: "you can use only english  letters",
							},
							minLength: {
								value: 2,
								message: "minimum surname length is 2",
							},
							maxLength: {
								value: 25,
								message: "maximum surname length is 25",
							},
						})}
					/>
					<footer className={s.helpText}>
						{errors.surname?.message}
					</footer>
					<input
						type="password"
						placeholder="Password"
						{...register("password", {
							required: "please enter your password",
							minLength: {
								value: 5,
								message: "minimum password length is 5",
							},
							maxLength: {
								value: 25,
								message: "maximum password length is 25",
							},
						})}
					/>
					<footer className={s.helpText}>
						{errors.password?.message}
					</footer>
				</article>
				<article className={s.buttons}>
					<div className={s.mainButton}>
						<TemplateButton
							text="SIGN UP"
							type="submit"
							disabled={!isValid}
						/>
					</div>
					<Link to="/log-in" className={s.secondButton}>
						Log in
					</Link>
				</article>
			</form>
		</main>
	);
};

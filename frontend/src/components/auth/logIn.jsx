import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { TemplateButton } from "../templates/button";
import { fetchLogin, selectIsAuth } from "../redux/authSlice";

import s from "../styles/auth/auth.module.scss";

export const LogIn = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "test@test.ru",
			password: "123456",
		},
		mode: "onChange",
	});

	const onSubmit = async (values) => {
		const data = await dispatch(fetchLogin(values));

		if (!data.payload) {
			alert("Error: failed to login");
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
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
							text="LOG IN"
							type="submit"
							disabled={!isValid}
						/>
					</div>
					<Link to="/sign-up" className={s.secondButton}>
						Sign up
					</Link>
				</article>
			</form>
		</main>
	);
};

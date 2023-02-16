import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { TemplateButton } from "../templates/button";
import { selectIsAuth, fetchRegister } from "../redux/authSlice";

import s from "../styles/auth/auth.module.css";

export const SignUp = ({ showLogin }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
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
    <div className={s.authPage}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputs}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "please enter your email" })}
          />
          <div className={s.helpText}>{errors.email?.message}</div>
          <input
            placeholder="Login"
            {...register("login", { required: "please enter your login" })}
          />
          <div className={s.helpText}>{errors.login?.message}</div>
          <input
            placeholder="Name"
            {...register("name", { required: "please enter your name" })}
          />
          <div className={s.helpText}>{errors.name?.message}</div>
          <input
            placeholder="Surname"
            {...register("surname", { required: "please enter your surname" })}
          />
          <div className={s.helpText}>{errors.surname?.message}</div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "please enter your password",
            })}
          />
          <div className={s.helpText}>{errors.password?.message}</div>
        </div>
        <TemplateButton text="SIGN UP" type="submit" disabled={!isValid}/>
      </form>
      <Link to="/log-in">
        <button className={s.SecondButton}>Log In</button>
      </Link>
    </div>
  );
};

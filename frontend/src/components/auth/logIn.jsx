import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TemplateButton } from "../templates/button";
import s from "../styles/auth/auth.module.css";
import { fetchAuth, selectIsAuth } from "../redux/authSlice";

export const LogIn = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "123456",
    },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  if (isAuth) {
    return <Navigate to="/posts" />;
  }

  return (
    <div className={s.authPage}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputs}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "please enter your email" })}
          />
          <div className={s.helpText}>{errors.email?.message}</div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "please enter your password",
            })}
          />
          <div className={s.helpText}>{errors.password?.message}</div>
        </div>
        <TemplateButton text="LOG IN" type="submit" />
      </form>
      <Link to="/sign-up">
        <button className={s.SecondButton}>Sign Up</button>
      </Link>
    </div>
  );
};

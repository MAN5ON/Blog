import React, { useState } from "react";
import { LogIn } from "./logIn";
import { SignUp } from "./signUp";

export const Auth = () => {
  const [login, showLogin] = useState(true);

  return login ? <LogIn /> : <SignUp />;
};

import React, { useState } from "react";
import { LogIn } from "./logIn";
import { SignUp } from "./signUp";

export const Auth = () => {
  const [login, showLogin] = useState(false);

  return login ? <LogIn /> : <SignUp />;
};

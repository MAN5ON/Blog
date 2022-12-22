import React, { useState } from "react";
import { LogIn } from "./logIn";
import { SignUp } from "./signUp";

export const Auth = () => {
  const [login, showLogin] = useState(true);

  const props = {showLogin}


  return login ? <LogIn {...props}/> : <SignUp {...props}/>;
};

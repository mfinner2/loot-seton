import React from "react";
import Parse from "parse";
import { Link } from "react-router-dom";

const AuthModule = () => {
  //display to select register/login
  return (
    <div>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <br />
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;

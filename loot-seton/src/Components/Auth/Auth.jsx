import React from "react";
import Parse from "parse";
import { Link } from "react-router-dom";
import './Auth.css'

const AuthModule = () => {
  //display to select register/login
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100vw'}}>
      <div className="outerBox">
        <div>
          <h1>Loot Seton</h1>
        </div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <br />
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthModule;

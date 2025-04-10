import React from "react";
import Parse from "parse";
import { Link } from "react-router-dom";
import './Auth.css'

const AuthModule = () => {
  //display to select register/login
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100vw'}}>
      <div className="border">
        <div className="innerBox">
          <div>
            <h1>tool notes</h1>
          </div>
          <div>
            <div className="button">
              <Link to="/register">
                <button class="btn btn-outline-dark custom-btn">Register</button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <button class="btn btn-outline-dark custom-btn">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModule;

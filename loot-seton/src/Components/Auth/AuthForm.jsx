import React from "react";
import Parse from "parse";
import { Navigate, useNavigate } from "react-router-dom";
import "./Auth.css";

const AuthForm = ({ user, onChange, isLogin, onSubmit }) => {
  const navigate = useNavigate();
  //make sure user isn't logged in due to registering
  const goBackHandler = () => {
    Parse.User.logOut();

    navigate("/");
  };

  //display to login or register for the service
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100vw'}}>
      <div className="border">
        <div className="innerBox">
          <form className="form-design" onSubmit={onSubmit}>
            {!isLogin ? 
            <div>
            <div>
              <label>First Name</label>
              <br />
              <input
                type="text"
                value={user.firstName}
                onChange={onChange}
                name="firstName"
                placeholder="first name"
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input
                type="text"
                value={user.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="last name"
                required
              />
            </div>{" "}
            </div> : <></>}
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                value={user.email}
                onChange={onChange}
                name="email"
                placeholder="email"
                required
              />
            </div>{" "}
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                value={user.password}
                onChange={onChange}
                name="password"
                placeholder="password"
                min="0"
                required
              />
            </div>
            <div className="button2">
              <button class="btn btn-outline-dark custom-btn2" type="submit" onSubmit={onSubmit}>
                Submit
              </button>
            </div>
          </form>
          <div className="button2">
            <button class="btn btn-outline-dark custom-btn2" onClick={goBackHandler}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

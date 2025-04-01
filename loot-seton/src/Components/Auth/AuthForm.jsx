import React from "react";
import Parse from "parse";
import { Navigate, useNavigate } from "react-router-dom";

const AuthForm = ({ user, onChange, isLogin, onSubmit }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    Parse.User.logOut();

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <div>
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <button onClick={goBackHandler}>Back</button>
      </div>
    </div>
  );
};

export default AuthForm;

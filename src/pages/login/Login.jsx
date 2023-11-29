import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setUser, setToken } from "../../Features/auth/authenticationSlice";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = async () => {
    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "f104bi07c490",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: "facebook",
        }),
      }
    );

    response = await response.json();
    console.log("status", response.token);
    // projectID: "f104bi07c490",
    if (response && response.token) {
      toast.success(response.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
      dispatch(setUser(response.data));
      dispatch(setToken(response.token));
    } else {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="login">
      <ToastContainer />
      <div className="card">
        <div className="left">
          <h2>
            facebook <br />-
          </h2>
          <p>
            facebook helps you connect and share with the people in your life.
          </p>
          <span>Don't have An Account?</span>
          <Link to={"/signup"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <form className="right">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="passsword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              logIn();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
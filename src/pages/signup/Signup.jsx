import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setToken, setUser } from "../../Features/auth/authenticationSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
          appType: "facebook",
        }),
      }
    );
    const res = await response.json();
    console.log("register", response);
    if (res.status === "success") {
      // console.log("sign up data", response.data);
      dispatch(setUser(res.data));
      dispatch(setToken(res.token));

      toast.success(res.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="signup">
      <ToastContainer />
      <div className="card">
        <div className="left">
          <h2>
            -<br />
            facebook Signup
            <br />-
          </h2>
          <p>
            facebook helps you connect and share with the people in your life.
          </p>
          <span>Have An Account?</span>
          <Link to={"/login"}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input
            type="text"
            required
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
              SignUp();
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
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
          <input type="text" required placeholder="User Name" />
          <input type="email" required placeholder="Email" />
          <input type="password" required placeholder="passsword" />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

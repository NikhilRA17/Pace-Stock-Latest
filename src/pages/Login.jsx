import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinClick = () => {
    if (email === "" && password === "") {
      alert("Invalid Credentials");
    } else {
      navigate("/news");
      localStorage.set("user", email);
    }
    console.log(email, password);
  };
  return (
    <div className="loginMain">
      <div className="form">
        <h3>Welcome to Bardeen</h3>
        <h5>Let's log in to launch your automations</h5>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />

        <a href="">Create Account </a>

        <a href="">Forgot Password?</a>

        <br />
        <button onClick={signinClick} className="signin">
          Sign in
        </button>
        <br />
        <button>
          <i className="fa-brands fa-google fa-sm"></i>Sign in with Google
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <br />
        <button>
          <i className="fa-brands fa-github fa-xs"></i>Sign in with Github
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <br />
      </div>
    </div>
  );
};

export default Login;

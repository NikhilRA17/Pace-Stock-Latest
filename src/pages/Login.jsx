import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const getUserData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch(
      "https://news-app-react-5f488-default-rtdb.firebaseio.com/newsReactApp.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
    navigate("/news");
  };

  return (
    <div className="loginMain">
      <div className="form">
        <h3>Welcome to Bardeen</h3>
        <h5>Let's log in to launch your automations</h5>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={getUserData}
          placeholder="Email Address"
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={getUserData}
          placeholder="Password"
        />
        <br />

        <a href="">Create Account </a>

        <a href="">Forgot Password?</a>

        <br />
        <button onClick={postData} className="signin">
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

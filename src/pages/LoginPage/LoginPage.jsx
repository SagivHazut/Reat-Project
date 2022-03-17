import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Joi from "joi-browser";
import "./LoginPage.css";
import dog2 from "../../assets/dog2.jpg";

import loginSchema from "../../validation/login.validation";
import { authActions } from "../../store/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

  //routes
  const history = useHistory();
  const location = useLocation();

  //for redux actions
  const dispatch = useDispatch();
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);

  //useEffect
  useEffect(() => {
    emailRef.current.focus();
    console.log("ref");
  }, [emailRef]);

  const handleEmailChange = (event) => {
    // console.log("event", event);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    //prevent the form to do refresh
    if (event) {
      event.preventDefault();
    }
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
      //invalid email or password
      dispatch(authActions.logout());
    } else {
      //email and password is good
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch(authActions.login());
          localStorage.setItem("tokenKey", res.data.token);
          if (location.state === null) {
            history.push("/cardspanel");
          } else {
            if (location.state.fromPage) {
              history.push(location.state.fromPage);
            } else {
              history.push("/cardspanel");
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data);
          }
          localStorage.clear();
          dispatch(authActions.logout());
        });
    }
  };

  useEffect(() => {
    console.log("location.state", location.state);
    if (location.state) {
      if (location.state.email && location.state.password) {
        setEmail(location.state.email);
        setPassword(location.state.password);
        handleOnSubmit();
      }
    }
  }, [location.state, email, password]);

  return (
    <form className="LoginForm" onSubmit={handleOnSubmit}>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <br />
          <div class="fadeIn first">
            <img src={dog2} id="icon" alt="" />
          </div>
          <br />
          <h2>Login to your account</h2>
          <br />
          <div className="box">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              ref={emailRef}
              required
            ></input>
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            ></input>
            <br />
            <br />
            <button className="btn btn-danger">login</button>
            {/* like ngIf */}
            {loggedInRedux && (
              <div>
                your email is: {email}
                <br />
                your password is: {password}
              </div>
            )}
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;

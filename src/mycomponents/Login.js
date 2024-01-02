// Login.js
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";
import logo from "./image 4.png";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleinputchange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    let obj = {
      ...formData,
      [name]: value,
    };
    console.log(obj);
    setFormData(obj);
  };
  const handleLogin = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      console.log('hel4')
      const response = await axios.post(
        "https://cuvetserver.vercel.app/login",
        // "http://localhost:5000/login",
        formData
      );
      console.log(response);
      // Handle successful login (redirect, store token, etc.)
      if (response.data.login) {
        props.setLogin(true);
        navigate("/");
      }
      console.log('hell2')
    } catch (error) {
      console.error(error.response.data);
      console.log('hell1')
    }
  };

  return (
    <>
      <div className="flex justify-center m-4">
      <Link to='/'>
        <img src={logo} alt="" className="h-8" />
        </Link>
        <h1 className="text-2xl font-bold">Musicart</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center">
          <div className="flex flex-col border-2 rounded-lg  w-96 px-7 py-5">
            <h1 className="text-2xl pb-2">Sign in</h1>
            <label htmlFor="email">Enter your email or mobile number</label>
            <input name="email" type="text" onChange={handleinputchange} />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleinputchange}
            />
            <button
              type="submit"
              className="text-white bg-[#2E0052] pt-2 pb-2 mb-3 mt-3"
            >
              Continue
            </button>

            <p>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </div>
        </div>
      </form>
      <p className="text-center pt-4">---------- New to Musicart? ----------</p>
      <div className="flex justify-center">
        <Link to="/register">
          {" "}
          <button
            type="submit"
            className="border-2 pr-24 pl-24 pt-5 pb-5 mb-3 mt-3"
          >
            Create your Musicart account
          </button>
        </Link>
      </div>
      <div className="text-center bg-[#2E0052] text-white p-5 mt-24">
        Musicart | All rights reserved
      </div>
    </>
  );
};

export default Login;

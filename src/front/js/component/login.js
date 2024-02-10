import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputData.email == "") {
      return;
    }
    const data = await actions.login(inputData);
    if (!data) {
      return;
    }
    navigate("/private");
  };

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={inputData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={inputData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary me-4">
          Submit
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setInputData({
              email: "",
              password: "",
            });
          }}
        >
          Clear
        </button>
      </form>
    </>
  );
};

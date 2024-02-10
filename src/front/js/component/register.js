import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputData.email == "") {
      return;
    }
    const data = await actions.register(inputData);
    if (!data) {
    }
    console.log("Register:", data);
  };
  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>Register</h2>
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
      </div>
    </>
  );
};

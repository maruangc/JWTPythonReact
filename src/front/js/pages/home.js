import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "../component/login";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Login />
    </div>
  );
};

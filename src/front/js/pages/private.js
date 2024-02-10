import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <div className="container">
      <div className="m-5">
        <h1>This page is confidential</h1>
        <ul>
          {store.users.length > 0 ? (
            store.users.map((item) => {
              return <li key={item.id}>{item.email}</li>;
            })
          ) : (
            <div>esperando datos</div>
          )}
        </ul>
      </div>
    </div>
  );
};

import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
    },
    actions: {
      login: async (e) => {
        const resp = await fetch(process.env.BACKEND_URL + "api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        });
        const data = await resp.json();
        if (data.error) {
          toast(data.error);
          return;
        }
        //localStorage.setItem() solo almacena string
        localStorage.setItem("data", data.auth_token);
        return data;
      },
      register: async (e) => {
        const resp = await fetch(process.env.BACKEND_URL + "api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        });
        const data = await resp.json();
        if (data.error) {
          toast(data.error);
          return;
        }
        console.log(data);
        toast(data.data);
        return data;
      },
      getUsers: async () => {
        const resp = await fetch(process.env.BACKEND_URL + "api/private", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("data")}`,
          },
        });
        const data = await resp.json();
        if (data.error) {
          toast("Error: " + data.error);
        }
        const store = getStore();
        setStore({ users: data.users });
        return;
      },
    },
  };
};

export default getState;

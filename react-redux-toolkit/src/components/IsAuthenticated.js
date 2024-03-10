import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import config from "../config";
import { useState, useEffect } from "react";

const IsAuthenticated = () => {
  const [isAuth, setIsAuth] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .post(
        `${config.authUrl.isTokenAuth}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        setIsAuth(res.data.isAuthenticated);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isAuth == null) {
    return <div></div>;
  } else {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default IsAuthenticated;

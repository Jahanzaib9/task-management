import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let checkUser = localStorage.getItem("username");

    if (!checkUser) {
      navigate("/");
    }
  }, [navigate]);

  return <div className={styles["parallax-container"]}>{children}</div>;
};

// import React from "react";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();
  let userCheck = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("username");
    navigate("/");
  }

  return (
    <Navbar
      style={{ zIndex: 100 }}
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={styles["main-div"]}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className={styles.flex}>
            <Image
              className={styles.logo_style}
              src={logo}
              alt="logo"
              height="28"
            />
            <span className={styles.logo_text}>
              <b>TASK MANAGEMENT SYSTEM</b>
            </span>
          </div>
        </Navbar.Brand>

        <Nav>
          {userCheck && (
            <Button
              onClick={handleLogout}
              className={styles.nav_btn2}
              size={"sm"}
            >
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

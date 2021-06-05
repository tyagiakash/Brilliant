import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import SearchBtn from "./searchBtn";
import UserModal from "./userModal";
import icon from "../../src/logo.svg";

function AppNavbar({ user }) {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleClick = (login) => {
    if (!login) setIsLogin(false);
    setModalShow(true);
  };
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <>
      <Navbar
        className="bg-white border"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <span className="fs-4 fw-bolder">BRILLIANT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Today</Nav.Link>
              <Nav.Link active href="#">
                Courses
              </Nav.Link>
              <Nav.Link href="#">Practice</Nav.Link>
            </Nav>
            <Nav>
              {user && <SearchBtn />}
              {!user && (
                <>
                  {" "}
                  <Button
                    onClick={() => handleClick(true)}
                    style={{ width: "150px" }}
                    className="me-4 mt-1 mb-1"
                    variant="outline-primary"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => handleClick(false)}
                    style={{ width: "150px" }}
                    variant="primary"
                    className="mt-1"
                  >
                    Sign Up
                  </Button>{" "}
                </>
              )}
              {user && (
                <Button
                  onClick={handleLogout}
                  style={{ width: "150px" }}
                  className="ms-4 me-4"
                  variant="outline-dark"
                >
                  Log out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <UserModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        isLogin={isLogin}
      />
    </>
  );
}

export default AppNavbar;

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Facebook, Google, Envelope } from "react-bootstrap-icons";

function UserLoginItemComponent({ isLogin }) {
  const [login, setLogin] = useState(true);
  useEffect(() => {
    !isLogin ? setLogin(false) : setLogin(true);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    if (login) return setLogin(false);
    return setLogin(true);
  };
  return (
    <div className="row">
      <div
        className="d-none d-sm-none d-md-none d-lg-block  col-lg-6"
        style={{ backgroundColor: "#000000" }}
      >
        <img
          className="w-100"
          src="https://brilliant.org/site_media/version-3462815dcf/images/product-rocket_withvector_transparent.gif"
          alt=""
        />
      </div>
      <div className="col-12 col-lg-6 p-5">
        <div className="text-center">
          <h4 className="mb-5 mt-3">Excel in math and science.</h4>
          <div className="d-grid gap-2">
            <Button className="m-1" variant="primary" size="lg">
              <Facebook color="white" size={24} className="me-2" />
              {login ? "Log in with Facebook" : "Join Using Facebook"}
            </Button>
            <Button className="m-1" variant="outline-secondary" size="lg">
              <Google color="#DB4437" size={24} className="me-2" />
              {login ? "Log in with Google" : "Join Using Google"}
            </Button>
            {login && (
              <Button className="m-1" variant="dark" size="lg">
                Log in with Apple
              </Button>
            )}
            <Button className="m-1" variant="light" size="lg">
              <Envelope color="black" size={24} className="me-2" />
              {login ? "Log in with Email" : "Join Using Email"}
            </Button>
          </div>
          <h6 className="mt-5 mb-5">
            {login ? "New User? " : "Existing User? "}
            <a onClick={handleClick} href="#">
              {login ? "Sign Up" : "Sign In"}
            </a>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default UserLoginItemComponent;

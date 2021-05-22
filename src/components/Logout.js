import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default function Logout() {
  const [redirect, setRedirect] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setRedirect(true);
  }

  return (
    <React.Fragment>
      {redirect === true ? (
        <Redirect to="/" />
      ) : (
        <Button className="" variant="danger" onClick={logout}>
          Log out
        </Button>
      )}
    </React.Fragment>
  );
}

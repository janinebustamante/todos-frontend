import React from "react";

import Logout from "./Logout";

export default function Banner() {
  return (
    <React.Fragment>
      <Logout />
      <h1 className="text-center">Things to do:</h1>
    </React.Fragment>
  );
}

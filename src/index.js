import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

function Greeting() {
  return <h4>This is Josh and this is my first component!</h4>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Greeting />);

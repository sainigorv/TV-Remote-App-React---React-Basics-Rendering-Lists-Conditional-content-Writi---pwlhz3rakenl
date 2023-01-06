import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function myFunction(value) {
  console.log(value);
  document.getElementById("container").innerHTML = value;
}

ReactDOM.render(<App />, document.getElementById("root"));

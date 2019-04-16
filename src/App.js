import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);

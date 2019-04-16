import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "typeface-roboto";

class App extends React.Component {
  render() {
    return <Search />;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Movie from "./movies";

class App extends React.Component {
  render() {
    return (
      <div>
        <Movie />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

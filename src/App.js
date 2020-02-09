import React, { Component } from "react";
import { Button } from "./components";
import "./App.scss";
import ListCard from "./components/list-card/ListCard";

const header = "Hot Beverages";
const items = ["Coffee", "Tea", "Matcha"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <Button href="#" theme="go">
            {" "}
            Button{" "}
          </Button>
          <ListCard cardHeader={header} cardItems={items} />
        </div>
      </div>
    );
  }
}

export default App;

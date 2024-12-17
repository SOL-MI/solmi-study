import { Carousel } from "./components/carousel/Carousel";
import { Item } from "./components/carousel/Item";
import "./styles.css";
import React from "react";

function App() {
  const items = [
    <Item>Item 1</Item>,
    <Item>Item 2</Item>,
    <Item>Item 3</Item>,
    <Item>Item 4</Item>,
    <Item>Item 5</Item>,
  ];
  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
      <Carousel items={items} />
    </div>
  );
}

export default App;

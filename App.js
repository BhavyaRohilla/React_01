import React from "react";
import ReactDOM from "react-dom/client";

/*
ReactElement(Object) => HTML(Browser Understands)
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h1", {}, "I'm an h2 tag"),
  ])
);

console.log(parent); // object

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React!!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

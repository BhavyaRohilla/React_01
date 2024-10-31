import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste react using JSX
  </h1>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

const HeadingComponent = () => {
  return <h1>Reset, Restart, Refocus</h1>;
};

function ReactTitle() {
  return <h1>This is functional component using functional declaration</h1>;
}

const HeadingComponent2 = () => (
  <div id="container">
    {jsxHeading}
    <HeadingComponent />
    <ReactTitle />
    <h1>Hello World From React Using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent2 />); // Render functional component

/*
ReactElement(Object) => HTML(Browser Understands)


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
*/

// React.createElement => Object => HTMLElement(render);
/*
const heading = React.createElement("h1", { id: "heading" }, "Superbb react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



// JSX - is not HTML in JS, Html-like or XML-like syntax
//  JSX(transpiled before it reaches the jse) - PARCEL - Babel
// JSX => Babel transpiled it to React.createElement => ReactElement-js object => HTMLElement(render)
const jsxHeading = <h1 className="head">Superbb React using JSX</h1>;

// React Component
// Class Based Components - OLD
// Functional Component - NEW

//React Functional Component
const Title = () => {
  return <h1>React Functional Title Component</h1>;
};


// Component Composition
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">React Functional Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
*/

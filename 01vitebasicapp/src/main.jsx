import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
//import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Custom App </h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://goole.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherUser = "react";

const anotherElement = (
  <a href="htpps://google.com" target="_blank">
    Visit google
  </a>
);

//React syntax to create element(can write evaluated expressions)
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // anotherElement

  reactElement
  // <App />
);

export default MyApp;

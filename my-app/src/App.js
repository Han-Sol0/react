import logo from './logo.svg';
import './App.css';
//Императивный
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return /*#__PURE__*/_jsx("div", {
    className: "App",
    children: /*#__PURE__*/_jsxs("header", {
      className: "App-header",
      children: [/*#__PURE__*/_jsx("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }), /*#__PURE__*/_jsxs("p", {
        children: ["Edit ", /*#__PURE__*/_jsx("code", {
          children: "src/App.js"
        }), " and save to reload."]
      }), /*#__PURE__*/_jsx("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React Date().split(' ')[3];"
      })]
    })
  });
}
export default App;

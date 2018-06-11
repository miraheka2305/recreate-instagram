import React from "react";
import ReactDOM from "react-dom";
import Button from "./common/Button";
import LoginForm from "./login-page/LoginForm";
import LoginPage from "./login-page/LoginPage";
import LoginHeader from "./login-page/LoginHeader";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(<LoginHeader />, document.getElementById("root"));
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AgentsProvider from "./context/AgentsContext";
import "./index.css";

// @Provider


ReactDOM.render(
 <AgentsProvider>
  <App />
 </AgentsProvider>,    
  document.getElementById("root")
);

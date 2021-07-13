import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// @Provider
import ShowAgentListStateProvider from "./context/showAgentListState";

ReactDOM.render(
  <ShowAgentListStateProvider>
    <App />
  </ShowAgentListStateProvider>,
  document.getElementById('root')
);


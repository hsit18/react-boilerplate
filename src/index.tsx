import React from "react";
import ReactDOM from "react-dom";

const App = (): React.ReactElement => {
  const num = 2;

  return <div>React boilerplate App {num} </div>
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root'));

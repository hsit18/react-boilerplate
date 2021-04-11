import React from "react";
import ReactDOM from "react-dom";

const App = (): React.ReactElement => {
  const num: number = 2;

  return <div>React boilerplate App {num} </div>
};

ReactDOM.render(<App />, document.getElementById('root'));

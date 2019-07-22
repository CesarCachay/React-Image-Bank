import React from "react";
import Searcher from "./components/Searcher";

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher />
      </div>

      <div className="row justify-content-center" />
    </div>
  );
}

export default App;

import React from "react";
import Searcher from "./components/Searcher";

function App() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const askApi = async () => {
      if (value === "") return;

      const imagesPerPage = 30;
      const key = "13100183-97210bbb2673d002f41de0d77";
      const url = `https://pixabay.com/api/?key=${key}&q=${value}&per_page=${imagesPerPage}`;

      const response = await fetch(url);

      console.log(response);
    };

    askApi();
  }, [value]);

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher setValue={setValue} />
      </div>

      <div className="row justify-content-center" />
    </div>
  );
}

export default App;

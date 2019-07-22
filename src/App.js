import React from "react";
import Searcher from "./components/Searcher";
import ImagesList from "./components/ImagesList";

function App() {
  const [value, setValue] = React.useState("");
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const askApi = async () => {
      if (value === "") return;

      const imagesPerPage = 30;
      const key = "13100183-97210bbb2673d002f41de0d77";
      const url = `https://pixabay.com/api/?key=${key}&q=${value}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setImages(result.hits);
    };

    askApi();
  }, [value]);

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher setValue={setValue} />
      </div>

      <div className="row justify-content-center">
        <ImagesList images={images} />
      </div>
    </div>
  );
}

export default App;

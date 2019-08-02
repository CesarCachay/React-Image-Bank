import React from "react";
import Searcher from "./components/Searcher";
import ImagesList from "./components/ImagesList";

function App() {
  const [value, setValue] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    const askApi = async () => {
      if (value === "") return;

      const imagesPerPage = 30;
      const key = "13100183-97210bbb2673d002f41de0d77";
      const url = `https://pixabay.com/api/?key=${key}&q=${value}&per_page=${imagesPerPage}&page=${currentPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setImages(result.hits);
      const calculatePages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calculatePages);

      // Move to the top of the page
      const moveViewToTop = document.querySelector(".jumbotron");
      moveViewToTop.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    askApi();
  }, [value, currentPage]);

  const previousPage = e => {
    let currentPagePrevious = currentPage - 1;
    setCurrentPage(currentPagePrevious);
  };

  const nextPage = e => {
    let currentPageNext = currentPage + 1;
    setCurrentPage(currentPageNext);
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher setValue={setValue} />
      </div>

      <div className="row justify-content-center">
        <ImagesList images={images} />
        {currentPage === 1 ? null : (
          <button onClick={previousPage} className="btn btn-info mr-1">
            &laquo; Previous
          </button>
        )}
        {currentPage === totalPages ? null : (
          <button onClick={nextPage} className="btn btn-info">
            Next Page &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

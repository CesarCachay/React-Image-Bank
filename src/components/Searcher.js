import React, { useState } from "react";

import Error from "./Error";

function Searcher({ setValue }) {
  const [inputSearch, setInputSearch] = useState("");
  const [error, setError] = useState(false);

  const searchImage = e => {
    e.preventDefault();

    if (inputSearch === "") {
      setError(true);
      return;
    }

    setError(false);
    setValue(inputSearch);
  };

  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image, ejm: Soccer or Coffee"
            onChange={e => {
              setInputSearch(e.target.value);
            }}
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-success btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error message="Add something in the search input" /> : null}
    </form>
  );
}

export default Searcher;

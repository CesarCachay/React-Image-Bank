import React from "react";

function Searcher() {
  const [inputSearch, setInputSearch] = React.useState("");
  const [error, setError] = React.useState(false);

  const searchImage = e => {
    e.preventDefault();

    if (inputSearch === "") {
      setError(true);
      return;
    }

    setError(false);
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
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}

export default Searcher;

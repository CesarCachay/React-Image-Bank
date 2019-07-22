import React from "react";
import Image from "./Image";

const ImagesList = ({ images }) => {
  return (
    <div className="col-12 p-5 row">
      {images.map(image => (
        <Image image={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImagesList;

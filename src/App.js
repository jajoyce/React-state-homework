import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

export default function App() {
  const [bigImage, setBigImage] = useState({
    src:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    alt: "London",
    thumbKey: 0
  });

  function handleClick(img, city, index) {
    setBigImage({
      src: img,
      alt: city,
      thumbKey: index
    });
  }

  const images = imagesArr.map((elem, index) => {
    return (
      <img
        className={bigImage.thumbKey === index ? "thumb-selected" : "thumb"}
        src={elem.img}
        alt={elem.city}
        key={index}
        onClick={() => handleClick(elem.img, elem.city, index)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img id="bigimage" src={bigImage.src} alt={bigImage.alt} />
      </div>
    </div>
  );
}

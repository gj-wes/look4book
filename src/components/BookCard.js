import React from "react";

const BookCard = ({bookInfo, buyLink}) => (
  <div>
    <picture>
      <source srcSet={bookInfo.imageLinks.smallThumbnail}/>
      <img src={bookInfo.imageLinks.smallThumbnail} alt={`${bookInfo.title} cover`}/>
    </picture>
    <h3>{bookInfo.title}</h3>
    <p>{bookInfo.description}</p>
    <a href={buyLink} target="_blank" rel="noopener noreferrer">Play store</a>
  </div>
)

export default BookCard;
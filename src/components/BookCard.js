import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 hsla(0, 0%, 0%, 0.4);
  padding: 1.5rem;

  > img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  > h3 {
    font-size: 1.6rem;
    margin: 1.5rem 0 .7rem 0;
  }

  > h4 {
    font-size: 1.3rem;
    font-style: italic;
    color: gray;
    margin: 0;
  }

  > p {
    margin: 1.4rem 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const BookCard = ({bookInfo}) => (
  <Card>
    {bookInfo.imageLinks ? 
      <img src={bookInfo.imageLinks.thumbnail} alt={`${bookInfo.title} cover`}/>
      :
      <img src="https://placehold.it/128x196?text=Cover+Unavailable" alt="Cover art unavailable"/>
    }
    <h3>{bookInfo.title}</h3>
    {bookInfo.authors &&
      <h4>{bookInfo.authors[0]}</h4>
    }
    <p>{bookInfo.description}</p>
    <a href={bookInfo.infoLink} target="_blank" rel="noopener noreferrer">View on Play Store</a>
  </Card>
)

export default BookCard;
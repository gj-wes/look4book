import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 hsla(0, 0%, 0%, 0.4);
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    flex: 0 1 180px;
  }

  > h3 {
    font-size: 1.6rem;
    margin: 1.5rem 0 .2rem 0;
  }

  > h4 {
    font-size: 1.3rem;
    font-style: italic;
    color: gray;
    margin: 0;
  }

  > p {
    --lh: 1.3rem;
    --max-lines: 3;
    margin: 1.4rem 0;
    line-height: var(--lh);
    overflow: hidden;
    max-height: calc(var(--lh) * var(--max-lines));
  }

  > a {
    --colour: #FA709A;
    margin-top: auto;
    display: inline-block;
    align-self: flex-start;
    border: 2px solid var(--colour);
    border-radius: 5px;
    color: var(--colour);
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem 1.5rem;
    transition: opacity .2s linear;

    &:hover {
      opacity: 0.8;
    }
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
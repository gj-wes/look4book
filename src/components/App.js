import React, { Component } from "react";
import searchBook from "../api/searchBook";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeaderBar from "./HeaderBar";
import BookCard from "./BookCard";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: #E0EAFC;
    background: linear-gradient(to left, #CFDEF3, #E0EAFC);
    font-family: 'Merriweather', serif;
    line-height: 1.1;
  }
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
`;

class App extends Component {
  state = {
    books: []
  }

  onSearchSubmit = async searchText => {
    const results = await searchBook(searchText)
    this.setState({books: results.data.items})
  }

  render() {

    const renderedresults = this.state.books.map((b,i) => <BookCard key={i} bookInfo={b.volumeInfo} animKey={i}/>)
  
    return (
      <div>
        <GlobalStyle />
        <HeaderBar onSearchSubmit={this.onSearchSubmit}/>
        <MainGrid>
          {renderedresults}
        </MainGrid>
      </div>
    )
  }
}

export default App;
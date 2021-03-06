import React, { Component } from "react";
import searchBook from "../api/searchBook";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HeaderBar from "./HeaderBar";
import BookCard from "./BookCard";
import FullScreenSearch from "./FullScreenSearch";
import bgsvg from "../images/FullSearchBackground.svg";
import { Trail, Spring } from "react-spring/renderprops";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-image: url('${bgsvg}');
    background-size: 600px 300px;
    background-repeat: repeat;
    font-family: 'Merriweather', serif;
    line-height: 1.2;
    color: #2d2d2d;
  }
`;

const BooksGrid = styled.main`
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

    const renderedresults = this.state.books.map((b,i) => <BookCard key={i} bookInfo={b.volumeInfo} />)
  
    return (
      <div>
        <GlobalStyle />
        {this.state.books.length === 0 ? (
          <FullScreenSearch onSearchSubmit={this.onSearchSubmit} />
        ) : (
          <div>

            <Spring 
            from={{transform: 'translate3d(0,-40px,0)', opacity: 0 }}
            to={{transform: 'translate3d(0,0,0)', opacity: 1 }} >
              {props => <div style={props}><HeaderBar onSearchSubmit={this.onSearchSubmit}/></div>}
            </Spring>

            <BooksGrid>

              <Trail reset={true} 
                items={renderedresults} 
                keys={item => item.key} 
                from={{transform: 'translate3d(0,10px,0)', opacity: 0 }} 
                to={{transform: 'translate3d(0,0,0)', opacity: 1 }}
              >
                {item => props => <div style={props}>{item}</div>}
              </Trail>

            </BooksGrid>
            
          </div>
        )}
      </div>
    )
  }
}

export default App;
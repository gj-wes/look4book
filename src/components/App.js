import React, { Component } from "react";
import searchBook from "../api/searchBook";
import BookCard from "./BookCard";
import styled from "styled-components";

class App extends Component {
  state = {
    inputText: '',
    books: []
  }

  onSearchSubmit = async e => {
    e.preventDefault();
    const results = await searchBook(this.state.inputText)
    this.setState({books: results.data.items})
  }



  render() {
    const MainGrid = styled.main`
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(4, 1fr);
    `;
    const renderedresults = this.state.books.map((b,i) => <BookCard key={i} bookInfo={b.volumeInfo} buyLink={b.saleInfo.buyLink}/>)
  
    return (
      <div>
        <header>
          books
          <form onSubmit={this.onSearchSubmit}>
            <input type="text" value={this.setState.inputText} onChange={e => {this.setState({inputText: e.target.value})}}/>
            <button type="submit">Search</button>
          </form>
        </header>
        <MainGrid>
          {renderedresults}
        </MainGrid>
      </div>
    )
  }
}

export default App;
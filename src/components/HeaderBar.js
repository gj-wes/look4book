import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #FEE140;
  background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);


  > h2 {
    margin: 0;
    font-size: 2rem;
  }
`;

class HeaderBar extends Component {
  state = {
    inputText: ''
  }

  onSearchFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.inputText)
  }

  render() {

    return (
      <Header>
        {/* eslint-disable-next-line */}
        <h2>Books 📚</h2>
        <form onSubmit={this.onSearchFormSubmit}>
          <input required placeholder="Title, Author, ISBN" type="text" value={this.state.inputText} onChange={e => {this.setState({inputText: e.target.value})}}/>
          <button type="submit">Search</button>
        </form>
      </Header>
    )
  }
};

export default HeaderBar;
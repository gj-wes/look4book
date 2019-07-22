import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: middle;
  padding: 1rem 2rem;
  background-color: #FEE140;
  background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);

  > h2 {
    margin: 0;
    font-size: 2rem;
    align-self: center;
  }

  > form > input {
    width: 25rem;
    border: none;
    background-color: floralwhite;
    padding: .7rem 1.5rem;
    border-radius: 50px;
    transition: width .3s linear;
    font-size: 1.5rem;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 10px 5px #FEE140;
    }
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
          <input required 
            placeholder="Search" 
            type="text" 
            value={this.state.inputText} 
            onChange={e => {this.setState({inputText: e.target.value})}}
          />
        </form>
      </Header>
    )
  }
};

export default HeaderBar;
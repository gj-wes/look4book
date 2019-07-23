import React, { Component } from 'react';
import styled from "styled-components";

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 5rem;
    position: relative;
    transition: all .2s linear;

    &:hover {
      transform: translate(.3rem, -.3rem)
    }


    &::after {
      content: '';
      position: absolute;
      bottom: -.5rem;
      left: -1rem;
      z-index: -1;
      width: 100%;
      height: 70%;
      background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
      transition: all .2s linear;
    }

    &:hover::after {
      transform: translate(-.6rem, .6rem)
    }
  }

  > form > input {
    width: 60vw ;
    border: none;
    background: white;
    font-size: 3rem;
    line-height: 1;
    border-radius: 50px;
    padding: 2rem 4rem;

    @media (max-width: 80rem) {
      width: 90vw;
    }
  }
`;

class FullScreenSearch extends Component {
  state = {
    searchInputText: ''
  }

  componentDidMount() {
    this.refs.input.focus()
  }

  onSearchFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchInputText)
  }


  render() {
    return (
      <FullScreen>
        <h1>Look4book</h1>
        <form onSubmit={this.onSearchFormSubmit}>
          <input required 
            placeholder="Search by Title, Author, ISBN..." 
            type="text" 
            ref="input"
            value={this.state.searchInputText} 
            onChange={e => {this.setState({searchInputText: e.target.value})}}
          />
        </form>
      </FullScreen>
    )
  }
}

export default FullScreenSearch;
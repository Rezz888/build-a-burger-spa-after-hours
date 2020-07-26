import React from 'react';
import styled from "styled-components";
import burgerSplash from '../images/mae-mu-I7A_pHLcQK8-unsplash.jpg';
import { Link } from 'react-router-dom';
 
const HomePage = props => {

    return (
        <HomeContainer>
            <header>
                <h1>You Build It, You Eat It</h1>
            </header>
            <Link to='/buildaburger'>Build Your Burger</Link>
        </HomeContainer>
    );
}
const HomeContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    background-image: url(${burgerSplash});
    height: 80vh;
    background-size: cover;
    background-position: 50% 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 3.8rem;
        backdrop-filter: brightness(40%);
        padding: 20px;
        border-radius: 15px;
    }
    
  }

  a {
    text-decoration: none;
    font-size: 2.4rem;
    padding: 20px;
    border: 3px solid #fff;
    color: tomato;
    margin: 3rem 0;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
}
  
`
export default HomePage;
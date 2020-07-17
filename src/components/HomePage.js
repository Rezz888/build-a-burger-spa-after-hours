import React from 'react';
import styled from 'styled-components';
import burgerSplash from '../images/mae-mu-I7A_pHLcQK8-unsplash.jpg';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';

const HomePage = props => {
    return (
        <HomeContainer>
            <header>
                <h1>You Build It, You Eat It</h1>
            </header>
            <Link to='/buildaburger'>Build Your Burger</Link>
        {props.orders.map((order, i) => <OrderCard key={i} order={order} />)}
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        width: 100%;
        background-image: url(${burgerSplash});
        background-color: #000;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 60%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            color: #fff;
            margin-top: 5rem;
            font-size: 3.6rem;
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
        color: #fff;
        margin: 5rem 0 5rem 0;
        &:hover {
            background: rgba(255, 255, 255, 0.05);
        }
    }
    div {
        color: white;
    }
`

export default HomePage;
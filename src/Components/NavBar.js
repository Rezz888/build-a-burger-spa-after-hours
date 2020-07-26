import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = props => {

    return (
        <Navigation>

            <Link to="/">Home</Link>

        </Navigation>
    );

}

const Navigation = styled.nav`
   position: fixed;
   top: 0;
   width: 100%;
   background: darkgoldenrod;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 5rem;
   border-top-left-radius: 50px;
   border-top-right-radius: 50px;

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        margin-right: 50px;
    }
`
export default NavBar;
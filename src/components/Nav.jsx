import React from 'react';

// Import Style 
import styled from 'styled-components';


export default function Nav() {
    return (
        <StyledNav>
            <h1><a id='logo' href="/">Capture</a></h1>
            <ul>
                <li>
                    <a href="/">1. About us</a>
                </li>
                <li>
                    <a href="/work">2. Our works</a>
                </li>
                <li>
                    <a href="/contactus">3. Contact us</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style:none;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    #logo{
        font-size:1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
`;

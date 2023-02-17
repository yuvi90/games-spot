import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//----------------------------------------|

export const Sidebar = ({ isMenuOpen, setMenuOpen }) => {

    function menuHandler() {
        setMenuOpen(!isMenuOpen)
    }
    
    return (
        <SideBarDiv isMenuOpen={isMenuOpen} >
            <nav className="menu">
                <ul>
                    <li><Link to="/" onClick={menuHandler}>Home</Link></li>
                    <li><Link to="/all-games" onClick={menuHandler}>All Games</Link></li>
                </ul>
            </nav>
        </SideBarDiv>
    )
}

//----------------------------------------|
//Styling

const SideBarDiv = styled.aside`
    background-color: #151515;
    margin-top: 10vh;
    position: fixed;
    height: 90vh;
    width: 280px;
    padding: 6rem 0 4rem 3rem;
    transition: all 0.5s ease;
    transform: ${props => props.isMenuOpen ? 'translateX(-100%)' : 'translateX(0)'};
    opacity: ${props => props.isMenuOpen ? '0' : '1'};
    z-index: 100;

    @media screen and (max-width:650px) {
        width: 100%;
    }
    
    @media screen and (min-width:980px) {
        width: 280px;
        opacity: 1;
        transform: translate(0);
    }

    .menu {
        ul {
            color: #fff;
            font-size: 1.4rem;
            font-weight: bold;
            list-style: none;
            li {
                cursor: pointer;
                margin-top: 1rem;               
                a, a:visited {
                    text-decoration: none;
                    color: #fff;

                    &:hover {
                        color: #3B3B3B;
                    }
                }
            }
        }
    }
`
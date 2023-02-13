import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//----------------------------------------|

export const Sidebar = () => {
    return (
        <SideBarDiv>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-games">All Games</Link></li>
                </ul>
            </nav>
        </SideBarDiv>
    )
}

//----------------------------------------|
//Styling

const SideBarDiv = styled.aside`
    margin-top: 10vh;
    position: fixed;
    height: 90vh;
    width: 280px;
    padding: 6rem 0 4rem 3rem;
    overflow-y: scroll;

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
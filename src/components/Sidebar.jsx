import React from 'react';
import styled from 'styled-components';

//----------------------------------------|

export const Sidebar = () => {
    return (
        <SideBarDiv>
            <nav className="menu">
                <ul>
                    <li>Home</li>
                    <li>New Releases</li>
                    <li>All Games</li>
                    <li>Top</li>
                    <li>Reviews</li>
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
                &:hover {
                    color: #3B3B3B;
                }
            }
        }
    }
`
import React from 'react';
//-->> Redux
import { useSelector } from 'react-redux';
//-->> Styling & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    position: fixed;
    margin-top: 120px;
    width: 250px;
    height: 100%;

    .menu {
        padding-left: 3rem;

        ul {
            color: #fff;
            font-size: 1.6rem;
            font-weight: bold;
            list-style: none;
            margin-top: 5rem;

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
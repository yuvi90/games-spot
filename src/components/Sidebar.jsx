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
            <div className="logo">
                <h1>GAMESpot</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </SideBarDiv>
    )
}

//----------------------------------------|
//Styling

const SideBarDiv = styled.aside`
    /* background: grey; */
    width: 250px;
    height: 100%;

    .logo {
        margin-top: 100px;
        padding-top: 1.5rem;
        color: #fff;
    }

    .logo h1 {
        font-size: 1.8rem;
    }
    
    .menu ul {
        margin-top: 2.5rem;
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
        list-style: none;

        li {
            cursor: pointer;
            margin-top: 1.5rem;
            
            &:hover {
                color: #3B3B3B;
            }
        }
    }
`
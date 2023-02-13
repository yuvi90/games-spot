import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import styled from 'styled-components';
// Redux
import { useDispatch } from 'react-redux'
import { seacrchGames } from '../redux/actions'
import { useNavigate } from 'react-router-dom';

//------------------------------------------------------->> Components

export const TopBar = () => {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const pathTo = useNavigate();

  function searchHandler(event) {
    event.preventDefault();
    dispatch(seacrchGames(searchText));
    pathTo('/search')
    setSearchText('');
  }

  function inputHandler (event) {
    setSearchText(event.target.value);
  }

  return (
    <TopBarDiv>
      <div className="header-wrapper">
        <div className="logo">
          <h1>GameSpot</h1>
        </div>
        <div className="links">
          <a href="">Login</a>
          <a href="">Sign up</a>
          <form onSubmit={searchHandler} className='search-wrapper'>
            <input onChange={inputHandler} type="text" name="search" value={searchText} placeholder='Search' />
          </form>
        </div>
        <HiMenu className='menu-btn' />
      </div>
    </TopBarDiv>
  )
}

//------------------------------------------------------->> Styling 

const TopBarDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 1px #6b6b6b;
  background: #151515;
  z-index: 100;
  
  .header-wrapper {
    margin: 0 auto;
    min-height: 10vh;
    max-width: 1600px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem 0 3rem;

    .logo {
      h1 {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }

    .menu-btn {
      display: none;
      font-size: 2.2rem;
      cursor: pointer;
    }

    .links{
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        color: #fff;

        &:hover {
          color: #3B3B3B;
        }
      }
    }
    .search-wrapper {
      width: 300px;
      input {
        width: 100%;
        background: #3B3B3B;
        color: #fff;
        font-weight: 400;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        padding: 0.8rem 1.5rem;
        border: transparent;
        border-radius: 50px;
        outline: none;
      }
    }

    @media screen and (max-width:980px) {
      
      padding-right: 3rem;
      
      .menu-btn {
        display: block;
      }
      .links a {
        display: none;
      }
      .search-wrapper  {
        display: none;
      }
    }
    
    @media screen and (max-width:650px) { 
      padding: 0 2rem;
    }

  }
`
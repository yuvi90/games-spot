import React from 'react'
import styled from 'styled-components'

export const TopBar = () => {
  return (
    <TopBarDiv>
      <div className="logo">
        <h1>GameSpot</h1>
      </div>
      <input type="text" name="search" id="" placeholder='Search' />
      <div className="links">
        <a href="">Login</a>
        <a href="">Sign Up</a>
      </div>
    </TopBarDiv>
  )
}

const TopBarDiv = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 120px;
    max-width: 1600px;
    background: #151515;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    z-index: 100;

    @media screen and (max-width:650px) {
      padding: 0 2rem;
      min-height: 90px;

      input {
        display: none;
      }
    }

    .logo {        
      h1 {
        font-size: 2rem;
        cursor: pointer;
      }
    }

    input {
        width: 50%;
        border-radius: 50px;
        color: #fff;
        background: #3B3B3B;
        padding: 1rem 1.5rem;
        border: transparent;
        outline: none;
        font-size: 1.2rem;
      
      @media screen and (max-width:980px) {
        display: none;
      }
    }

    .links{
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      gap: 2rem;
      
      a {
        color: #fff;
        &:hover {
          color: #3B3B3B;
        }
      }
      @media screen and (max-width:650px) {
        display: none;
      }
    }
`


import React from 'react'
import styled from 'styled-components'

export const TopBar = () => {
  return (
    <TopBarDiv>
        <input type="text" name="seacrh" id="" placeholder='Seacrh' />
    </TopBarDiv>
  )
}

const TopBarDiv = styled.div`
    color: #fff;
    min-height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 40%;
        color: #fff;
        padding: 1rem;
        border: transparent;
        border-radius: 50px;
        outline: none;
        background: #3B3B3B;
    }
`


import React from 'react'
import styled from 'styled-components'

//------------------------------------------------------->> Components

export const Footer = () => {
  return (
    <FooterDiv>
        <p>Made with ❤️</p>
    </FooterDiv>
  )
}

//------------------------------------------------------->> Styling 

const FooterDiv = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
`
import React from 'react'
import styled from 'styled-components'

//------------------------------------------------------->> Components

export const Footer = () => {
  return (
    <FooterDiv>
      <div className='footer-container'>
        <p>Made with ❤️</p>
      </div>
    </FooterDiv>
  )
}

//------------------------------------------------------->> Styling 

const FooterDiv = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #151515ed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .footer-container {
    margin: 0 auto;
    max-width: 1600px;
  }
`
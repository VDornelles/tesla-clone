import React from 'react'
import { Container, CustomMenu, Menu, RightMenu } from './styles'



function Header() {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
         <a href="#">Model S</a>
         <a href="#">Model Y</a>
         <a href="#">Model 3</a>
         <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#"> Shop</a>
        <a href="#"> Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  )
}

export default Header

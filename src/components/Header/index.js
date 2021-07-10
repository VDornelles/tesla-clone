import React, { useState } from 'react'
import { BugerNav, CloseWrapper, Container, CustomClose, CustomMenu, Menu, RightMenu } from './styles'
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const cars= useSelector(selectCars)


  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
             <a key={index} href="as">{ car }</a>
        ))}
        
      </Menu>
      <RightMenu>
        <a href="#"> Shop</a>
        <a href="#"> Tesla Account</a>
        <CustomMenu onClick={() => setSideBarStatus(true)}/>
      </RightMenu>
      <BugerNav show={sideBarStatus}>
        <CloseWrapper onClick={() => setSideBarStatus(false)}>
          <CustomClose />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
              <li key={index}><a href="as">{car}</a></li>
        ))}
        <li><a href="#"> Existing Inventory</a></li>
        <li><a href="#"> Used Inventory</a></li>
        <li><a href="#"> Trade-in</a></li>
        <li><a href="#"> CyberTruck</a></li>
        <li><a href="#"> Roadster</a></li>
      </BugerNav>
    </Container>
  )
}

export default Header

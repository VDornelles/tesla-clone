import React from 'react'
import { ButtonGroup, Buttons, DownArrow, ItemText, LeftButton, RightButton, Wrap } from './styles'
import Fade from 'react-reveal/Fade'

function Section({
  title, 
  description, 
  backgroundImg, 
  leftBtnText, 
  rightBtnText
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p> {description} </p>
        </ItemText>
      </Fade>
      <Buttons>
       
          <ButtonGroup >
            <Fade left>
              <LeftButton>
                {leftBtnText}
              </LeftButton>
            </Fade>
            <Fade right>
              {
                rightBtnText && 
                <RightButton>
                    {rightBtnText}
                  </RightButton>
              }
            </Fade>
            
          </ButtonGroup>
        
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

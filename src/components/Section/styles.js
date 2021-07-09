import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('images/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity:0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`


export const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

export const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  
`;

export const Buttons = styled.div``;

import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display:none
  }
`
export const RightMenu = styled.div`
  display:flex;
  align-items: center;

  a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BugerNav = styled.div`
  position: fixed;
  top:0px;
  bottom: 0;
  right: 0;
  width:300px;
  background-color: white;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    a {
      font-weight: 600;
    }
  }
`;

export const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
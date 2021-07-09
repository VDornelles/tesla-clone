import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Container = styled('div')`
  width: 5vw;
  border: 1px solid black;
  padding: 1rem;
  background-color: 'blue';
`;

const NavElement = styled(Link)`
  display: flex;
`;
const SideMenu = () => {
  return (
    <Container>
      <NavElement to={ROUTES.LANDING_PAGE}>Landing</NavElement>
      <NavElement to={ROUTES.CARTOONS}>Cartoon</NavElement>
    </Container>
  );
};

export default SideMenu;

import SideBar from '../SideMenu';
import Footer from '../Footer';
import styled from 'styled-components';
const Container = styled('div')`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const ChildrenComponent = styled('div')`
  width: 90vw;
  padding: 2rem;
`;

const BaseLayout = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <ChildrenComponent>{children}</ChildrenComponent>
      <Footer />
    </Container>
  );
};

export default BaseLayout;

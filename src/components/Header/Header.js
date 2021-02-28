import styled from 'styled-components';
import Nav from './Nav';
import me from '../../images/profile-pic.png';

const HeaderContainer = styled.div`
  // background-color: ${(props) => props.theme.headerBg};
  width: 100%;
  max-height: 150px;
  border-bottom: 1px solid ${(props) => props.theme.detail};
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
`;

const ProfilePic = styled.img`
  width: 90px;
  align-self: center;
  justify-self: end;
  border: 1px solid ${(props) => props.theme.detail};
  margin-bottom: 15px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfilePic src={me} alt="me" />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;

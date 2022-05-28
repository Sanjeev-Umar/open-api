import blankProfile from "../Components/ReusablesImages/blank-profile-picture.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #aaa;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: 150px;
  width: 150px;
`;

const ContentContainer = styled.div`
  width: 60%;
`;

const UserDetailsCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={blankProfile} height="100%" width="100%" alt="user"></img>
      </ImageContainer>
      <ContentContainer>
        <h2>{props.user.name}</h2>
        <h4>@{props.user.username}</h4>
        <h3>Phone {props.user.phone}</h3>
        <h4>Email {props.user.email}</h4>
      </ContentContainer>
    </Container>
  );
};

export default UserDetailsCard;

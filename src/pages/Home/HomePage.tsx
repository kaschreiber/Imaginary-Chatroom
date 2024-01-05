import React from "react";
import { Link } from "react-router-dom";
import { Description, HomeContainer, Title } from "./style";
import { StartButton } from "../../style";

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Imaginary Chatroom</Title>
      <Description>
        Immerse yourself in the whimsical world of animated characters!
        Imaginary Chatroom brings together your favorite cartoon or animated
        characters from different films and series for delightful and unexpected
        conversations. Witness the magic as beloved heroes, quirky sidekicks,
        and iconic villains engage in lighthearted banter and amusing exchanges.
      </Description>
      <Link to="/configuration">
        <StartButton>Start Your Journey...</StartButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;

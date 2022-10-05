import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar/Sidebar";
import Searchbar from "../Components/Searchbar";
import CanteenHomeCard from "../Components/CanteenHomeCard";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import ProfileImg from "../Components/ProfileImg";

function CanteenHome() {
  return (
    <Container>
      <Sidebar />
      <Nav>
        <Searchbar placeholder="Search for food you like..." />
        <Link to="/user">
          <ProfileImg  />
        </Link>
      </Nav>
      <Fade bottom>
        <CanteenHomeCard />
      </Fade>
    </Container>
  );
}

export default CanteenHome;

const Container = styled.div``;

const Nav = styled.div`
  display: flex;
`;

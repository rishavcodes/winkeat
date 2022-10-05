import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar/Sidebar";
import MenuCatCard from "../Components/MenuCatCard";
import { Fade } from "@mui/material";

function CanteenA() {
  return (
    <Container>
      <Sidebar />
      <CanteenABody>
      <Fade bottom>
        <MenuCatCard />
      </Fade>
      </CanteenABody>
    </Container>
  );
}

export default CanteenA;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const CanteenABody = styled.div`
  padding: 20px 160px 200px;
`

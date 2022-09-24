import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar/Sidebar';
import Searchbar from '../Components/Searchbar';

function CanteenHome() {
  return (
    <Container>
        <Sidebar />
        <Searchbar placeholder="Search for food you like..." />
    </Container>
  )
}

export default CanteenHome


const Container = styled.div`
`
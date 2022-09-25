import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar/Sidebar';
import Searchbar from '../Components/Searchbar';
import CanteenHomeCard from '../Components/CanteenHomeCard';


function CanteenHome() {
  return (
    <Container>
        <Sidebar />
        <Searchbar 
        placeholder="Search for food you like..." 
        />
        <CanteenHomeCard /> 
    </Container>
  )
}

export default CanteenHome


const Container = styled.div`
`
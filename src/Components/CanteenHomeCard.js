import React from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"


function CanteenHomeCard() {
  return (
    
    <HomeCard>
        <Link style={{textDecoration: 'none'}} to="/canteenb">

        <Cards>
            <img src="/images/canteen-a.png" alt="" />
            <h2 style={{textDecoration: 'none'}}>A Block Canteen</h2>
        </Cards>
        </Link>

        <Link to="/canteena">
        <Cards>
            <img src="/images/canteen-b.png" alt="" />
            <h2>Main Canteen</h2>
        </Cards>
        </Link>
        
        <Link to="/ccd">
        <Cards>
            <img src="/images/canteen-c.png" alt="" />
            <h2>Cafe Coffee Day</h2>
        </Cards>
        </Link>
        

    </HomeCard>

  )
}

export default CanteenHomeCard

const HomeCard = styled(Link)`
    padding-left: 250px;
    padding-top: 100px;
    display: flex;
`
const Cards = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    border-color: grey;
    border: .5px solid;
    width: 300px;
    height: 400px;
    margin: 30px;
    background: #D8D8D8;
    border-radius: 20px;
    text-align: center;
    color: #707070;
    cursor: pointer;
    img {
        width: 298px;
    }

`
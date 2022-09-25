import React from 'react';
import styled from "styled-components"
// import {Link} from "react-router-dom"


function CanteenHomeCard() {
  return (
    
    <HomeCard>
        
        <Cards>
            <img src="/images/canteen-a.png" alt="" />
            <h2>A Block Canteen</h2>
        </Cards>
        
        
        
        
        
        <Cards>
            <img src="/images/canteen-b.png" alt="" />
            <h2>Main Canteen</h2>
        </Cards>
        
        
        <Cards>
            <img src="/images/canteen-c.png" alt="" />
            <h2>Cafe Coffee Day</h2>
        </Cards>
        

    </HomeCard>

  )
}

export default CanteenHomeCard

const HomeCard = styled.div`
    padding-left: 350px;
    padding-top: 100px;
    display: flex;
`
const Cards = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    border-color: grey;
    border: .5px solid;
    width: 300px;
    height: 400px;
    margin: 10px;
    background: #D8D8D8;
    border-radius: 20px;
    text-align: center;
    color: #707070;
    cursor: pointer;
    img {
        width: 298px;
    }
    :hover{
        transition: ease-out 0.5s;
    }

`
import React from 'react'
import styled from 'styled-components'
import { useCart } from "react-use-cart";
// import AddToCartBtn from './AddToCartBtn';


const PizzaMenu = (props) => {
    const {addItem} = useCart();
  return (
    <PizzaBox>
        
    <FoodBox>
        <FoodImg>
        <img src={props.img} alt='not available' />
        </FoodImg>
        <FoodInfo>
            <h3>{props.title}</h3>
            <h4>₹ {props.price}</h4>
            <p>{props.description}</p>
            <button onClick={() => addItem(props.item)}>Add to cart</button>
        </FoodInfo>
    </FoodBox>
    </PizzaBox>
  )
}

export default PizzaMenu

const PizzaBox = styled.div`
    padding-top: 25px;
    padding-right: 5px;
    
`

const FoodBox = styled.div`
    height: 160px;
    width: 600px;
    border-radius: 22px;
    border: 1px solid;
    color: grey;
    display: flex;
`

const FoodImg = styled.div`
    img {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        height: 158.5px;
        width: 250px;
    }
`

const FoodInfo = styled.div`
    justify-content: space-between;
    h3{
        text-align: center;
        padding-top: 8px;
        font-size: 25px;
        font-weight: 600;
        color: black;
    }
    h4 {
        padding-left: 15px;
        padding-top: 3px;
        color: black;
    }
    p{
        padding-left: 15px;
        padding-top: 3px;
        font-size: 12px;
    }
    button{
        margin-left: 60px;
        width: 240px;
        height: 35px;
        background: #FFB800;
        color: white;
        border-radius: 20px;
        border: none;
        font-size: 15px;
        cursor: pointer;
        
    }
`
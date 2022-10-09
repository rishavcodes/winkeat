import React from 'react';
import { useCart } from "react-use-cart";
// import PizzaData from '../PizzaData';

function AddToCartBtn() {
  const {addItem} = useCart();

  const cartClicked = () =>  {
      console.log("I am clicked");
  }
  return (
    <div>
        
      </div>
  )
}

export default AddToCartBtn
import React from 'react'
import styled from 'styled-components'


function OrderCard(props) {
  return (
    <OrderCardBody>
        <CardImg>
            <img src="/images/chicken-pizza.png" alt='not available' />
        </CardImg>
        <CardInfo>
            <h2>{props.name}</h2>
            <p>{props.canteenName}</p>
        </CardInfo>
        <CardStatus>
            <h3>Status</h3>
            <p>{props.orderStatus}</p>
        </CardStatus>
        <PostOrderActivity>
            <button>{props.postOrderActivity}</button>
        </PostOrderActivity>
    </OrderCardBody>
  )
}

export default OrderCard


const OrderCardBody = styled.div`
  margin-top: 30px;
  margin-left: 250px;
  border: 0.5px solid;
  width: 1000px;
  height: 120px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`
const CardImg = styled.div`
  img {
    height: 118px;
  }
`
const CardInfo = styled.div`
  position: relative;
  right: 80px;
  top: 20px;
  
`
const CardStatus = styled.div`
  padding-top: 20px;
`
const PostOrderActivity = styled.div`
  padding-top: 30px;
  button {
    border-radius: 20px;
    background-color: #499900;
    font-size: 15px;
    border: none;
    color: white;
    width: 200px;
    height: 30px;
    font-weight: 500;
    cursor: pointer;
  }
`
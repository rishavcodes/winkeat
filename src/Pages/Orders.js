import React from 'react'
import styled from "styled-components"
import Sidebar from '../Components/Sidebar/Sidebar'
import Searchbar from '../Components/Searchbar'
import OrderCard from '../Components/OrderCard'
import orderData from '../OrderData'

function Orders() {

  function OrderCardInfo (orderData){
    return (
      <OrderCard 
      name={orderData.ItemName}
      canteenName={orderData.CanteenName}
      orderStatus={orderData.Status}
      postOrderActivity={orderData.PostOrderWork}
    />
    )
  }

  return (
    <OrderPage>
      <Sidebar />
      <Searchbar 
        placeholder="Search for food you like..."
      />
      <h1>Previous Orders</h1>
      {orderData.map(OrderCardInfo)}
    </OrderPage>
  )
}

export default Orders

const OrderPage = styled.div`
  h1 {
    padding-top: 20px;
    margin-left: 250px;
    color: #535353;;
    font-weight: 500;
  }
`

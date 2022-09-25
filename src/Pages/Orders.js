import React from 'react'
import styled from "styled-components"
import Sidebar from '../Components/Sidebar/Sidebar'
import Searchbar from '../Components/Searchbar'

function Orders() {
  return (
    <OrderPage>
      <Sidebar />
      <Searchbar 
        placeholder="Search for food you like..."
      />
    </OrderPage>
  )
}

export default Orders

const OrderPage = styled.div`
`
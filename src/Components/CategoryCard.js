import React from 'react'
import styled from 'styled-components'

function CategoryCard() {
  return (
    <Box>
        <Card>
        <CardImg>
            <img src='/images/pizza.png' alt='not available' />
        </CardImg>
        <CardTitle>
             <h2>Pizza</h2>
        </CardTitle>
        </Card>
        <Card>
        <CardImg>
            <img src='/images/burger.png' alt='not available' />
        </CardImg>
        <CardTitle>
             <h2>Burger</h2>
        </CardTitle>
        </Card>
        <Card>
        <CardImg>
            <img src='/images/ice-cream.png' alt='not available' />
        </CardImg>
        <CardTitle>
             <h2>Ice Cream</h2>
        </CardTitle>
        </Card>
        <Card>
        <CardImg>
            <img src='/images/pasta.png' alt='not available' />
        </CardImg>
        <CardTitle>
             <h2>Pasta</h2>
        </CardTitle>
        </Card>
        <Card>
        <CardImg>
            <img src='/images/biryani.png' alt='not available' />
        </CardImg>
        <CardTitle>
             <h2>Biryani</h2>
        </CardTitle>
        </Card>
    </Box>
  )
}

export default CategoryCard

const Box = styled.div`
    padding-top: 60px;
    display: flex;
`
const Card = styled.div`
    width: 180px;
    height: 230px;
    border: 1px solid;
    border-radius: 20px;
    background-color: #DADADA;
    color: #707070;
    margin-left: 60px;
`
const CardImg = styled.div`
  img {
    width: 178px;
    height: 180px;
  }  
`
const CardTitle = styled.div`
  h2 {
    text-align: center;
    font-weight: 600;
  }
`

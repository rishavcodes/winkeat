import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Searchbar from "../Components/Searchbar";
import CategoryCard from "./CategoryCard";
import PizzaMenu from "./PizzaMenu";
import PizzaData from '../PizzaData';



// function PizzaBoxShow (PizzaDataShow){
//   return (
//     <PizzaMenu 
//       key={PizzaDataShow.id}
//       img={PizzaDataShow.img}
//       title={PizzaDataShow.title}
//       price={PizzaDataShow.price}
//       description={PizzaDataShow.description}
//     />
//   )
// }

function MenuCatCard() {
  return (
    <Body>
      <Nav>
        <Link to="/canteenhome">
          <ArrowBackIcon style={{fontSize: "33px"}} />
        </Link>
        <h2>Main Canteen</h2>
        <Searchbar placeholder="Search for your favourite category" />
      </Nav>
      <Catogery>
        <CategoryCard />
      </Catogery>
      <MenuContent>
        <h2>Pizza</h2>
      <MenuStart>
        {PizzaData.map((item, index) => {
          return(
            <PizzaMenu 
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              item={item}
            />
          )
        })}
        {/* {PizzaData.map(PizzaBoxShow)} */}
      </MenuStart>
      </MenuContent>
    </Body>
  );
}

export default MenuCatCard;

const Body = styled.div`
`;
const Nav = styled.div`
  display: flex;
  h2 {
    padding-left: 50px;
    color: #535353;
    font-weight: 600;
    font-size: 30px;
  }
  input {
    width: 550px;
    position: absolute;
    top: 25px;
    left: 700px;
  }
`;
const Catogery = styled.div``;
const MenuContent = styled.div`
  h2 {
    padding-top: 15px;
  }
`;

const MenuStart = styled.div`
  display: flex;
  flex-wrap: wrap;
`

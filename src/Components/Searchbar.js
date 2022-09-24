import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';



function Searchbar({placeholder, text}) {
  return (
    <SearchBox>
        <SearchInput />
        <SearchIcon />
    </SearchBox>
  )
}

export default Searchbar

const SearchBox = styled.div`
    margin-left: 550px;
    margin-top: 25px;
`
const SearchInput = styled.input`
    height: 45px;
    width: 400px;
    border: 0.3px solid;
    border-color: grey;
    border-radius: 10px;
`

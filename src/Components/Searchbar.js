import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';



function Searchbar({placeholder}) {
  return (
    <SearchBox>
        <SearchInput  
          placeholder={placeholder}
          icon={SearchBarIcon}
        />
        {/* <SearchBarIcon /> */}

      
        
    </SearchBox>
  )
}

export default Searchbar

const SearchBox = styled.div`
    margin-left: 350px;
    margin-top: 25px;
    display: flex;
`
const SearchInput = styled.input`
    height: 45px;
    width: 600px;
    padding:20px;
    border: 0.3px solid;
    border-color: grey;
    border-radius: 10px;
    
`
const SearchBarIcon = styled(SearchIcon)`
  position: absolute;
  right: 600px;
  top: 35px;
`

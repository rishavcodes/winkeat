import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"



function Searchbar({placeholder}) {
  return (
    <SearchBox>
        <SearchInput  
          placeholder={placeholder}
        />
        <SearchBarIcon />

      <Link to="/user" >
        <ProfileImg>
          <img src='/images/profile-img.jpg' alt='not available' />
        </ProfileImg>
      </Link>
        
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
const ProfileImg = styled(Link)`
  img {
    width: 40px;
    position: absolute;
    right: 300px;
    border-radius: 100px;
  }
`
import React from 'react';
import "./Homepage.css";
import Button from "./Navbutton";
import Texthomepage from "./Texthomepage"
import Homepageimg from './Homepageimg';
import Bottomtext from './Bottomtext';

function Homepage() {
  return (
    <div>
        <Button />
        <Texthomepage />
        <Homepageimg />
        <Bottomtext />
    </div>
  )
}

export default Homepage
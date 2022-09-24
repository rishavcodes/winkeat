import React, {useState} from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {

  const [state2, setstate2] = useState("bx bx-menu")
    
    const [state, setstate] = useState("sidebar")
    var closeBtn=()=>{
        if(state==="sidebar"){
            setstate("sidebar open")
            setstate2("bx bx-menu");
        }
        else{
            setstate("sidebar")
            setstate2("bx bx-menu");
        }
    }

  
  return (
    <>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
        <div className={state}>
        <div className="logo-details">
            <div className="logo_name">WINKEAT</div>
            <i className={state2} id="btn" onClick={closeBtn} ></i>
        </div>
        <ul className="nav-list">
          
          <li>
           <Link to="/canteenhome">
             <i className='bx bx-home' ></i>
             <span className="links_name">Home</span>
           </Link>
           <span className="tooltip">Home</span>
         </li>
          <li>
           <Link to="/user">
             <i className='bx bx-user'></i>
             <span className="links_name">User</span>
           </Link>
           <span className="tooltip">User</span>
         </li>
         <li>
           <Link to="/orders">
             <i className='bx bx-cart-alt' ></i>
             <span className="links_name">Order</span>
           </Link>
           <span className="tooltip">Order</span>
         </li>
         <li className="profile">
             <i className='bx bx-log-out' id="log_out" ></i>
         </li>
        </ul>
      </div>
      
    </>
  )
}

export default Sidebar
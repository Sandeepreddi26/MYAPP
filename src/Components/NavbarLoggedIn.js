import React, { useState } from "react"
// import useHistory from 'react'
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import 'C:/Users/sande/Desktop/React2/myapp/src/styles/navbar.css';


export default function NavbarLoggedIn(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  // const location = useLocation();
  console.log(props.memberId)
  // const history = useHistory();

  // const navigateToMember = () => {
  //   history.push('/Member');
  // };
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        FREQUENT FLYER PROGRAME
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >

        <li>
          <Link to="/home" state={{memberId:props.memberId}}>Home</Link>
        </li>
        <li>
          <Link to="/travelInfo">ClaimPoints</Link>
        </li>
        <li>
          <Link to="/destination" >Destination</Link>
        </li>
        <li>
          <Link to="/profile" state={{memberId:props.memberId}}>Profile</Link>
        </li>
        
        <li>
          <Link to="/" >Logout</Link>
        </li>

      </div>
    </nav>
  );
}


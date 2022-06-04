import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import FindFriends from "../FindFriends/FindFriends";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import { useState, React, useEffect } from "react";


const Navbar = (props) => {

  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, token] = useAuth()
  
    
  
  return (
    
      <ul className="navBar">
        <li>
        <img src='https://media.istockphoto.com/photos/bald-eagle-flying-with-american-flag-picture-id973753508?s=612x612' height={100} width={100} className='logox' />
        </li>
        <li className="brand">
          
          <Link to="/" style={{ textDecoration: "none", color: "darkgray" }}>
            <b><p>Veterans . . . . . </p> <p>           . . . . . Connect</p></b>
          </Link>
        </li>
        
     
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
        <li>
          {user ? <FindFriends friendFinder={props.friendFinder} filteredUsers={props.filteredUsers} /> : null}

        </li>
      </ul>
    
    
  );
};

export default Navbar;

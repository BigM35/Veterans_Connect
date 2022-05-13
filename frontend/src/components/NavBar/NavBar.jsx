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
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>React/Django JWT</b>
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
    </div>
    
  );
};

export default Navbar;

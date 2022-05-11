import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import FindFriends from "../FindFriends/FindFriends";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import { useState, React, useEffect } from "react";
import axios from "axios";
import DisplaySearchedResults from "../DisplaySearchedResults/DisplaySearchedResults";

const Navbar = () => {

  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, token] = useAuth()
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])


  async function getAllUsers() {
    try{
      let response = await axios.get("http://127.0.0.1:8000/auth/finder/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data)
      setUsers(response.data);
    }catch(err){
      console.log(`Error: ${err}`);
    }
  }
  
  useEffect(() => {
  getAllUsers();
  }, [user]);

  const findUser = (searched) => {
    let foundUsers = users.filter(user => {
      return user.username.toLowerCase().includes(searched.toLowerCase())  
  })
    console.log(`Filtered Users: ${foundUsers}`)
    setUsers(foundUsers)
    
  }
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
          {user ? <FindFriends friendFinder={findUser} /> : null}
        </li>
      </ul>
      {user ? <DisplaySearchedResults /> : null}
    </div>
    
  );
};

export default Navbar;

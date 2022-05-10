import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import FindFriends from "../FindFriends/FindFriends";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import { useState, React, useEffect } from "react";
import axios from "axios";

const Navbar = () => {

  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, token] = useAuth()
  const [users, setUsers] = useState([]);



  async function getAllUsers() {
    try{
      let response = await axios.get("http://127.0.0.1:8000/auth/finder/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUsers(response.data);
    }catch(err){
      console.log(`Error: ${err}`);
    }
  }
  
  useEffect(() => {
  getAllUsers();
  }, []);

  const findUser = (searched) => {
    let foundUsers = users.filter(user => user.first_name.toLowerCase().includes(searched.toLowerCase()) 
    || user.last_name.toLowerCase().includes(searched.toLowerCase()) || user.branch.toLowerCase().includes(searched.toLowerCase()) 
    || user.mos.toLowerCase().includes(searched.toLowerCase()) || user.status.toLowerCase().includes(searched.toLowerCase()))
    console.log(foundUsers)
    setUsers(foundUsers)
    console.log(users)
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
          <FindFriends friendFinder={findUser} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

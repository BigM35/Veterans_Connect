// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState, React } from "react";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";


function App() {

  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);
  const [user, token] = useAuth()
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])
  const [showReplies, setShowReplies] = useState(false)
  const [postId, setPostId] = useState('')
  




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
      return user.username.toLowerCase().includes(searched.toLowerCase()) || user.first_name.toLowerCase().includes(searched.toLowerCase()) || 
      user.last_name.toLowerCase().includes(searched.toLowerCase()) || user.rank.toLowerCase().includes(searched.toLowerCase()) || user.branch.toLowerCase().includes(searched.toLowerCase())
         
  })
    console.log('Filtered Users: ', foundUsers)
    setFilteredUsers(foundUsers)
  } 
  useEffect(() => {
    async function getAllPost(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/auth/post/friend_posts/',{
                headers: {
                  Authorization: "Bearer " + token
                }
              });
              console.log(response.data)
            setPosts(response.data)
        } catch (error) {
            
        }
    };
    getAllPost();
  }, [token]);


    async function makeNewPost(entries) {
        try{
          let response = await axios.post("http://127.0.0.1:8000/auth/post/", entries, {
            headers: {
              Authorization: "Bearer " + token
            }
          });
          let updatedFeed = [response.data, ...posts]
          setPosts(updatedFeed);
        }catch(err){
          console.log(`Error: ${err}`);
        }
    }
    

    async function handleReplies(post){
        let response = await axios.get('http://127.0.0.1:8000/auth/replies/'+ post + '/', {
            headers:{
                Authorization: "Bearer " + token
            }
        });
        console.log(response.data)
        setReplies(response.data);
        setPostId(post)
        if(showReplies){
          setShowReplies(false)
        }else{
          setShowReplies(true)
        }
    }

    

  return (
    <main className="container">
      <Navbar friendFinder={findUser} filteredUsers={filteredUsers}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage post={posts} replies={replies}  handleReplies={handleReplies} makeNewPost={makeNewPost} 
              showReplies={showReplies} postId={postId} setReplies={setReplies}/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:userId" element={ <PrivateRoute> <ProfilePage /> </PrivateRoute> } />
      </Routes>
      <Footer />
    </main>

  );
}

export default App;

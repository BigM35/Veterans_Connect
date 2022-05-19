import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Feed from "../../components/Feed/Feed";
import axios from "axios";
import PostReply from "../../components/PostReply/PostReply";
import NewPost from "../../components/NewPost/NewPost";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  
  return (
    <>
    <div className="container">
      <h1>Welcome {user.first_name}!</h1> 
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.make} {car.model}
          </p>
        ))}
    </div>
    <div>
      {user ? <NewPost submitNewPost={props.makeNewPost} /> : null}
      {user ? <Feed post={props.post} replies={props.replies}   handleReplies={props.handleReplies}  reply={props.reply}
       showReplies={props.showReplies} postId={props.postId}/>  : null}
    </div>
   </>
  );
};

export default HomePage;

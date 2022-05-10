import axios from "axios";
import { React, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import NewPost from "../NewPost/NewPost";
import DisplayFeed from "../DisplayFeed/DisplayFeed";



const Feed = (props) => {
    
    const [posts, setPosts] = useState([]);
    const [user, token] = useAuth()
    
    
     useEffect(() => {
        async function getAllPost(){
            try {
                let response = await axios.get('http://127.0.0.1:8000/auth/post/friend_posts/',{
                    headers: {
                      Authorization: "Bearer " + token
                    }
                  })
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
    

    return ( 
        <>
        <NewPost submitNewPost={makeNewPost} />
        <DisplayFeed post={posts} />
        </>
        
   
    )
};
 
export default Feed;
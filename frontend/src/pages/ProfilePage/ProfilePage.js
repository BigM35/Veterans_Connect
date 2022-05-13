import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';





const ProfilePage = () => {
 
    const [userData, setUserData] = useState({})
    const [userFriendsData, setUserFriendsData] = useState([])
    const {userId} = useParams()
    const [user, token] = useAuth(); 

    function isFriend(){
        let foundFriend = userFriendsData[0].friends.filter(friend => friend.id.include(userId))
        
        if(foundFriend.length > 0)
            return true;
        else{
            return false;
        };
    }


    async function fetchUser(){
        try {
            let response = await axios.get(`http://127.0.0.1:8000/auth/${userId}/profile/`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log('user :',response.data)
            setUserData(response.data)
        } catch (error) {
            console.log(error)
        }

    }


    async function fetchUserFriends(){
        try {
            let response = await axios.get(`http://127.0.0.1:8000/auth/${userId}/friends/`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log('friends :', response.data)
            setUserFriendsData(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    async function addFriend(){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/auth/${userId}/friends/add_friend/`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log('Add Friend :', response.data)
            setUserFriendsData(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchUser();
        fetchUserFriends();
    }, []);
    // const getUser= ()=>{
        
    // }

    return ( 
        <div>
        <h1>{userData.rank +' '+ userData.last_name + ', ' + userData.first_name}</h1>
        {console.log(userData.profile_pic)}
        <img src={userData.profile_pic} ></img>
        <h4>{'Status: '+ userData.current_status +', Branch: '+ userData.branch + ', MOS: ' + userData.mos}</h4>
        <div>
           {isFriend ? <button onClick={() => addFriend(userId)}>Add Friend</button> : null}
        </div>

     
        </div>
     );
}
 
export default ProfilePage;
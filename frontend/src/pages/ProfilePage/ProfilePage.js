import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';





const ProfilePage = () => {
 
    const [userData, setUserData] = useState({})
    const [userFriendsData, setUserFriendsData] = useState([])
    const {userId} = useParams()
    const [user, token] = useAuth();
    const [isFriend, setIsFriend] = useState(true)
    const [isUser, setIsUser] = useState(false)

    function checkFriend(){
        let foundFriend = userFriendsData[0].friends.filter(friend => friend.id.include(user.id))
        
        if(foundFriend.length > 0)
            setIsFriend(true);
        else{
            setIsFriend(false);
        }
    }
 


    function checkUser(){

        if (user.id == userId) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
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


    async function addFriend(id){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/auth/${id}/profile/friend_request/`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            checkFriend();
            console.log('Add Friend :', response.data)
            setUserFriendsData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function removeFriend(id){
        let response = await axios.delete(`http://127.0.0.1:8000/auth/${id}/profile/friend_request/`,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        checkFriend();
    }




    useEffect(() => {
        fetchUser();
        fetchUserFriends();
        checkFriend();
        checkUser();
        
    }, []);
    // const getUser= ()=>{
        
    // }

    return ( 
        <>
        <div>
            <h1>{userData.rank +' '+ userData.last_name + ', ' + userData.first_name}</h1>
            {console.log(userData.profile_pic)}
            <img src={userData.profile_pic} ></img>
            <h4>{'Status: '+ userData.current_status +', Branch: '+ userData.branch + ', MOS: ' + userData.mos}</h4>
        </div>
        <div>
            {isFriend  ? <button onClick={() => addFriend(userId)} >Add Friend</button> : <button onClick={() => removeFriend(userId)}>Remove Friend</button> }
        </div>
           
            Friends:
            {userFriendsData[0].friends.map(friend => {
                return(
                    <div>
                        <img src={friend.profile_pic}></img>
                        <p>{userData.rank +' '+ userData.last_name + ', ' + userData.first_name}</p>
                    </div>

                )
            })}
        <>
            
            
            </>
        </>
     );
}
 
export default ProfilePage;
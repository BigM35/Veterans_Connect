import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./ProfilePage.css"




const ProfilePage = () => {
 
    const [userData, setUserData] = useState({})
    const [userFriendsData, setUserFriendsData] = useState([])
    const {userId} = useParams()
    const [user, token] = useAuth();
    const [isFriend, setIsFriend] = useState(true)
    const [isUser, setIsUser] = useState(false)
    const [forceRerender, setForceRerender] = useState(false)






    async function fetchUserFriends(){
        try {
            let response = await axios.get(`http://127.0.0.1:8000/auth/${userId}/friends/`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log('friends :', response.data)
            setUserFriendsData(response.data)
            checkFriend(response.data)
            
        } catch (error) {
            console.log(error)
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


    async function addFriend(id){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/auth/${id}/profile/friend_request/`,{},{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
         
            console.log('Add Friend :', response.data)
            setUserFriendsData(response.data)
            setForceRerender(!forceRerender)
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
        setForceRerender(!forceRerender)
    }

    function checkFriend(userFriendsData1){

        let foundFriend = userFriendsData1[0].friends.filter( function (friend) { return (friend.id === user.id)} )
        console.log('Check Friend: ',foundFriend)
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


    useEffect(() => {
        
        fetchUser();


        fetchUserFriends()
    }, [forceRerender]);
    // const getUser= ()=>{
        
    // }

    return ( 
        <Fragment >
            <h6 className='profile-container'>

                <p className='user-info'>
                    <h1>{userData.rank +' '+ userData.last_name + ', ' + userData.first_name}</h1>
                    {console.log('http://127.0.0.1:8000'+userData.profile_pic)}
                    <img src={'http://127.0.0.1:8000'+userData.profile_pic} className='profilePic'></img>
                    <h4>{userData.branch + ', ' + userData.current_status  + ', MOS: ' + userData.mos}</h4>
                    {!isUser ? (!isFriend ? <button onClick={() => addFriend(userId)} >Add Friend</button> : <button onClick={() => removeFriend(userId)}>Remove Friend</button>) : null}
                </p>
            
                <p className='user-friends'>
                Friends:
                    {userFriendsData.length > 0 ? userFriendsData[0].friends.map(friend => {
                        return(
                            <p className='friends'>
                                <img src={'http://127.0.0.1:8000'+friend.profile_pic} className="friendsPic" />
                                {console.log('Friends pic: ','http://127.0.0.1:8000'+friend.profile_pic)}
                                <p>{friend.rank +' '+ friend.last_name + ', ' + friend.first_name}</p>
                            </p>

                        )
                    }) : null}
                </p>
            </h6>
        
        </Fragment>
     );
}
 
export default ProfilePage;
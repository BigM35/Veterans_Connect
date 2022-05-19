import axios from "axios";
import { React, useState } from "react";
import NewPost from "../NewPost/NewPost";
import DisplayFeed from "../DisplayFeed/DisplayFeed";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from 'react-bootstrap/Card'
import PostReply from "../PostReply/PostReply";
import useAuth from '../../hooks/useAuth';

const Feed = (props) => {
    
    
    

    return ( 
        <>
        
            {props.post.map((eachPost, index) => {
                return (
                    <div>
                        {<img src={eachPost.user.profile_pic} ></img>}
                        <h6>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name} </h6>
                        <h6>{eachPost.user.current_status +' '+ eachPost.user.branch}</h6>
                        <p>{eachPost.text} <button> 👍 {eachPost.likes}</button></p>
                        <button onClick={() => props.handleReplies(eachPost.id)}>Replies</button> 
                        <div>
                            <p>
                                {props.showReplies ? <PostReply replies={props.replies} showReplies={props.showReplies} /> : null}
                               
                            </p>    

                        </div>
                        
                    </div>
                )
            })}
        </>
        
   
    )
};
 
export default Feed;
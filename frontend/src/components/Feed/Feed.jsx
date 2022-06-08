
import { React, useState,Fragment } from "react";
import PostReply from "../PostReply/PostReply";
import "./Feed.css"

const Feed = (props) => {
    
    
    

    return ( 
        < Fragment >
            <p className='flexbox-continer' >
                {props.post.map((eachPost, index) => {
                    return (
                        <main key={index} className='flexbox-item-1' >
                            {<img src={'http://127.0.0.1:8000'+eachPost.user.profile_pic} className='pic' />}
                            <p>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name} </p>
                            <p>{eachPost.user.current_status +' '+ eachPost.user.branch}</p>
                            <p> {eachPost.text} </p>
                            
                                <button onClick={() => props.handleReplies(eachPost.id)}>Replies</button> 
                            
                                <button> 👍 {eachPost.likes}</button>
                            <b>
                                <p>
                                    {props.showReplies ? <PostReply replies={props.replies} showReplies={props.showReplies} postId={props.postId} handleReplies={props.handleReplies} setReplies={props.setReplies} /> : null}
                                
                                </p>    

                            </b>
                            
                        </main>
                    )
                })}
            </p>
        </Fragment>
        
   
    )
};
 
export default Feed;
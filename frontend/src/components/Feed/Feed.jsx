
import { React, useState,Fragment } from "react";
import PostReply from "../PostReply/PostReply";
import "./Feed.css"

const Feed = (props) => {
    
    
    

    return ( 
        < Fragment >
            <h6 className='flexbox-continer' >
                {props.post.map((eachPost, index) => {
                    return (
                        <h6 key={index} className='flexbox-item-1' >
                            {<img src={'http://127.0.0.1:8000'+eachPost.user.profile_pic} className='pic' />}
                            <h4>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name} </h4>
                            <h5>{eachPost.user.current_status +' '+ eachPost.user.branch}</h5>
                            <p>{eachPost.text} </p>
                            
                                <button onClick={() => props.handleReplies(eachPost.id)}>Replies</button> 
                            
                                <button> 👍 {eachPost.likes}</button>
                            <div>
                                <p>
                                    {props.showReplies ? <PostReply replies={props.replies} showReplies={props.showReplies} postId={props.postId} /> : null}
                                
                                </p>    

                            </div>
                            
                        </h6>
                    )
                })}
            </h6>
        </Fragment>
        
   
    )
};
 
export default Feed;
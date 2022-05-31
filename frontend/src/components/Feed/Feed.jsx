
import { React, useState,Fragment } from "react";
import PostReply from "../PostReply/PostReply";
import "./Feed.css"

const Feed = (props) => {
    
    
    

    return ( 
        < Fragment >
            <div className='flexbox-continer' >
                {props.post.map((eachPost, index) => {
                    return (
                        <div key={index} className='flexbox-item-1' >
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
            </div>
        </Fragment>
        
   
    )
};
 
export default Feed;
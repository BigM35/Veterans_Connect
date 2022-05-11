import axios from "axios";
import PostReply from "../PostReply/PostReply";
import { useState } from "react";




const DisplayFeed = (props) => {
    
    
    
    return ( 
        
        props.post.map((eachPost, index) => {
            return (
                <div>
                <table>
                    <tbody> 
                        <tr key={index+1}>
                            <td>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name}</td>
                        </tr>
                        <tr key={index+2}>    
                            <td>{eachPost.user.current_status +' '+ eachPost.user.branch}</td>
                        </tr>
                        <tr key={index+3}>
                            <td>{eachPost.text } </td> 
                            <button onClick={() => props.handleReplies(eachPost.id)}>Replies</button>
                            <td>{props.viewReplies ? <PostReply  replies={props.replies}/> : null}</td>
                            <td>{eachPost.like}</td>
                            <td>{eachPost.dislike}</td>

                        </tr>
                    </tbody>
                </table>
                </div>
            )
        })
     );
}
 
export default DisplayFeed;
import axios from "axios";
import PostReply from "../PostReply/PostReply";
import React from 'react';
import Table from 'react-bootstrap/Table'




const DisplayFeed = (props) => {
    
    
    
    return ( 
        
        props.post.map((eachPost, index) => {
            return (
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr key={index+1}>
                            <th>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name}</th>
                        </tr>
                    </thead>
                    <tbody> 
                        
                        <tr key={index+2}>    
                            <td>{eachPost.user.current_status +' '+ eachPost.user.branch}</td>
                        </tr>
                        <tr key={index+3}>
                            <td>{eachPost.text } </td> 
                            <td>{eachPost.like}</td>
                            <td>{eachPost.dislike}</td>
                            </tr>
                        <tr>
                            <button onClick={() => props.handleReplies(eachPost.id)}>Replies</button>
                            <td>{props.viewReplies ? <PostReply  replies={props.replies}/> : null}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            )
        })
     );
}
 
export default DisplayFeed;
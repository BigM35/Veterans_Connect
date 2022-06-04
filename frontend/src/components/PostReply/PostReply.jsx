import React, { Fragment, useState} from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const PostReply = (props) => {
    
    const [user, token] = useAuth() 
    const [text, setText] = useState('')
    //<DisplayFeed post={props.post} replies={props.replies} show={props.show} handleClose={props.handleClose} handleReplies={props.handleReplies} reply={props.reply} />
    
    async function makeNewPost(entries, id) {
        try{
          let response = await axios.post(`http://127.0.0.1:8000/auth/replies/${id}/`, entries, {
            headers: {
              Authorization: "Bearer " + token
            }
          });
          let updatedFeed = [response.data, ...props.viewReplies]
          props.setViewReplies(updatedFeed);
        }catch(err){
          console.log(`Error: ${err}`);
        }
    }
    
    function handleSubmit(postId) {
       
        let newEntry = {
          text: text
        };
        makeNewPost(newEntry, postId);
    }

    
   
    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(props.postId)} >
                <textarea value={text} type="string" onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit" >Reply</button>
            </form> 
                    {props.replies.map((reply, index) => {
                        return(
                            <div key={index}>
                                <h6>{reply.user.rank +' '+ reply.user.last_name + ', ' + reply.user.first_name}</h6>
                                <h6>{reply.user.current_status +' '+ reply.user.branch}</h6>  
                                <p>{reply.text + " " +reply.likes}</p>
                            </div>          
                        )
                    })}
                    
        </Fragment>
    );
}
 
export default PostReply;
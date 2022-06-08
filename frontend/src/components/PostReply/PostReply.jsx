import React, { Fragment, useState} from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const PostReply = (props) => {
    
    const [user, token] = useAuth() 
    const [text, setText] = useState('')
    const [id, setId] = useState('')
    //<DisplayFeed post={props.post} replies={props.replies} show={props.show} handleClose={props.handleClose} handleReplies={props.handleReplies} reply={props.reply} />
    
    async function makeNewPost(entries) {
        try{
          let response = await axios.post(`http://127.0.0.1:8000/auth/replies/${props.postId}/`, entries, {
            headers: {
              Authorization: "Bearer " + token
            }
          });
          let updatedFeed = [response.data, ...props.replies]
          props.setReplies(updatedFeed);
        }catch(err){
          console.log(`Error: ${err}`);
        }
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      let newEntry = {
        text: text
      };
      makeNewPost(newEntry);
    }

    
   
    return ( 
        <Fragment>
            <form onSubmit={handleSubmit} >
                <textarea value={text} type="string" onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit" >Reply</button>
            </form> 
                    {props.replies.map((reply, index) => {
                        return(
                            <p key={index}>
                              {<img src={'http://127.0.0.1:8000'+reply.user.profile_pic} className='pic' />}
                                <p>{reply.user.rank +' '+ reply.user.last_name + ', ' + reply.user.first_name}</p>
                                {reply.user.current_status +' '+ reply.user.branch}
                                <p>{reply.text }</p>
                                <button> 👍 {reply.likes}</button>
                            </p>          
                        )
                    })}
                    
        </Fragment>
    );
}
 
export default PostReply;

import { useState } from "react";


const NewPost = (props) => {
    
    const [text, setText] = useState('')
    
    
    
    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
          text: text
        };
        props.submitNewPost(newEntry);
    }
    
    return ( 
        <form onSubmit={handleSubmit} className="form">
            <textarea className="textarea" cols={60} value={text} type="string" onChange={(event) => setText(event.target.value)} placeholder="What's on your mind?"></textarea>
            <button type="submit" >Post</button>
        </form>
     );
}
 
export default NewPost;
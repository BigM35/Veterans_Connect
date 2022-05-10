
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
        <form onSubmit={handleSubmit}>
            <input value={text} type="string" onChange={(event) => setText(event.target.value)}></input>
            <button type="submit" >Post</button>
        </form>
     );
}
 
export default NewPost;
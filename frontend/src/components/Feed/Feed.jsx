import axios from "axios";
import { React, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import NewPost from "../NewPost/NewPost";
import DisplayFeed from "../DisplayFeed/DisplayFeed";



const Feed = (props) => {
    
    
    
    

    return ( 
        <>
            <NewPost submitNewPost={props.makeNewPost} />
            <DisplayFeed post={props.post} replies={props.replies} viewReplies={props.viewReplies} handleReplies={props.handleReplies} />
        </>
        
   
    )
};
 
export default Feed;
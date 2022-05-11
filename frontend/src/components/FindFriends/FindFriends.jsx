import { useState, useSyncExternalStore } from "react";

import DisplaySearchedResults from "../DisplaySearchedResults/DisplaySearchedResults";


const FindFriends = (props) => {
    const [searchedString, setSearchedString] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        props.friendFinder(searchedString)

    };
    
    return ( 
       
            <>
                <div>
                    <form onSubmit={handleSubmit}>
                    <input value={searchedString} onChange={(event) => setSearchedString(event.target.value)} type='text' placeholder='Find a personel'></input>
                    <button type='submit'>Search</button> 
                    </form>
                </div>
            </>     
     );
}
 
export default FindFriends;
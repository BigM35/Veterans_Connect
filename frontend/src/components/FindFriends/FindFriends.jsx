import { useState, useSyncExternalStore } from "react";




const FindFriends = (props) => {
    const [searchedString, setSearchedString] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        props.friendFinder(searchedString)

    };
    
    return ( 
        <form>
            <>
                <div>
                    <form onSubmit={handleSubmit}>
                    <input value={searchedString} onChange={(event) => setSearchedString(event.target.value)} type='text' placeholder='Find a personel'></input>
                    <button type='submit'>Search</button> 
                    </form>
                </div>
            </>
        </form>
        
     );
}
 
export default FindFriends;
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import DisplaySearchedResults from "../DisplaySearchedResults/DisplaySearchedResults";
import Modal from 'react-bootstrap/Modal'
import './FindFriends.css'





const FindFriends = (props) => {
    const [searchedString, setSearchedString] = useState('')
    const navigate = useNavigate()
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    let breakpoint = true
    setFullscreen(breakpoint);
    setShow(true);
  }

    function handleSubmit(event){
        event.preventDefault();
        props.friendFinder(searchedString)
        handleShow();
    };
    
    return ( 
            <>
            
                <div>
                    <form onSubmit={handleSubmit}>
                    <input value={searchedString} onChange={(event) => setSearchedString(event.target.value)} type='text' placeholder='Find a personel'></input>
                    <button type='submit'>Search</button> 
                    </form>
                </div>
                <div className='flexbox-container' >
                    
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="flexbox-container">
                        <Modal.Header closeButton>
                        <Modal.Title>Finder</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><DisplaySearchedResults filteredUsers={props.filteredUsers} setShow={setShow}/> </Modal.Body>
                    </Modal>
                </div>
            </>     
     );
}
 
export default FindFriends;


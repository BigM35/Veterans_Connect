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
                <h6>
                    <form onSubmit={handleSubmit}>
                    <input value={searchedString} onChange={(event) => setSearchedString(event.target.value)} type='text' placeholder='Find a personel'></input>
                    <button type='submit'>Search</button> 
                    </form>
                </h6>
                <h6 className='flexbox-container' >
                    
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="flexbox-container">
                        <Modal.Header  closeButton>
                        <Modal.Title style={{color:'darkolivegreen'}}>Finder</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><DisplaySearchedResults filteredUsers={props.filteredUsers} setShow={setShow}/> </Modal.Body>
                    </Modal>
                </h6>
            </>     
     );
}
 
export default FindFriends;


import { Modal } from "bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from "react-router-dom";
import "./DisplaySearchedResults.css"
import Table from 'react-bootstrap/Table'


const DisplaySearchedResults = (props) => {
    const navigate = useNavigate()
  
    function selectedUser(userId){
        props.setShow(false)
        navigate(`/profile/${userId}/`);

    }
  
    return (
        props.filteredUsers.map((user, index) => {
            return(
                <>
                    <Table striped bordered hover size="sm" >
                        <thead>
                            <th>Rank/Name</th>
                            <th>Active/Reserve/Veteran</th>
                            <th>Branch</th>
                            <th>MOS</th>
                        </thead>
                        <tbody>
                            <tr key={index}>
                                <td><button className="link" onClick={() => selectedUser(user.id)} >{user.rank +' '+ user.last_name + ', ' + user.first_name}</button></td>
                                <td><button onClick={() => selectedUser(user.id)} >{user.current_status}</button></td>
                                <td><button onClick={() => selectedUser(user.id)} >{user.branch}</button></td>
                                <td><button onClick={() => selectedUser(user.id)} >{user.mos}</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </>
            )
        })
  );
}
 
export default DisplaySearchedResults;
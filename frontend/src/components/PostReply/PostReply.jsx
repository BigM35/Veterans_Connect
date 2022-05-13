


const PostReply = (props) => {

   
    return ( 
        props.replies.map((reply, index) => {
            return(
                <table>
                    <thead>
                        <th>{reply.user.rank +' '+ reply.user.last_name + ', ' + reply.user.first_name}</th>
                        
                    </thead>
                    <tbody>
                        <tr key={index}>
                            <td>{reply.user.current_status +' '+ reply.user.branch}</td>
                            <td>{reply.text }</td>
                            <td>{reply.like}</td>
                            <td>{reply.dislike}</td>
                            <input></input>
                        </tr>
                    </tbody>
                </table>
            )
        })

     );
}
 
export default PostReply;
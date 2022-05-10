



const DisplayFeed = (props) => {
    
    
    return ( 
        props.post.map((eachPost, index) => {
            return (
                <div>
                <table>
                    <tbody> 
                        <tr key={index}>
                            <td>{eachPost.user.rank +' '+ eachPost.user.last_name + ' ' + eachPost.user.first_name}</td>
                        </tr>
                        <tr key={index}>    
                            <td>{eachPost.user.current_status +' '+ eachPost.user.branch}</td>
                        </tr>
                        <tr key={index}>
                            <td>{eachPost.text}</td>
                            <td>{eachPost.like}</td>
                            <td>{eachPost.dislike}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            )
        })
     );
}
 
export default DisplayFeed;
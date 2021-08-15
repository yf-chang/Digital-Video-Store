import { useState, useEffect } from "react";

const Customer = ({data}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://digital-video-store-backend.herokuapp.com/users")
        .then((res)=>{
          return res.json()
        })
        .then(json=>{    
              setUsers(json.body);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
      },[]);
    
    return ( 
        <div>
            {users.filter(user=>user.username == data).map(loggedUser=>(
                <div>
                    <ul>
                        <li>First Name: {loggedUser.firstName}</li>
                        <li>Last Name: {loggedUser.lastName}</li>
                        <li>Email: {loggedUser.email}</li>
                        <li>Username: {loggedUser.username}</li>
                    </ul>
                </div>
            ))}
        </div>
     );
}
 
export default Customer;
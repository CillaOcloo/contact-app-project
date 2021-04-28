import React from 'react';

function Contacts(props) { 

return(
   <div>
        {props.allUsers.map((user) => ( 
        <div user={user}>  
        <p>{user.Name}</p>
        <p>{user.Phone_number}</p>
        <p>{user.Location}</p>
      </div>
      ))}

   </div>
)

}

export default Contacts;




    
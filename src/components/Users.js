import React from "react";

function Users(props) {
  const users = props.usersArray;
  console.log('users:', users);
  return (
    <div className="users-list">
       {users.map((user, index) => (
        <div key={index} className="user-container">
          <p>{user.address}</p>
          <p>{user.name}</p>
          
        </div>
      ))}
      
    
    </div>
  );
}

export default Users;
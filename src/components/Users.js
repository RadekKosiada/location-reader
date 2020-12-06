import React from "react";

function Users(props) {
  const users = props.usersArray;
  console.log('users:', users);
  return (
    <div className="users-list">
       {users.map((user, index) => (
        <div key={index} className="user-container">
        <p className={user.name ? "user-name" : "user-name-empty"}>
          {user.name ? user.name : "Name"}
        </p>
        <div className={user.address ? "user-address" : "user-address-empty"}>
          <p> {user.address.split(",")[0] ? user.address.split(",")[0] : "Address"}</p>
          <p> {user.address.split(",")[1] ? user.address.split(",")[1] : "City"} </p>
          <p> {user.address.split(",")[2] ? user.address.split(",")[2] : "Country"} </p>
        </div>
      </div>
      ))}
      
    
    </div>
  );
}

export default Users;
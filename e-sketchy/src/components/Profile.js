import React from "react";

function Profile({ user }) {
  console.log("this is user " + user)
  return (
    <div>
    <h1> {user.username}</h1>
    <h2> {user.email}</h2>
    </div>
  ) ;
}

export default Profile;

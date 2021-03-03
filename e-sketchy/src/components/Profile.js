import React from "react";

function Profile() {
  const user = localStorage.getItem("username");
  return (
    <div>
    <h1> Welcome </h1>
    <h2> {user}</h2>
    <a href="/"> Go Back Home </a>
    </div>
  ) ;
}

export default Profile;

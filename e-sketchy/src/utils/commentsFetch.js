require("dotenv").config();

const url = `http://localhost:4000/comment`;
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
// // --------------------Get all the Comments function------>
function getComments(commentId) {
  return fetch(url, {
    method: "GET",
    body: JSON.stringify({ commentId }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

// // --------------------Post Comments function------>
function postComment(addComment) {
  console.log(addComment);
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({ addComment }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

// --------------------Delete Comments function------>
function DeleteComment(DeleteComment) {
  return fetch(url, {
    method: "DELETE",
    body: JSON.stringify({ DeleteComment }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

module.exports = { getComments, postComment, DeleteComment };

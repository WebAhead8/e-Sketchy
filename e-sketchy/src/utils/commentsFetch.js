require("dotenv").config();
let serverUrl = process.env.REACT_APP_SERVER_URL;

const url = `/comment`;
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
// // --------------------Get all the Comments function------>
//
function getComments(commentId) {
  return fetch(`${serverUrl}${url}`, {
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
function postComment(addComment, token, productId) {
  return fetch(`${serverUrl}${url}`, {
    method: "POST",
    // cmm.comment, cmm.user_id, cmm.prod_id
    body: JSON.stringify({
      comment: addComment,
      // user_id: 4,
      prod_id: productId,
    }),
    headers: {
      "Content-type": "application/json",
      authorization: `${token}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

// --------------------Delete Comments function------>
function DeleteComment(DeleteComment) {
  return fetch(`${serverUrl}${url}`, {
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

export default { getComments, postComment, DeleteComment };

require("dotenv").config();

const url = `http://localhost:4000/customerreview`;
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
// ----------------------
function postComment(addComment) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(addComment),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}
postComment(url).then((data) => {
  console.log(data);
});

export default postComment;

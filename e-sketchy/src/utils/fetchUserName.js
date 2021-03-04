const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function getUserName(prod_id) {
  return fetch(`http://localhost:4000/comments/${prod_id}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

export default getUserName;

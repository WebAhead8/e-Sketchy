let serverUrl = process.env.REACT_APP_SERVER_URL;

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function getUserName(prod_id) {
  return fetch(`${serverUrl}/comments/${prod_id}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

export default getUserName;

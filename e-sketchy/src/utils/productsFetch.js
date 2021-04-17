require("dotenv").config();
let serverUrl = process.env.REACT_APP_SERVER_URL;

const url = `/products`;

const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function addProduc(prodData) {
  return fetch(`${serverUrl}${url}`, {
    method: "POST",
    body: JSON.stringify(prodData),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

export default addProduc;

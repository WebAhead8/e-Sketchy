const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getData = (url) => {
  return fetch(url)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
};

export default getData;

require("dotenv").config();

export const addUser = (data) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((promise) => {
    return promise.json();
  });
};

let serverUrl = process.env.REACT_APP_SERVER_URL;

function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      const error = new Error("HTTP Error");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

export function login(loginData) {
  return request(`${serverUrl}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function getUser(token) {
  return request(`${serverUrl}/login/me`, {
    headers: { authorization: `${token}` },
  });
}

export default { login, getUser };

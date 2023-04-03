import {API_ENDPOINT} from './api-endpoints'

export async function login(username, password) {
  const user = {
    username: username,
    password: password
  };

  let response = await fetch(`${API_ENDPOINT}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (response.ok) {
    const data = await response.json();
    localStorage.clear();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    return true;
  }

  return false;
}

export function logout() {
  const refresh = {
    'refresh_token': localStorage.getItem('refresh_token')
  };

  fetch(`${API_ENDPOINT}/tradester/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('access_token')}`
    },
    body: JSON.stringify(refresh),
  })
    .then((response) => {
      if (!response.ok) { 
        throw new Error(`Unable to log out. Error: ${response.message}`);
      }
      localStorage.clear();
    })
    .catch((error) => {
      console.error(error);
    });
}

export function isLoggedIn() {
  return !(localStorage.getItem('refresh_token') === null);
}

//Currently, the return value is not being used. However, there may be a use case for it in the future.
export async function register(username, password, passwordConf, setFeedback) {
  const user = {
    username: username,
    password: password,
    password_conf: passwordConf
  };

  let response = await fetch(`${API_ENDPOINT}/tradester/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  let data = await response.json();

  if (response.ok) {
    setFeedback(data.status)
    return true;
  } else {
    setFeedback(data.error);
    return false;
  }
}
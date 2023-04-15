import { API_ENDPOINT } from "./api-endpoints";

export async function findUserByUsername(username) {
  let response = await fetch(`${API_ENDPOINT}/friendship/find_user_by_username/?username=${username}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

export async function isFriendsWith(userId) {
  let response = await fetch(`${API_ENDPOINT}/friendship/check_friendship/?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
  });

  if (!response.ok) return false;

  let data = await response.json();
  return data.is_friend;
}

export async function hasOutgoingRequest(userId) {
  let response = await fetch(`${API_ENDPOINT}/friendship/check_outgoing_request/?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
  });

  if (!response.ok) return false;

  let data = await response.json();
  return data.outgoing_request;
}

export async function hasIncomingRequest(userId) {
  let response = await fetch(`${API_ENDPOINT}/friendship/check_incoming_request/?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
  });

  if (!response.ok) return false;

  let data = await response.json();
  return data.incoming_request;
}

export async function sendFriendRequest(userId) {
  fetch(`${API_ENDPOINT}/friendship/send_friend_request/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      "receiver_user_id": userId,
    }),
  }); 
}

export async function revokeFriendRequest(userId) {
  fetch(`${API_ENDPOINT}/friendship/revoke_friend_request/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      "user_id": userId,
    }),
  });
}

export async function getFriendRequests() {
  let response = await fetch(`${API_ENDPOINT}/friendship/get_friend_requests/`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
  });

  if (!response.ok) return [];

  return await response.json()
}

export async function respondFriendRequest(userId, isAccept) {
  fetch(`${API_ENDPOINT}/friendship/respond_friend_request/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      "sender_user_id": userId,
      "response": isAccept ? "accept": "decline", 
    }),
  });
}

export async function getFriends() {
  let response = await fetch(`${API_ENDPOINT}/friendship/get_friends/`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
  });

  if (!response.ok) return [];

  return await response.json()
}

export async function unfriend(userId) {
  fetch(`${API_ENDPOINT}/friendship/unfriend/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      "user_id": userId,
    }),
  });
}

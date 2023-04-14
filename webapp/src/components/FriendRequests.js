import { useEffect, useState } from "react";
import SocialTabs from "./SocialTabs";
import { getFriendRequests, respondFriendRequest } from "../services/friendship";
import './style/friends.css'
import './style/user.css';

export default function FriendRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    let get = async () => {
      let reqs = await getFriendRequests();
      setRequests(reqs);
    };
    get();
  }, []);

  const respondRequest = async (i, userId, isAccept) => {
    await respondFriendRequest(userId, isAccept);
    const newRequests = requests.filter((item, index) => index != i);
    setRequests(newRequests);
  };

  return (
    <div className="friends">
      <h3>Friend Requests</h3>
      <SocialTabs />
      <div className="requests-container">
        {requests.map((item, index) =>
          <div className="user-display">
            <p>{item.username}</p>
            <div className="accept-decline-container">
              <button onClick={() => respondRequest(index, item.user_id, true)}>Accept</button>
              <button onClick={() => respondRequest(index, item.user_id, false)}>Decline</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

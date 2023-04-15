import { useEffect, useState } from "react";
import SocialTabs from "./SocialTabs";
import './style/friends.css';
import { getFriends, unfriend } from "../services/friendship";
import { useNavigate } from "react-router-dom";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let fetch = async () => {
      let result = await getFriends();
      setFriends(result);
    };
    fetch();
  }, []);

  const onUnfriend = async (i, userId) => {
    await unfriend(userId);
    const newFriends = friends.filter((item, index) => index != i);
    setFriends(newFriends);
  };

  return (
    <div className="friends">
      <h3>Friends</h3>
      <SocialTabs />
      <div className="requests-container">
        {friends.map((item, index) =>
          <div className="user-display">
            <p>{item.username}</p>
            <div className="accept-decline-container">
              <button onClick={() => onUnfriend(index, item.user_id)}>Unfriend</button>
              <button 
                onClick={
                  () => {
                    navigate("/portfolio", {
                      state: {
                        username: item.username,
                        userId: item.user_id,
                        isSelf: false,
                      },
                    })
                  }
                }
              > View Portfolio</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

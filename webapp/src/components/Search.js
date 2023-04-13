import './style/search.css';
import SocialTabs from "./SocialTabs";
import { 
  findUserByUsername,
  hasOutgoingRequest,
  hasIncomingRequest,
  isFriendsWith,
  sendFriendRequest,
  revokeFriendRequest,
} from '../services/friendship';
import { useState } from 'react';

export default function Search() {

  const [username, setUserName] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  const sendRequest = async () => {
    await sendFriendRequest(foundUser.user_id);
    setFoundUser({
      username: foundUser.username,
      user_id: foundUser.user_id,
      isFriend: foundUser.isFriend,
      incoming_request: foundUser.incoming_request,
      outgoing_request: true,
    });
  };

  const revokeRequest = async () => {
    await revokeFriendRequest(foundUser.user_id);
    setFoundUser({
      username: foundUser.username,
      user_id: foundUser.user_id,
      isFriend: foundUser.isFriend,
      incoming_request: foundUser.incoming_request,
      outgoing_request: false,
    });
  };

  const findUser = async () => {
    let user = await findUserByUsername(username);
    if (!user) {
      setFoundUser(null);
      return;
    }

    user.isFriend = await isFriendsWith(user.user_id);
    user.outgoing_request = false;
    user.incoming_request = false;

    if (!user.isFriend) {
      user.outgoing_request = await hasOutgoingRequest(user.user_id);
    }

    if (!user.isFriend && !user.outgoing_request) {
      user.incoming_request = await hasIncomingRequest(user.user_id);
    }

    setFoundUser(user);
  };

  const onEnter = async (e) => {
    if (e.key === "Enter") {
      findUser();
    }
  };

  let userDiv = (<div></div>);

  if (foundUser) {
    let button = false;
    if (foundUser.isFriend) {
      button = <b>Friend</b>
    } else if (foundUser.outgoing_request) {
      button = <button onClick={revokeRequest}>Revoke</button>
    } else if (!foundUser.incoming_request) {
      button = <button onClick={sendRequest}>Send</button>
    }

    userDiv = (
      <div className="user-display">
        <p>{foundUser.username}</p>
        {button}
      </div>
    );
  }

  return (
    <div className="search">
      <h3>Search Users</h3>
      <SocialTabs />
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="search-bar"
        placeholder="Enter username"
        onKeyDown={onEnter}
      />
      {userDiv}
    </div>
  );
}

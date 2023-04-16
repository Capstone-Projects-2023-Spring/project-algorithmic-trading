import { useNavigate } from "react-router-dom";
import "./search.css";

export default function SocialTabs() {
  const navigate = useNavigate();

  return (
    <div className="social-tabs">
      <p onClick={() => navigate("/search")}>Search</p>
      <p className="separator">|</p>
      <p onClick={() => navigate("/friends")}>Friends List</p>
      <p className="separator">|</p>
      <p onClick={() => navigate("/friend-requests")}>Friend Requests</p>
    </div>
  );
}

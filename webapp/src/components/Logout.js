import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authentication";

const Logout = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    setLoggedIn(false);
    navigate('/');
  });  
};

export default Logout;

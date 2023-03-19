import { useEffect } from "react";
import { logout } from "../services/authentication";

const Logout = ({ setLoggedIn }) => {
  useEffect(() => {
    logout();
    setLoggedIn(false);
  });  

  return (<div></div>);
};

export default Logout;

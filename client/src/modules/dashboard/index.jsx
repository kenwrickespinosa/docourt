import React, { useContext } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

function index() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div>
        Welcome, {user.firstname} {user.lastname}
      </div>
    </div>
  );
}

export default index;

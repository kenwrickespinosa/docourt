import React, { useContext } from "react";
import { UserContext } from "../hooks/contexts/UserContext";

function Home() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between shadow">
        <div>
          <p>
            {user.firstname} {user.lastname}
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <p>Contents</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

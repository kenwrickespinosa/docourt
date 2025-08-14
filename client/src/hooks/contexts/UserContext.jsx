import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Token:", token);
    if (!token) {
      return;
    }

    fetch("http://localhost:8080/api/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => {
        setUser(data); // { firstname, lastname, username }
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        localStorage.removeItem("token");
      })
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token }}>
      {children}
    </UserContext.Provider>
  )
};

import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [token, setToken] = useState("");
  const [username, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getAuthenticated();
  }, []);

  const getAuthenticated = async () => {
    const cookies = new URLSearchParams(
      document.cookie.replaceAll("&", "%26").replaceAll("; ", "&")
    );

    const data = {
      token: cookies.get("token"),
      username: cookies.get("username"),
      userId: cookies.get("userId")
    };

    if (data?.token && data?.username && data?.userId) {
      setToken(data?.token);
      setUserName(data?.username);
      setUserId(data?.userId);
    } else {
      setToken("");
      setUserName("");
      setUserId("");
    }
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          token,
          username,
          userId,
          setToken,
          setUserName,
          setUserId,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </React.Fragment>
  );
}

"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [id, setId] = useState("no auth");
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          id,
          setId,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </React.Fragment>
  );
}

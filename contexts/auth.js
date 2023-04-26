"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [id, setId] = useState("no auth");
  const [idAttedance, setIdAttedance] = useState();
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          id,
          setId,
          idAttedance,
          setIdAttedance
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </React.Fragment>
  );
}

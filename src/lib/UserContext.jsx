"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie"; // Install with `npm install js-cookie`

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve token from cookies if available
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const logoutUser = () => {
    setToken(null);
    Cookies.remove("token"); // Remove the token cookie
  
  };

  const setTokenCookie = (newToken) => {
    setToken(newToken);
    Cookies.set("token", newToken, { expires: 7 }); // Set cookie with 7-day expiration
  };

  return (
    <UserContext.Provider value={{ token, setToken: setTokenCookie, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

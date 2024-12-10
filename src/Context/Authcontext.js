import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); 

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(""); 
    alert("You have successfully logged out.");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

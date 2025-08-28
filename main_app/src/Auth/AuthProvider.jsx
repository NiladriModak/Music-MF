import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// Simple in-memory JWT-like stub
function fakeSignIn(role = "user") {
  const token = btoa(JSON.stringify({ role, iat: Date.now() }));
  return token;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const signIn = (role) => {
    const t = fakeSignIn(role);
    localStorage.setItem("token", t);
    localStorage.setItem("role", role);
    setToken(t);
  };
  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };
  const getRole = () => {
    if (localStorage.getItem("token")) return null;
    try {
      const decoded = JSON.parse(atob(token));
      return decoded.role;
    } catch (e) {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, getRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

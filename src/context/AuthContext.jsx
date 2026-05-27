import { createContext, useContext, useState } from "react";
import users from "../data/users";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Returns true on success, false on bad credentials.
  function login(username, password) {
    const match = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (match) {
      setUser({ username: match.username, name: match.name });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

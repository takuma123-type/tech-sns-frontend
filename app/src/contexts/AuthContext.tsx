import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem("authToken"));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const login = (token: string) => {
    setAuthToken(token);
    sessionStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuthToken(null);
    sessionStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

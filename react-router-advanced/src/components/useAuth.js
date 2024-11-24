// src/hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with actual logic

  return { isAuthenticated, setIsAuthenticated };
};

export default useAuth;

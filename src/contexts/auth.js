import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [object, setObject] = useState();
  const navigation = useNavigate();

  return (
    <AuthContext.Provider value={{ object, setObject }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

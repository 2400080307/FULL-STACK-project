import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (email, _password, role) => {
    setUser({
      name: email.split("@")[0],
      email,
      role
    });
  };
  const logout = () => {
    setUser(null);
  };
  return /* @__PURE__ */ jsx(
    AuthContext.Provider,
    {
      value: {
        user,
        login,
        logout,
        isAuthenticated: !!user
      },
      children
    }
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export {
  AuthProvider,
  useAuth
};

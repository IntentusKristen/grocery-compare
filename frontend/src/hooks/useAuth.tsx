import { createContext, useContext, ReactNode, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  login: async (token: string) => {},
  logout: async (token: string) => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const value = useMemo(
    () => ({
      token,
      login: async (token: string) => {
        setToken(token);
        navigate("/");
      },
      logout: async (token: string) => {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/signout`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to sign out.");
        }

        setToken(null);
        navigate("/", { replace: true });
      },
    }),
    [navigate, setToken, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

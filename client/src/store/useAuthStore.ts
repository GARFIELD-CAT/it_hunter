import { create } from "zustand";
import { logger } from "./logger";

interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState["isAuthenticated"]) => void;
  logout: () => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
      },
      logout: () => {
        localStorage.removeItem('token');
        set(() => ({ isAuthenticated: false }));
      },
    }),
    "authStore"
  )
);

export default useAuthStore;

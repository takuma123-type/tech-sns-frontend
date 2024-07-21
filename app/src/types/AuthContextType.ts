export interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  currentUser: any; // 適切な型に変更してください
}



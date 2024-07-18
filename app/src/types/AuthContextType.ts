// app/src/types/AuthContextType.ts
export interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: any; // 適切な型に置き換えてください
  login: () => void;
  logout: () => void;
}

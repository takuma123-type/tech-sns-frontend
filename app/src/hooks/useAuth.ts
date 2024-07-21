import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // AuthContextをインポート
import { AuthContextType } from "../types/AuthContextType"; // 型をインポート

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext) as AuthContextType | null;
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

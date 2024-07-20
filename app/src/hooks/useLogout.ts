import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOutUsecase, LogOutInput } from '../usecase/LogOutUsecase';
import { SessionsRepository } from '../infrastructure/repository/SessionsRepository';
import { useAuth } from '../contexts/AuthContext';

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const sessionRepository = new SessionsRepository();

  const handleLogout = useCallback(async () => {
    console.log('Logout process started');
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }

    console.log('Token found:', token);
    const logOutUsecase = new LogOutUsecase(new LogOutInput({ token }), sessionRepository);

    try {
      await logOutUsecase.log_out();
      console.log('Logout successful');
      logout();
      navigate('/');
      console.log('Navigated to login page');
    } catch (error) {
      console.error('Logout failed', error);
    }
  }, [navigate, sessionRepository, logout]);

  return handleLogout;
};

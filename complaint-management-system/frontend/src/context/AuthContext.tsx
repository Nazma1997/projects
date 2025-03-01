import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { User } from '../types/User';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}


const api_end_point = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);



  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async() => {


    const response = await axios.post(`${api_end_point}/auth/user/logout`, {
      withCredentials: true,
    });
    if(response){
      setUser(null);
      localStorage.removeItem('user');
      navigate('/login')
    }
  
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
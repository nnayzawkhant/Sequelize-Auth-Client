// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getProfile } from '../service/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getProfile();
        setUser(userProfile);
      } catch {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

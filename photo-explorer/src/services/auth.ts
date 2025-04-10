import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import logger from './logger';
import { AuthUser } from '../types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userData: AuthUser = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
        };
        setUser(userData);
        localStorage.setItem('authUser', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('authUser');
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userData: AuthUser = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
      };
      setUser(userData);
      localStorage.setItem('authUser', JSON.stringify(userData));
      logger.info('User logged in:', userData.name);
    } catch (error) {
      logger.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('authUser');
      logger.info('User logged out');
    } catch (error) {
      logger.error('Logout failed:', error);
    }
  };

  return { user, login, logout, isLoading };
}

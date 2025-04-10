import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import AlbumView from './components/AlbumView';
import PhotoView from './components/PhotoView';
import { useAuth } from './services/auth';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to='/' />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/users'
        element={
          <PrivateRoute>
            <UserList />
          </PrivateRoute>
        }
      />
      <Route
        path='/user/:userId'
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path='/album/:albumId'
        element={
          <PrivateRoute>
            <AlbumView />
          </PrivateRoute>
        }
      />
      <Route
        path='/photo/:photoId'
        element={
          <PrivateRoute>
            <PhotoView />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

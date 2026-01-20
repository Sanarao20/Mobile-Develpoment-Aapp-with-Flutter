import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '@/app/components/Login';
import { Home } from '@/app/components/Home';
import { ProgramListing } from '@/app/components/ProgramListing';
import { ProgramDetails } from '@/app/components/ProgramDetails';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Login onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/programs"
          element={
            isAuthenticated ? (
              <ProgramListing />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/programs/:id"
          element={
            isAuthenticated ? (
              <ProgramDetails />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/home" : "/login"} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

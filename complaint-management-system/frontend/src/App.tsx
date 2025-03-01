import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TicketProvider } from './context/TicketContext';
import Dashboard from './pages/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Header';
import { Notifications } from './components/notifications/Notifications';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './context/ProtectedRoutes';

const App: React.FC = () => {
  return (
    <>
     <ToastContainer />
     <Router>
      <AuthProvider>
        <TicketProvider>
        <Navbar />
          <Routes>

        
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notifications" element={<Notifications />} />
              </Route>
           
           
            
          </Routes>
         
        </TicketProvider>
      </AuthProvider>
    </Router>
     </>


  
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TicketProvider } from './context/TicketContext';
import Dashboard from './pages/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Header';
import { Notifications } from './components/notifications/Notifications';


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <TicketProvider>
        <Navbar />
          <Routes>

        
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            
          </Routes>
         
        </TicketProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
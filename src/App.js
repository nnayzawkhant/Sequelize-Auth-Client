import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './pages/Home';
import Profile from './components/profile/Profile';

function App() {
  const [token, setToken] = useState(Cookies.get('authToken') || null);

  useEffect(() => {
    if (token) {
      Cookies.set('authToken', token, { expires: 7 }); // Token expires in 7 days
    } else {
      Cookies.remove('authToken');
    }
  }, [token]);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">AuthApp</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                {token ? (
                  <Link className="nav-link" to="/profile">Profile</Link>
                ) : (
                  <span className="nav-link disabled">Profile</span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/profile" element={<Profile token={token} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

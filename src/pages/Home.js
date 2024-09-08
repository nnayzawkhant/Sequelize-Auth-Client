import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Welcome to AuthApp</h2>
      <p>
        <Link to="/register">Register</Link> or <Link to="/login">Login</Link> to get started.
      </p>
    </div>
  );
};

export default Home;

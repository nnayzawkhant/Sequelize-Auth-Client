import React, { useState, useEffect } from 'react';
import apiService from '../../service/apiService';
const Profile = ({ token }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiService.getProfile(token);
        setProfile(response.data);
      } catch (error) {
        setError(error.response.data.message || 'Failed to fetch profile');
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {profile ? (
        <div>
          <p>Email: {profile.email}</p>
          <p>Full Name: {profile.fullName}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;

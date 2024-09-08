import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

const register = async (email, password, fullName) => {
  return axios.post(`${API_URL}/register`, { email, password, fullName }, {
    headers: { 'Content-Type': 'application/json' }
  });
};

const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password }, {
    headers: { 'Content-Type': 'application/json' }
  });
};

const getProfile = async (token) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

const writeContent = async (token, content) => {
  return axios.post(`${API_URL}/write`, { content }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default { register, login, getProfile, writeContent };

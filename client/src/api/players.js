import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const { REACT_APP_API_BASE = '' } = process.env;

export const createPlayers = players => {
  return axios.post(`${REACT_APP_API_BASE}/player/bulk`, players);
};

export const updatePlayer = player => {
  return axios.put(`${REACT_APP_API_BASE}/player`, player);
};

export const getAllPlayers = () => {
  return axios.get(`${REACT_APP_API_BASE}/player`);
};

import axios from 'axios';

export const ROSATOM_API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const apiRoutes = {
  signUp: '/user/signUp',
  logIn: '/user/logIn',
  getAvailableKids: './team/getAvailableKids',
  addKidToTeam: '/team/addKidToTeam',
  getTeam: '/team/getTeam',
};

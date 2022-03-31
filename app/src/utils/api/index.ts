import axios from 'axios';

export const ROSATOM_API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const apiRoutes = {
  login: '/auth/login',
  logout: '/auth/logout',
  getUserData: '/user',
  updateUserData: '/user',
  getUserDashboard: '/user/dashboard',
  editUserDashboard: '/user/dashboard/settings',
  getAllDashboards: '/dashboards',
  getAvailableDashboards: '/user/dashboard/available',
  getUserNotifications: '/user/notifications',
  getUserNotificationsSettings: '/user/notifications/settings',
  editUserNotificationsSettings: '/user/notifications/settings',
  getStyles: '/styles',
};

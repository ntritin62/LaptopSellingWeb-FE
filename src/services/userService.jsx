import axios from 'axios';
import getAuthToken from './getToken';
export const getUserService = async (product) => {
  const token = getAuthToken();
  return await axios.get(`${import.meta.env.VITE_SERVER_URL}/auth/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

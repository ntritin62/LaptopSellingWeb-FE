import axios from 'axios';
import getAuthToken from './getToken';
export const getUserService = async (product) => {
  const token = getAuthToken();
  return await axios.get('http://localhost:3000/api/v1/users/showMe', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

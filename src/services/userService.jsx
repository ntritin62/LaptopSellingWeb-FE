import axios from 'axios';
import getAuthToken from './getToken';
<<<<<<< HEAD
export const getUserService = async (product) => {
=======
export const getUserService = async () => {
>>>>>>> 1c915e6 (change logo and primary color)
  const token = getAuthToken();
  return await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/users/showMe`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

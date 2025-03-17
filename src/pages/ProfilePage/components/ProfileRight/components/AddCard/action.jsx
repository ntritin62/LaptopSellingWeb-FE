import { redirect } from 'react-router-dom';
import axios from 'axios';
import getAuthToken from '../../../../../../services/getToken';
export default async function action({ params, request }) {
  const token = getAuthToken();
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/addresses/`,
    {
      ...data,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // return response;
  return redirect('/profile');
}

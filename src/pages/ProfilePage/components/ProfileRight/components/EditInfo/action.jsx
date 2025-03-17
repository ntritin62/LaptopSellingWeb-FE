import axios from 'axios';
import getAuthToken from '../../../../../../services/getToken';
export default async function action({ params, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const token = getAuthToken();
  console.log(data);
  try {
    return await axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/users/updateUser`,
      {
        user: data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}

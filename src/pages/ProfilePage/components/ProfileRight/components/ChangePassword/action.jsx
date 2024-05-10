import { redirect } from 'react-router-dom';
import axios from 'axios';
import getAuthToken from '../../../../../../services/getToken';
export default async function action({ params, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const token = getAuthToken();

  try {
    const response = await axios.patch(
      'http://localhost:3000/api/v1/users//updateUserPassword',
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
    return response;
  } catch (e) {
    console.log(e.response.data.msg);
    return e.response.data.msg;
  }
}

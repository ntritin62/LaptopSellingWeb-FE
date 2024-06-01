import axios from 'axios';
import { redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/auth/login`,
      data,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const resData = response.data;
    localStorage.setItem('token', resData.token);

    return redirect(ROUTES.HOME);
  } catch (error) {
    return error.response.data.msg;
  }
}

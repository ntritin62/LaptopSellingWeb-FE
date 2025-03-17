import axios from 'axios';
import { redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { getUserService } from '../../services/userService';

export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/login`,
      data,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const resData = response.data;
    console.log(resData);

    localStorage.setItem('token', resData.data.jwt_token);
    const {
      data: { data: user },
    } = await getUserService();
    if (user.role === 'admin') {
      return redirect(ROUTES.ADMIN);
    }
    
    return redirect(ROUTES.HOME);
  } catch (error) {
    return error.response.data.msg;
  }
}

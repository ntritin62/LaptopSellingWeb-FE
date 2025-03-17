import axios from 'axios';
import { redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/signup`,
      data,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );


    return redirect(ROUTES.LOGIN);
  } catch (error) {
    return error.message;
  }
}

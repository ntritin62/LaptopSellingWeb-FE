import axios from 'axios';
import { redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/auth/register`,
      data,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return redirect(ROUTES.LOGIN);
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

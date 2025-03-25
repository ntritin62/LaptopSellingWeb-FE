import axios from 'axios';
import getAuthToken from '../../../services/getToken';
export async function loader({ request, params }) {
  const token = getAuthToken();

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
   
    return response.data.data.orders;
  } catch (err) {
    console.log(err);
  }
}

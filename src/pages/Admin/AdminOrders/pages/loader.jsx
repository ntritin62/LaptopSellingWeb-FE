import axios from 'axios';
import getAuthToken from '../../../../services/getToken';
export async function loader({ request, params }) {
  const token = getAuthToken();
  const orderId = params.id;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/${orderId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
}

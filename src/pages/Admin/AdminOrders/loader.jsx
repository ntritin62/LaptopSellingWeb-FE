import axios from 'axios';
import getAuthToken from '../../../services/getToken';
export async function loader({ request, params }) {
  const token = getAuthToken();

  try {
    const response = await axios.get(`http://localhost:3000/api/v1/orders/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.orders;
  } catch (err) {
    console.log(err);
  }
}

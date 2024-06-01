import axios from 'axios';
import getAuthToken from '../../../services/getToken';
export async function loader({ request, params }) {
  const token = getAuthToken();
  const couponId = params.id;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/coupons/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data.coupons;
  } catch (err) {
    console.log(err);
  }
}

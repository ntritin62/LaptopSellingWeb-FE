import getAuthToken from '../../../../../../services/getToken';
import axios from 'axios';
export const loader = async ({ request, params }) => {
  const token = getAuthToken();

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/orders/showAllMyOrders`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      orders: response.data.orders.filter(
        (order) => order.status !== 'pending'
      ),
    };
  } catch (e) {
    console.log(e);
  }
};

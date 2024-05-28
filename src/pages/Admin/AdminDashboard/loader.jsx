import axios from 'axios';
import getAuthToken from '../../../services/getToken';
export async function loader({ request, params }) {
  const token = getAuthToken();

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  try {
    const response = await axios.get(`http://localhost:3000/api/v1/orders/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const response2 = await axios.get(`http://localhost:3000/api/v1/users/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const filteredOrders = response.data.orders.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return (
        itemDate.getMonth() === currentMonth &&
        itemDate.getFullYear() === currentYear
      );
    });

    const filteredUsers = response2.data.users.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return (
        itemDate.getMonth() === currentMonth &&
        itemDate.getFullYear() === currentYear
      );
    });
    const totalAmountInMonth = filteredOrders.reduce(
      (total, order) => total + order.total,
      0
    );

    return {
      ordersInfo: {
        orders: filteredOrders,
        totalInMonth: totalAmountInMonth,
      },
      usersInfo: {
        users: filteredUsers,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

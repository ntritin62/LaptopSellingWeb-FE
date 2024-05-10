import axios from 'axios';
import getAuthToken from './getToken';
export default async function getCart() {
  const token = getAuthToken();

  return await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/cart/showMyCart`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export const addToCartService = async (productId) => {
  const token = getAuthToken();

  return await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/cart/addItemToCart`,
    { productId: productId._id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteItemInCartService = async (itemId) => {
  const token = getAuthToken();

  return await axios.delete(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/cart/deleteItemInCart`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        itemId,
      },
    }
  );
};

// export const incrementInCartService = async (productId) => {
//   const token = getAuthToken();
//   return await axios.put(
//     `${import.meta.env.VITE_SERVER_URL}/cart/increase`,
//     { productId: productId },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

// export const decrementInCartService = async (productId) => {
//   const token = getAuthToken();
//   return await axios.put(
//     `${import.meta.env.VITE_SERVER_URL}/cart/decrease`,
//     { productId: productId },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

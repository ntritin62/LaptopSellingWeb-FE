import axios from 'axios';

export async function loader({ request, params }) {
  const productId = params.productId;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/laptops/${productId}`
    );

    return response.data.laptop;
  } catch (err) {
    console.log(err);
  }
}

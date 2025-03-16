import axios from 'axios';

export async function loader({ request, params }) {
  let brandName = params.brandName;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/laptops`
    );
    if (brandName) {
      return response.data.data.products.filter((laptop) => {
        return laptop.name.toLowerCase().includes(brandName.replace(/-/g, ' '));
      });
    }
    return response.data.data.products;
  } catch (err) {
    console.log(err);
  }
}

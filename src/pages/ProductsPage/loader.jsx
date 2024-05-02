import axios from 'axios';

export async function loader({ request, params }) {
  let brandName = params.brandName;

  try {
    const response = await axios.get('http://localhost:3000/api/v1/laptops');
    if (brandName) {
      return response.data.laptops.filter((laptop) => {
        return laptop.name.toLowerCase().includes(brandName.replace(/-/g, ' '));
      });
    }
    return response.data.laptops;
  } catch (err) {
    console.log(err);
  }
}

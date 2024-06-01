import axios from 'axios';

function extractBrandName(productName) {
  const words = productName.split(' ');

  return words[0];
}

export async function loader({ request, params }) {
  const productId = params.productId;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/laptops/${productId}`
    );

    const brand = extractBrandName(response.data.laptop.name);

    const response_2 = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/laptops`
    );

    return {
      laptop: response.data.laptop,
      similarItems: response_2.data.laptops
        .filter((product) => product.name.startsWith(brand))
        .filter((product) => product.name !== response.data.laptop.name)
        .slice(0, 5),
    };
  } catch (err) {
    console.log(err);
  }
}

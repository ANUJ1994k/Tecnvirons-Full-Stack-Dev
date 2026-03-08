import axios from 'axios';

export const fetchProducts = async ({ page = 1, limit = 50, search }) => {
  const { data } = await axios.get('http://localhost:5000/api/v1/records', { params: { page, limit, search } });
  return data.data;
};

export const fetchProductById = async (id) => {
  const { data } = await axios.get(`http://localhost:5000/api/v1/records/${id}`);
  return data.data;
};
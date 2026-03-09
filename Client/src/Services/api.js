import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const getTransactions = async (page) => {
  try {
    const res = await axios.get(`/transactions?page=${page}&limit=50`);

    console.log("API Response:", res.data);

    return res.data.data || [];

  } catch (error) {

    console.error("API Error:", error);

    return [];
  }
};
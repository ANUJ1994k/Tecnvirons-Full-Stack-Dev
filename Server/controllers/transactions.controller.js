import { fetchTransactions } from "../services/transactions.service.js";

export const getTransactions = async (req, res, next) => {
  try {
    const { page = 1, limit = 50, search } = req.query;

    const data = await fetchTransactions({
      page: Number(page),
      limit: Number(limit),
      search
    });

    res.json({
      success: true,
      data
    });

  } catch (err) {
    next(err);
  }
};
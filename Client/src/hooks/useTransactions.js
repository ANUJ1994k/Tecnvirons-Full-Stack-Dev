import { useState, useEffect } from "react";
import { getTransactions } from "../Services/api";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadTransactions();
  }, [page]);

  const loadTransactions = async () => {
    const data = await getTransactions(page);
    

    setTransactions(prev => [...prev, ...data]);
  };

  return { transactions, setPage };
}
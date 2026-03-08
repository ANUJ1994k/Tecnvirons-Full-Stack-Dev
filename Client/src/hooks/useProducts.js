import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productApi';

export default function useProducts(search = '') {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts({ page, search })
      .then(data => {
        setProducts(prev => [...prev, ...data]);
        setHasMore(data.length > 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page, search]);

  return { products, setPage, loading, hasMore };
}
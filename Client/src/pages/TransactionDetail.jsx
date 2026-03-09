import React, { useRef, useCallback } from 'react';
import ProductCard from '../components/TransactionRow';
import Loader from '../components/TransactionTable';
import useProducts from '../hooks/useTransactions';

export default function ProductList() {
  const { products, setPage, loading, hasMore } = useProducts();
  const observer = useRef();

  const lastProductRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) setPage(prev => prev + 1);
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div>
      {products.map((product, index) => {
        if (products.length === index + 1) return <div ref={lastProductRef} key={product.id}><ProductCard product={product} /></div>;
        return <ProductCard key={product.id} product={product} />;
      })}
      {loading && <Loader />}
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../api/productApi';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}
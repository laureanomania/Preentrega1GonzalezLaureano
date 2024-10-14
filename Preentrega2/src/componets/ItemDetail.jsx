
import React from 'react'
import { useParams } from 'react-router-dom'
import mockProducts from '../assets/mockData.json'

const ItemDetail = () => {
  const { id } = useParams(); 
  const product = mockProducts.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default ItemDetail;

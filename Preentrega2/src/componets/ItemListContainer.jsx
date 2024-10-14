import React, { useEffect, useState } from 'react';
import mockProducts from '../assets/mockData.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { condition } = useParams(); // Se espera que 'condition' sea 'nuevo' o 'usado'

  useEffect(() => {
    const timer = setTimeout(() => {
      let productsFiltered;

      // Filtrar por condición
      if (condition) {
        productsFiltered = mockProducts.filter(product => product.condition.toLowerCase() === condition.toLowerCase());
      } else {
        productsFiltered = mockProducts;
      }

      setLoadedProducts(productsFiltered);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [condition]);

  if (loading) {
    return <div>Cargando los Productos, por favor espere....</div>;
  }

  return <ItemList products={loadedProducts} />;
};

export default ItemListContainer;

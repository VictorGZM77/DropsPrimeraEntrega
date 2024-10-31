import React from 'react';
import ItemList from '/src/components/ItemList/ItemList';

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
      <ItemList />
    </div>
  );
};

export default Products;

import React from 'react';
import { useParams } from 'react-router-dom';
import products from '/src/Data/asyncMock';

const ProductDetail = () => {
  const { id } = useParams();  
  const product = products.find((p) => p.id === parseInt(id));  

  if (!product) {
    return <p>Producto no encontrado</p>;  
  }

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-black mb-6">{product.price}</p>
          <button className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800">
            AGREGAR AL CARRO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

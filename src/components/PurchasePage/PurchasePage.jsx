import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/asyncMock';

const PurchasePage = ({ addToCart }) => {  
  const { id } = useParams();  
  const product = products.find((p) => p.id === parseInt(id));  

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Producto no encontrado</p>;  
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla.');
      return;
    }

    if (quantity > product.stock) {
      alert(`Solo hay ${product.stock} unidades disponibles en stock.`);
      return;
    }

    addToCart({
      ...product,
      selectedSize,
      quantity
    });

    alert('Producto agregado al carrito');
  };

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

          {/* Opciones de talla */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Elige tu talla</h4>
            <div className="flex space-x-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 ${selectedSize === size ? 'bg-gray-700 text-white' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  US {size} MEN
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Cantidad</h4>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border px-4 py-2 w-20"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800"
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;


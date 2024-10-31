import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {

  const subtotal = cart.reduce((acc, product) => acc + parseFloat(product.price.replace('$', '').replace('.', '')), 0);

  if (cart.length === 0) {
    return <p className="text-center py-16">Tu carrito está vacío</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6">Carro de compras | ID: 4067500006</h2>


      <table className="table-auto w-full text-left mb-6">
        <thead>
          <tr className="border-b">
            <th className="p-4">ARTÍCULO</th>
            <th className="p-4">PRECIO</th>
            <th className="p-4">CANTIDAD</th>
            <th className="p-4">ENTREGA</th>
            <th className="p-4">DESCUENTO</th>
            <th className="p-4">TOTAL</th>
            <th className="p-4"></th> 
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 inline-block mr-4" />
                <div className="inline-block">
                  <p>{item.name}</p>
                  <p>Talla: {item.selectedSize}</p>
                </div>
              </td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="border px-4 py-2 w-20"
                  readOnly
                />
              </td>
              <td className="p-4">Envío a domicilio</td>
              <td className="p-4">0%</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 font-bold hover:bg-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="flex justify-between items-center mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Ingrese el código de cupón"
            className="border px-4 py-2 w-64"
          />
          <button className="bg-black text-white px-6 py-2 font-bold hover:bg-gray-800 ml-4">
            APLICAR
          </button>
        </div>
        <div>
          <p className="text-xl font-bold">Subtotal: ${subtotal.toLocaleString()}</p>
        </div>
      </div>

      
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold">TOTAL DE LA ORDEN: ${subtotal.toLocaleString()}</h3>
        <p>Su orden incluye 19% de IVA</p>
      </div>

      
      <div className="flex justify-between">
        <Link to="/" className="bg-gray-500 text-white px-6 py-3 font-bold hover:bg-gray-700">
          SEGUIR COMPRANDO
        </Link>

        
        <Link to="/checkout" className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800">
          FINALIZAR COMPRA
        </Link>
      </div>
    </div>
  );
};

export default Cart;

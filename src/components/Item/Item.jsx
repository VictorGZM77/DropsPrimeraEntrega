import React from 'react';

const Item = ({ name, description, img, stock }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={img} alt={name} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="mb-2">{description}</p>
      <p className="text-sm text-gray-500">Stock: {stock}</p>
    </div>
  );
};

export default Item;

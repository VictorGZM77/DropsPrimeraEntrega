import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { getProductByCategory } from "/src/Data/asyncMock";
const Navbar = () => {
  return (
    <header>
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto text-center">
          COMPRA ONLINE Y RETIRA EN TIENDA GRATIS | DESPACHO DE 2 A 4 DÍAS HÁBILES
        </div>
      </div>

      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-black">DROPS.</h1>
          </div>

          <ul className="hidden md:flex space-x-8 text-sm font-medium text-black">
            <li><Link to="/" className="hover:text-red-500">HOME</Link></li>
            <li><Link to="/products/hombre" className="hover:text-gray-700">HOMBRE</Link></li>
            <li><Link to="/products/mujer" className="hover:text-gray-700">MUJER</Link></li>
            <li><Link to="/about" className="hover:text-gray-700">ABOUT</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700">CONTACT</Link></li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute top-2 right-3" />
            </div>

            <div className="flex space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingBagIcon className="w-6 h-6 text-black" />
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
              </Link>

              <UserIcon className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
import React from 'react';
import ProductList from '/src/components/ItemList/ItemList';  
import ItemList from '../../ItemList/ItemList';

const Home = () => {
  return (
    <div>

      <div className="relative">
        <img
          src="https://moredrops.cl/medias/banner-nike-2.jpg?context=bWFzdGVyfGltYWdlc3w0MDMzNzF8aW1hZ2UvanBlZ3xhR0ZrTDJobU55ODVOekV3TmpNeE5EZzFORGN3TDJKaGJtNWxjaTF1YVd0bExUSXVhbkJufGNhOWFhMGE0M2E2MTU2ZDc3MTA0YjA5MGQ4YzY4ZjE2NDRhY2I2MTFkMmQyODIxZTc1MTk0Yzg4MjBmZjA4OTc"  // Reemplaza esta URL con la imagen que desees
          alt="A$AP ROCKY x PUMA"
          className="w-full h-auto"
        />
      </div>


      <ItemList />
    </div>
  );
};

export default Home;

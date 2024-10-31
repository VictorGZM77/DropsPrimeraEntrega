import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h4 className="text-lg font-bold mb-4">AYUDA</h4>
          <p>Experiencia en Ahumada 347, Santiago</p>
          <p>servicioalcliente@moredrops.cl</p>
        </div>


        <div>
          <h4 className="text-lg font-bold mb-4">INFORMACIÓN</h4>
          <ul>
            <li><a href="#" className="hover:underline">Ver Boleta</a></li>
            <li><a href="#" className="hover:underline">Políticas de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Receta Drops</a></li>
            <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">PAGOS SEGUROS</h4>
          <img src="https://moredrops.cl/medias/footer-payments.png?context=bWFzdGVyfGltYWdlc3w3MTc3OHxpbWFnZS9wbmd8YURJM0wyZzRPQzg1TmpNd05EWTJNelF5T1RReUwyWnZiM1JsY2kxd1lYbHRaVzUwY3k1d2JtY3w4ZmI0N2NiYTc5MDNkZjg0YzFkZjAzY2RhNGU1YWFlODkwZDc1ZmQ5NjE1Njc4MjA5YzY0MzEyOWUxZGY4ZGQx" alt="Métodos de pago" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

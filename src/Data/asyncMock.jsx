const products = [
    {
        id: 1,
        name: 'Inhale Distressed Canvas Zapatilla Puma Hombre x A$AP Rocky',
        category: 'Hombre',
        price: '$99.990',
        image: 'https://moredrops.cl/medias/515Wx515H-DROPS-PM40162401-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wyMjEzMXxpbWFnZS9qcGVnfGFHWmpMMmc1TXk4NU56QTVNRFk0TkRVeE9EY3dMelV4TlZkNE5URTFTRjlFVWs5UVUxOVFUVFF3TVRZeU5EQXhYMVpKUlZjeExtcHdad3wxZTM0ZWViYjIwOGRkYzU1MzJhZDM2NWRhN2Q4M2MyODBkZjg3ZjUyM2VmYzlkN2IwY2M0NDk2OGU0NDI3YTk2',
        size: ['7.5', '8', '8.5', '9'],
        stock: 5
    },
    {
        id: 2,
        name: 'Dunk Low Zapatilla Nike Hombre Gris/Azul/Rojo',
        category: 'Hombre',
        price: '$156.990',
        image: 'https://moredrops.cl/medias/515Wx515H-DROPS-NIHF0391001-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wxNjEwMHxpbWFnZS9qcGVnfGFEYzVMMmhtWVM4NU56QTVNRFU1TkRBM09UQXlMelV4TlZkNE5URTFTRjlFVWs5UVUxOU9TVWhHTURNNU1UQXdNVjlXU1VWWE1TNXFjR2N8MzhhYjgxOTM3ZTFhNmRmOTBiZGY2MTAyMjRiNTQ3N2JjNjk2MDk5YmFhYTkzMGIwYTRkMDcxMzlhNjU2ZjliMQ',
        size: ['7.5', '8', '8.5'],
        stock: 5
    },
    {
        id: 3,
        name: 'Air Max Sunder Zapatilla Nike Mujer Naranja/Negro',
        category: 'Mujer',
        price: '$189.990',
        image: 'https://moredrops.cl/medias/515Wx515H-DROPS-NIHJ8080700-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wxNzMwNHxpbWFnZS9qcGVnfGFHWmhMMmhpTVM4NU56QTFNalU0TlRFMk5URXdMelV4TlZkNE5URTFTRjlFVWs5UVUxOU9TVWhLT0RBNE1EY3dNRjlXU1VWWE1TNXFjR2N8OTY4MDY5ZWU5OTk0ZGUzOThjMmM1NjNlZTE5NjMxM2RiNGJhMTljZGM4ZjU1OThlZjU3Yzg1YTJlNTNkNzRkMQ',
        size: ['7.5', '8', '8.5'],
        stock: 5
    },
    {
        id: 4,
        name: 'Air Max Sunder Zapatilla Nike Mujer Volt/Negro',
        category: 'Mujer',
        price: '$189.990',
        image: 'https://moredrops.cl/medias/515Wx515H-DROPS-NIFZ2068700-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wxNzkwNXxpbWFnZS9qcGVnfGFERmpMMmhsTlM4NU56QTFNalUzTlRrNU1EQTJMelV4TlZkNE5URTFTRjlFVWs5UVUxOU9TVVphTWpBMk9EY3dNRjlXU1VWWE1TNXFjR2N8MmY0NmJiMzUwYmE3NjU4NDJiOGM3Y2NjNmFlNmMzN2ZjNzZlZmMyZDNlYjNkNzJiNWE0NzgzOTg0MDM1ZmQwNw',
        size: ['7.5', '8', '8.5'],
        stock: 5
    },
  ];
  
  export const getProductByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            res(filteredProducts);
        }, 3000);
    });
  };
  
  export default products;

  
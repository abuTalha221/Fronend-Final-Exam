import React from 'react';
import ProductCard from '../Components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: 'https://www.startech.com.bd/image/cache/catalog/headphone/havit/hv-h2262d/hv-h2262d-0020-500x500.jpg',
    price: 10.5,
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: 'https://www.startech.com.bd/image/cache/catalog/smart-watch/hoco/y27/y27-01-500x500.webp',
    price: 17.55,
  },
  {
    id: 3,
    name: 'Sneakers',
    image: 'https://img.drz.lazcdn.com/static/bd/p/6502ea35eac4cbdc199499e394609c5f.jpg_720x720q80.jpg',
    price: 8.99,
  },
  {
    id: 4,
    name: 'Backpack',
    image: 'https://www.startech.com.bd/image/cache/catalog/camera-accessories/camera-backpack/k-and-f-concept/kf13107/kf13107-01-500x500.jpg',
    price: 15.85,
  },
  {
    id: 5,
    name: 'Sunglasses',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GoneAMAhRGFsP5YnhmX5MJ4jfDHBVUU-0kvJTkMzt0RAM3_gMdHPQH4WasNre8R8pzU&usqp=CAU',
    price: 8.15,
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    image: 'https://img.drz.lazcdn.com/static/bd/p/0c88c0efb5a98f3977dd40c1a6f44672.jpg_720x720q80.jpg',
    price: 19.99,
  },
  {
    id: 7,
    name: 'Leather Wallet',
    image: 'https://i0.wp.com/www.pristineshop.com.bd/wp-content/uploads/2024/01/486604661_630616899886180_7844268054701833706_n.jpg?fit=1600%2C1600&ssl=1',
    price: 12.49,
  },
  {
    id: 8,
    name: 'Fitness Tracker',
    image: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:400,cw:2397,ch:1798,q:80,w:2397/ou3fEjEFi7gQAwXkzLfNPk.jpg',
    price: 22.99,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#ff5733] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e34e2e] transition cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default Products;

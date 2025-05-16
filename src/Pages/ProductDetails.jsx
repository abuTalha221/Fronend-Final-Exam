// ProductDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: 'https://www.startech.com.bd/image/cache/catalog/headphone/havit/hv-h2262d/hv-h2262d-0020-500x500.jpg',
    price: 10.5,
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    stockStatus: 'In Stock',
    productCode: 'WH-1001',
    brand: 'Havit',
    model: 'HV-H2262D',
    features: [
      'Bluetooth 5.0',
      'Noise cancellation',
      '20 hours battery life',
      'Comfortable fit'
    ],
    moreInfoLink: 'https://example.com/products/wh-1001'
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: 'https://www.startech.com.bd/image/cache/catalog/smart-watch/hoco/y27/y27-01-500x500.webp',
    price: 17.55,
    description: 'Stylish smartwatch with fitness tracking and customizable watch faces.',
    stockStatus: 'Limited Stock',
    productCode: 'SW-2002',
    brand: 'Hoco',
    model: 'Y27',
    features: [
      'Heart rate monitor',
      'Step counter',
      'Multiple watch faces',
      'Water resistant'
    ],
    moreInfoLink: 'https://example.com/products/sw-2002'
  },
  {
    id: 3,
    name: 'Sneakers',
    image: 'https://img.drz.lazcdn.com/static/bd/p/6502ea35eac4cbdc199499e394609c5f.jpg_720x720q80.jpg',
    price: 8.99,
    description: 'Comfortable and trendy sneakers for everyday wear.',
    stockStatus: 'Out of Stock',
    productCode: 'SN-3003',
    brand: 'Sporty',
    model: 'SPX-21',
    features: [
      'Breathable fabric',
      'Non-slip sole',
      'Lightweight',
      'Available in multiple colors'
    ],
    moreInfoLink: 'https://example.com/products/sn-3003'
  },
  {
    id: 4,
    name: 'Backpack',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-9904.jpg',
    price: 15.99,
    description: 'Durable backpack with multiple compartments and ergonomic design.',
    stockStatus: 'In Stock',
    productCode: 'BP-4004',
    brand: 'GearPro',
    model: 'GP-TravelX',
    features: [
      'Laptop compartment',
      'Water-resistant material',
      'Ergonomic design',
      'Multiple compartments'
    ],
    moreInfoLink: 'https://example.com/products/bp-4004'
  },
  {
    id: 5,
    name: 'Sunglasses',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GoneAMAhRGFsP5YnhmX5MJ4jfDHBVUU-0kvJTkMzt0RAM3_gMdHPQH4WasNre8R8pzU&usqp=CAU',
    price: 19.99,
    description: 'UV-protective sunglasses with a modern frame design.',
    stockStatus: 'In Stock',
    productCode: 'SG-5005',
    brand: 'SunStyle',
    model: 'SS-UltraUV',
    features: [
      'UV400 protection',
      'Lightweight frame',
      'Scratch-resistant lens',
      'Stylish design'
    ],
    moreInfoLink: 'https://example.com/products/sg-5005'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    image: 'https://img.drz.lazcdn.com/static/bd/p/0c88c0efb5a98f3977dd40c1a6f44672.jpg_720x720q80.jpg',
    price: 19.99,
    description: 'Portable Bluetooth speaker with rich sound and waterproof design.',
    stockStatus: 'In Stock',
    productCode: 'BS-6006',
    brand: 'BoomBox',
    model: 'BB-RockMini',
    features: [
      '360° sound',
      'IPX7 waterproof',
      '10-hour playtime',
      'Bluetooth 5.0'
    ],
    moreInfoLink: 'https://example.com/products/bs-6006'
  },
  {
    id: 7,
    name: 'Leather Wallet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GoneAMAhRGFsP5YnhmX5MJ4jfDHBVUU-0kvJTkMzt0RAM3_gMdHPQH4WasNre8R8pzU&usqp=CAU',
    price: 12.99,
    description: 'Classic leather wallet with multiple card slots and coin pocket.',
    stockStatus: 'In Stock',
    productCode: 'LW-7007',
    brand: 'WalletPro',
    model: 'WP-Classy',
    features: [
      'Genuine leather',
      'RFID protection',
      'Compact design',
      'Multiple compartments'
    ],
    moreInfoLink: 'https://example.com/products/lw-7007'
  },
  {
    id: 8,
    name: 'Sports Cap',
    image: 'https://img.drz.lazcdn.com/static/bd/p/0c88c0efb5a98f3977dd40c1a6f44672.jpg_720x720q80.jpg',
    price: 9.99,
    description: 'Lightweight and breathable sports cap for outdoor activities.',
    stockStatus: 'Limited Stock',
    productCode: 'SC-8008',
    brand: 'CapZone',
    model: 'CZ-AirFit',
    features: [
      'Breathable mesh',
      'Adjustable strap',
      'Sweat-wicking band',
      'UV protection'
    ],
    moreInfoLink: 'https://example.com/products/sc-8008'
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [showMore, setShowMore] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-[#ff5733] hover:underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-2">${product.price}</p>
            <p className="mb-2"><strong>Stock Status:</strong> <span className={product.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}>{product.stockStatus}</span></p>
            <p className="mb-2"><strong>Product Code:</strong> {product.productCode}</p>
            <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>
            <p className="mb-2"><strong>Model:</strong> {product.model}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-4">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mb-4 text-[#ff5733] font-semibold hover:underline"
            >
              {showMore ? 'Hide More Info' : 'View More Info'}
            </button>
            {showMore && (
              <div className="bg-gray-100 p-4 rounded">
                <p>
                  For more details, visit the{' '}
                  <a
                    href={product.moreInfoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5733] hover:underline"
                  >
                    product page
                  </a>.
                </p>
              </div>
            )}
            <button className="bg-[#ff5733] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e34e2e] transition mt-4">
              Add to Cart
            </button>
            <Link to="/products" className="mt-4 inline-block text-[#ff5733] hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
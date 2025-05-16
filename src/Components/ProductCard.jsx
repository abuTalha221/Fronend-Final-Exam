import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link to={`/products/${product.id}`} className="block w-full rounded mb-4 overflow-hidden aspect-w-4 aspect-h-3 md:aspect-h-4 lg:aspect-h-3">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </Link>

            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link
                to={`/products/${product.id}`}
                className="text-[#ff5733] font-semibold hover:underline"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;

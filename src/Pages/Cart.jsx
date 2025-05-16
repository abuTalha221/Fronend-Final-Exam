import React, { useState } from 'react';

const Cart = () => {
  // Sample cart data (replace with your real cart data / context / redux)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic T-Shirt',
      price: 12.55,
      quantity: 2,
      image: 'https://img.drz.lazcdn.com/static/bd/p/327173d9aec9a7c9f240f17d8ced15b7.jpg_720x720q80.jpg',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 19.99,
      quantity: 1,
      image: 'https://www.gadstyle.com/wp-content/uploads/2024/02/awei-a360bl-wireless-bluetooth-headphones-1.webp',
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handlers for quantity update (demo only)
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3">Product</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Price</th>
                <th className="py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 rounded px-2 hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 rounded px-2 hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6">
            <div className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              className="bg-[#ff5733] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e14a28] transition"
              onClick={() => alert('Proceeding to checkout!')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

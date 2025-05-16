import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import CategorySection from '../Components/CategorySection';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-10">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-10 mb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Shoppy!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover amazing products at unbeatable prices.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#ff5733] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e34e2e] transition">
            Shop Now
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://cdn.strategyonline.ca/wp/wp-content/uploads/2020/05/onlineshoppingillustrated-e1684161243399.png"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Categories Section */}
      <section className="mb-16">
        <CategorySection/>
      </section>

      {/* Featured Products Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
        {/* You can map through your product data here */}
        <div className="text-center text-xl font-semibold text-gray-600 flex justify-center items-center gap-1">
          <span>Coming Soon</span>
          <span className="animate-bounce delay-0">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>

      </section>

      {/* Customer Benefits Section */}
      <section className="bg-orange-50 rounded-xl p-10">
        <h2 className="text-2xl font-bold text-center mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Truck className="mx-auto mb-3 text-[#ff5733]" size={36} />
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered to your doorstep quickly and safely.</p>
          </div>
          <div>
            <ShieldCheck className="mx-auto mb-3 text-[#ff5733]" size={36} />
            <h3 className="font-semibold text-lg">Secure Payments</h3>
            <p className="text-gray-600">All transactions are encrypted and safe with us.</p>
          </div>
          <div>
            <ShoppingBag className="mx-auto mb-3 text-[#ff5733]" size={36} />
            <h3 className="font-semibold text-lg">Quality Products</h3>
            <p className="text-gray-600">Only the best and most trusted brands on our platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

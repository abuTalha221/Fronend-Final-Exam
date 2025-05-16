import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { FiShoppingCart } from 'react-icons/fi';

const Menu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Products', link: '/products' },
  { id: 3, title: 'Contact', link: '/contact' },
  { id: 4, title: 'About Us', link: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-orange-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#ff5733]">
          <Link to="/">Shoppy</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="text-gray-800 hover:text-[#ff5733] hover:underline transition"
              >
                {item.title}
              </Link>
            </li>
          ))}

          {/* Cart Icon */}
          <li>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-[#ff5733] transition flex items-center"
              aria-label="View Cart"
            >
              <FiShoppingCart size={24} />
              <span className="ml-1 font-medium">Cart</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Icon for mobile */}
          <Link
            to="/cart"
            className="text-gray-800 hover:text-[#ff5733]"
            aria-label="View Cart"
          >
            <FiShoppingCart size={24} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="block text-gray-800 hover:text-[#ff5733] hover:underline"
                  onClick={() => setMenuOpen(false)} // close on click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

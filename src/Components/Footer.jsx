import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Shoppy</h2>
                    <p className="text-sm text-gray-400">
                        Elevating your shopping experience with premium products.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline text-gray-300">Home</Link></li>
                        <li><Link to="/products" className="hover:underline text-gray-300">Products</Link></li>
                        <li><Link to="/about" className="hover:underline text-gray-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:underline text-gray-300">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} className="hover:text-blue-500" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} className="hover:text-blue-400" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="hover:text-pink-500" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="hover:text-blue-600" /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Shoppy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

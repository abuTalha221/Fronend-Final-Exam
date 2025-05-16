import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Company Introduction */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Welcome to our e-commerce platform where quality meets affordability. Our mission is to provide top-notch products with exceptional service across Bangladesh. We believe in building trust, ensuring satisfaction, and bringing a smile to every customer's face.
        </p>
      </section>

      {/* Customer Reviews */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <p className="text-gray-700 italic mb-4">"{review.message}"</p>
              <div className="text-right">
                <span className="text-[#ff5733] font-semibold">{review.name}</span><br />
                <span className="text-sm text-gray-500">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample Reviews (Bangladeshi names)
const reviews = [
  {
    name: 'Tanvir Hossain',
    location: 'Dhaka, Bangladesh',
    message: 'Excellent service! Fast delivery and quality product. Will definitely buy again.',
  },
  {
    name: 'Ayesha Rahman',
    location: 'Chittagong, Bangladesh',
    message: 'Loved the packaging and support. Very helpful and responsive team!',
  },
  {
    name: 'Md. Rakib Hasan',
    location: 'Sylhet, Bangladesh',
    message: 'Best online shopping experience I’ve had so far. Trustworthy and professional.',
  },
  {
    name: 'Nasima Akter',
    location: 'Rajshahi, Bangladesh',
    message: 'Impressed by the variety and quality. Highly recommended!',
  },
  {
    name: 'Farzana Sultana',
    location: 'Khulna, Bangladesh',
    message: 'Great customer support and delivery on time. Keep it up!',
  },
  {
    name: 'Shakil Ahmed',
    location: 'Barisal, Bangladesh',
    message: 'Good value for money. Product matches the description perfectly.',
  },
];

export default About;

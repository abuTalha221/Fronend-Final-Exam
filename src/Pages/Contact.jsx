import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Show success alert
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Have questions, feedback, or need support? Fill out the form below or reach out to us directly — we’d love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5733]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#ff5733] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#e14a28] transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Office</h2>
            <p className="text-gray-600">
              123 Main Street<br />
              Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600">support@yourbrand.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">+880 123-456-7890</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Hours</h2>
            <p className="text-gray-600">Sun - Thu: 9am – 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

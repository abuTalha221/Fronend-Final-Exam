import { FaTshirt, FaLaptop, FaMobileAlt, FaShoePrints, FaCouch } from 'react-icons/fa';

const categories = [
  { name: 'Fashion', icon: <FaTshirt size={48} className="text-[#ff5733]" /> },
  { name: 'Electronics', icon: <FaLaptop size={48} className="text-[#ff5733]" /> },
  { name: 'Mobiles', icon: <FaMobileAlt size={48} className="text-[#ff5733]" /> },
  { name: 'Shoes', icon: <FaShoePrints size={48} className="text-[#ff5733]" /> },
  { name: 'Furniture', icon: <FaCouch size={48} className="text-[#ff5733]" /> },
];

const CategorySection = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow hover:shadow-md transition-transform hover:scale-110"
          >
            {category.icon}
            <p className="mt-4 font-semibold text-lg md:text-xl text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

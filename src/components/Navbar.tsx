
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">SetDesks</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-orange-500 transition">Home</Link>
            <Link to="/Desk-info" className="text-gray-800 hover:text-orange-500 transition">Desk Info</Link>
            <Link to="/desk-inspirations" className="text-gray-800 hover:text-orange-500 transition">Desk Inspirations</Link>
            <Link to="/categories" className="text-gray-800 hover:text-orange-500 transition">Categories</Link>
            <Link to="/community" className="text-gray-800 hover:text-orange-500 transition">Community</Link>
          </div>
          <div>
            <Link to="/Desk-info">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

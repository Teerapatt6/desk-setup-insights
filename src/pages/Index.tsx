import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import deskImages from "../assets/DeskImages.json"; 
import { useState, useEffect } from "react";
import { CircleCheck } from "lucide-react";

export type PageType = "desk-details" | "preferences" | "suggestions";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(i => (i + 1) % deskImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [deskImages.length]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-400 to-orange-600 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left"> 
            <h1 className="text-5xl font-extrabold mb-4">
              SetDesks
            </h1>
            <p className="mb-6 max-w-lg">
              Create inspiring desk setups that boost your productivity & comfort.
            </p>
            <div className="space-x-4">
              <Link to="/Desk-info">
                <button
                  className="
                    bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg
                    transition duration-300 transform
                    hover:scale-105 hover:shadow-xl hover:bg-gray-100
                  "
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-lg shadow-xl">
            <div className="w-full h-80 relative">
              <img
                key={currentIndex}
                src={deskImages[currentIndex].url}
                alt={`Desk Setup ${deskImages[currentIndex].alt}`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1500 ease-in-out"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.add("opacity-100");
                }}
              />
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 text-gray-50"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0 0h1200v120L0 0z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Design Categories */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Design
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Gaming", color: "red-500" },
            { title: "Minimal", color: "green-500" },
            { title: "Budget", color: "yellow-500" },
          ].map(({ title, color }) => (
            <div
              key={title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition p-0"
            >
              <img
                src="/api/placeholder/400/200"
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <span className={`w-3 h-3 rounded-full bg-${color}`}></span>
                </div>
                <Link
                  to={`/category/${title.toLowerCase()}`}
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services & Features - Updated based on functional requirements */}
      <section className="bg-gradient-to-tr from-gray-100 to-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Services & Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Desk Accessories Recommendation System",
                description: "Get personalized recommendations for desk accessories based on your available space and budget.",
                icon: "🎯"
              },
              {
                title: "Desk Style Test",
                description: "Take our interactive test to discover the perfect desk style that matches your preferences and needs.",
                icon: "✨"
              },
              {
                title: "Desk Organization Categories",
                description: "Browse through our well-organized categories to find the perfect setup for your workspace.",
                icon: "📋"
              },
              {
                title: "Community Desk Ideas",
                description: "Explore desk ideas and setups shared by other users to get inspiration for your own workspace.",
                icon: "👥"
              },
              {
                title: "Price & Quality Comparison",
                description: "Compare prices and quality of desk accessories with direct purchase links to make informed decisions.",
                icon: "💰"
              },
              {
                title: "Customized Recommendations",
                description: "Receive fully personalized desk setup recommendations based on your inputs and preferences.",
                icon: "🔍"
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl p-8 text-center shadow hover:shadow-lg transition"
              >
                <div className="mb-4 text-4xl">{svc.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-600">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            How We're Different
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-4 px-2 font-bold text-lg text-gray-800">Features</th>
                  <th className="py-4 px-4 text-center font-bold text-lg text-blue-600">Other Websites</th>
                  <th className="py-4 px-4 text-center font-bold text-lg text-amber-500">Social Media</th>
                  <th className="py-4 px-4 text-center font-bold text-lg text-orange-600">Our Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 font-medium">Personalized recommendations based on user input</td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 font-medium">Desk accessories based on available space</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 font-medium">Categorized desk organization system</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 font-medium">Recommendations based on budget</td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 font-medium">Price and quality comparisons</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-medium">Community-shared desk ideas</td>
                  <td className="py-4 px-4 text-center">❌</td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={24} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 shadow">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-orange-800">User-Driven Recommendations</h3>
                <p className="text-gray-700">Unlike other platforms, our recommendations are fully customized based on your inputs</p>
              </div>
              <Link to="/Desk-info">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;


import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import deskImages from "../assets/DeskImages.json"; 
import { useState, useEffect } from "react";
import { CircleCheck, ArrowRight, Sparkles, Target, Users, DollarSign, Search, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in"> 
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Transform Your Workspace</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Set<span className="text-yellow-200">Desks</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg opacity-90 leading-relaxed">
              Create inspiring desk setups that boost your productivity & comfort with AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Desk-info">
                <button className="group bg-white text-orange-600 font-bold px-8 py-4 rounded-xl shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce">
                AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                100% Free
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 text-gray-50"
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
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Choose Your Design Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect desk setup that matches your personality and workflow
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { 
              title: "Gaming", 
              color: "red-500", 
              description: "RGB lighting, dual monitors, and gaming peripherals",
              icon: "🎮"
            },
            { 
              title: "Minimal", 
              color: "green-500", 
              description: "Clean lines, essential items, and clutter-free design",
              icon: "🌿"
            },
            { 
              title: "Budget", 
              color: "yellow-500", 
              description: "Affordable solutions without compromising quality",
              icon: "💰"
            },
          ].map(({ title, color, description, icon }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl">{icon}</div>
                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full bg-${color} animate-pulse`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Link
                  to={`/category/${title.toLowerCase()}`}
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services & Features */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Powerful Features for Your Perfect Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to create the ideal workspace
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                title: "AI-Powered Recommendations",
                description: "Get personalized desk accessory suggestions based on your space, budget, and preferences.",
                icon: <Target className="w-8 h-8" />,
                color: "orange"
              },
              {
                title: "Interactive Style Quiz",
                description: "Take our smart quiz to discover the perfect desk style that matches your workflow and personality.",
                icon: <Sparkles className="w-8 h-8" />,
                color: "purple"
              },
              {
                title: "Organized Categories",
                description: "Browse through carefully curated categories to find exactly what you need for your setup.",
                icon: <Search className="w-8 h-8" />,
                color: "blue"
              },
              {
                title: "Community Inspiration",
                description: "Explore real desk setups shared by our community and get inspired by creative ideas.",
                icon: <Users className="w-8 h-8" />,
                color: "green"
              },
              {
                title: "Smart Price Comparison",
                description: "Compare prices and quality across multiple retailers with direct purchase links.",
                icon: <DollarSign className="w-8 h-8" />,
                color: "yellow"
              },
              {
                title: "Instant Results",
                description: "Get customized recommendations instantly based on your specific inputs and requirements.",
                icon: <Zap className="w-8 h-8" />,
                color: "red"
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose SetDesks?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to other solutions in the market
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 overflow-x-auto border border-gray-100">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-6 px-4 font-bold text-xl text-gray-800">Features</th>
                  <th className="py-6 px-6 text-center font-bold text-xl text-blue-600">Other Websites</th>
                  <th className="py-6 px-6 text-center font-bold text-xl text-purple-600">Social Media</th>
                  <th className="py-6 px-6 text-center font-bold text-xl text-orange-600">SetDesks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Personalized recommendations based on user input</td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Space-optimized accessory suggestions</td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Comprehensive categorization system</td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Budget-conscious recommendations</td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Smart price and quality comparisons</td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-4 font-semibold text-gray-800">Community-driven inspiration</td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-3xl">❌</span>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="py-6 px-6 text-center">
                    <CircleCheck className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-100 rounded-2xl p-8 shadow-lg border border-orange-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-orange-800 mb-2">Ready to Transform Your Workspace?</h3>
                <p className="text-gray-700 text-lg">Join thousands of users who've created their perfect desk setup with our personalized recommendations.</p>
              </div>
              <Link to="/Desk-info">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Search, Heart, Eye, Monitor, Sparkles, Palette, Briefcase, Home } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const DeskInspirations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'gaming',
      name: 'Gaming',
      tagline: 'Performance-focused gaming stations',
      icon: <Monitor className="w-5 h-5" />,
      count: 34
    },
    {
      id: 'minimal',
      name: 'Minimal',
      tagline: 'Clean and clutter-free design',
      icon: <Sparkles className="w-5 h-5" />,
      count: 28
    },
    {
      id: 'creative',
      name: 'Creative & Cozy',
      tagline: 'Inspiring and personalized spaces',
      icon: <Palette className="w-5 h-5" />,
      count: 22
    },
    {
      id: 'functional',
      name: 'Functional',
      tagline: 'Highly practical workspaces',
      icon: <Briefcase className="w-5 h-5" />,
      count: 19
    },
    {
      id: 'modern',
      name: 'Modern Office',
      tagline: 'Sleek and professional setups',
      icon: <Home className="w-5 h-5" />,
      count: 31
    }
  ];

  const deskSetups = [
    {
      id: 1,
      title: 'RGB Gaming Paradise',
      category: 'gaming',
      likes: 342,
      views: 1240,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Scandinavian Minimal',
      category: 'minimal',
      likes: 287,
      views: 950,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Artist Creative Haven',
      category: 'creative',
      likes: 195,
      views: 780,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Executive Corner Office',
      category: 'modern',
      likes: 156,
      views: 620,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Productive Home Office',
      category: 'functional',
      likes: 203,
      views: 850,
      image: 'https://images.unsplash.com/photo-1586269113413-a9f97e486a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Clean Workspace',
      category: 'minimal',
      likes: 312,
      views: 1100,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredSetups = selectedCategory === 'all' 
    ? deskSetups 
    : deskSetups.filter(setup => setup.category === selectedCategory);

  const filteredBySearch = filteredSetups.filter(setup =>
    setup.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse Desk Setups
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Explore our curated collection of desk setups categorized by style and purpose. 
              Find inspiration for your perfect workspace.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search desk setups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="rounded-full"
            >
              All Setups
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className="rounded-full flex items-center gap-2"
              >
                {category.icon}
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.tagline}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {category.count}
                    </span>
                    <Button size="sm" variant="outline">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desk Setups Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'all' ? 'All Setups' : 
               `${categories.find(c => c.id === selectedCategory)?.name} Setups`}
            </h2>
            <span className="text-gray-600">
              {filteredBySearch.length} setups found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBySearch.map((setup) => (
              <Card key={setup.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={setup.image}
                    alt={setup.title}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2">
                      {categories.find(c => c.id === setup.category)?.name}
                    </Badge>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {setup.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{setup.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{setup.views}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700">
                      View Setup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeskInspirations;

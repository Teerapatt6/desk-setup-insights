
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check } from 'lucide-react';
import { Preferences as PreferencesType, PageType } from "../api/setup";
import { toast } from "@/components/ui/sonner";

interface PreferencesProps {
  showPage: (page: PageType) => void;
  updatePreferences: (preferences: PreferencesType) => void;
  currentData: PreferencesType;
}

const Preferences = ({ showPage, updatePreferences, currentData }: PreferencesProps) => {
  const [selectedStyle, setSelectedStyle] = useState(currentData.style);

  const styles = [
    { 
      id: 'minimal', 
      name: 'Minimal', 
      description: 'Clean and simple design with focus on essentials',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center'
    },
    { 
      id: 'modern', 
      name: 'Modern', 
      description: 'Contemporary and sleek with latest trends',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center'
    },
    { 
      id: 'gaming', 
      name: 'Gaming', 
      description: 'RGB lighting and performance focused setup',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=200&fit=crop&crop=center'
    },
    { 
      id: 'cozy', 
      name: 'Cozy', 
      description: 'Warm and comfortable workspace atmosphere',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center'
    },
  ];

  const handleStyleClick = (styleId: string) => {
    if (selectedStyle === styleId) {
      // Deselect if clicking the same style
      setSelectedStyle('');
      updatePreferences({ style: '' });
    } else {
      // Select new style
      setSelectedStyle(styleId);
      updatePreferences({ style: styleId });
    }
  };

  const handleNext = () => {
    if (!selectedStyle) {
      toast.error("Please select a desk style to continue");
      return;
    }
    showPage("summary");
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-50 to-orange-50 p-6">
      <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-lg"></div>
        
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
            Choose Your Desk Style
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Select a style that matches your ideal workspace aesthetic
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedStyle === style.id
                    ? 'ring-2 ring-orange-500 shadow-lg bg-orange-50'
                    : 'hover:bg-gray-50 shadow-md'
                }`}
                onClick={() => handleStyleClick(style.id)}
              >
                <div className="relative">
                  {/* Large prominent image */}
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={style.image}
                      alt={`${style.name} desk style`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center';
                      }}
                    />
                  </div>
                  
                  {/* Selection indicator */}
                  {selectedStyle === style.id && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {style.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              onClick={() => showPage("desk-details")}
              className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-gray-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              disabled={!selectedStyle}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Summary
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Preferences;

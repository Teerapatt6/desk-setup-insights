
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Preferences as PreferencesType, PageType } from "../api/setup";
import { useToast } from "@/hooks/use-toast";

interface PreferencesProps {
  showPage: (page: PageType) => void;
  updatePreferences: (preferences: PreferencesType) => void;
  currentData: PreferencesType;
}

interface StyleOption {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Preferences = ({ showPage, updatePreferences, currentData }: PreferencesProps) => {
  const [selectedStyle, setSelectedStyle] = useState(currentData.style || "");
  const { toast } = useToast();

  const styleOptions: StyleOption[] = [
    {
      id: "minimal",
      name: "Minimal",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center",
      description: "Simple, spacious, clean-looking workspace"
    },
    {
      id: "gaming",
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=200&fit=crop&crop=center",
      description: "Features RGB lighting and gaming equipment"
    },
    {
      id: "cute",
      name: "Cute",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
      description: "Warm, adorable, with lots of decorative items"
    },
    {
      id: "functional",
      name: "Functional",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center",
      description: "Focuses on versatile usage and productivity"
    },
    {
      id: "modern-office",
      name: "Modern Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center",
      description: "Professional workspace for document writing and work tasks"
    }
  ];

  useEffect(() => {
    if (currentData?.style) {
      setSelectedStyle(currentData.style);
    }
  }, [currentData]);

  useEffect(() => {
    updatePreferences({ style: selectedStyle });
  }, [selectedStyle, updatePreferences]);

  const handleStyleSelection = (styleId: string) => {
    if (selectedStyle === styleId) {
      setSelectedStyle("");
    } else {
      setSelectedStyle(styleId);
    }
  };

  const handleNext = () => {
    if (!selectedStyle) {
      toast({
        title: "Selection Required",
        description: "Please select a desk style to continue",
        variant: "destructive",
      });
      return;
    }
    updatePreferences({ style: selectedStyle });
    showPage("summary");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Choose Your Desk Style
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Select the style that best matches your ideal workspace aesthetic
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {styleOptions.map((style) => (
                <Card
                  key={style.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    selectedStyle === style.id
                      ? 'ring-2 ring-orange-500 shadow-lg bg-orange-50'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleStyleSelection(style.id)}
                >
                  <div className="relative">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src={style.image}
                        alt={`${style.name} desk style`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='0.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    
                    {selectedStyle === style.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.name}</h3>
                    <p className="text-gray-600 text-sm">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => showPage("desk-details")}
                className="flex items-center gap-2 px-6 py-3 text-base"
              >
                <ArrowLeft size={20} />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!selectedStyle}
                className="flex items-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Summary
                <ArrowRight size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Preferences;

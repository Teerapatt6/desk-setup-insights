
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Preferences as PreferencesType, PageType } from "../api/setup";

interface PreferencesProps {
  showPage: (page: PageType) => void;
  updatePreferences: (preferences: PreferencesType) => void;
  currentData: PreferencesType;
}

const Preferences = ({ showPage, updatePreferences, currentData }: PreferencesProps) => {
  const [selectedStyle, setSelectedStyle] = useState(currentData.style);

  const styles = [
    { id: 'minimal', name: 'Minimal', description: 'Clean and simple design' },
    { id: 'modern', name: 'Modern', description: 'Contemporary and sleek' },
    { id: 'gaming', name: 'Gaming', description: 'RGB and performance focused' },
    { id: 'cozy', name: 'Cozy', description: 'Warm and comfortable' },
  ];

  const handleNext = () => {
    updatePreferences({ style: selectedStyle });
    showPage("summary");
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Style Preferences</CardTitle>
          <CardDescription>
            Choose your preferred desk style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={`cursor-pointer transition-colors ${
                  selectedStyle === style.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold">{style.name}</h3>
                  <p className="text-sm text-gray-600">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => showPage("desk-details")}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={!selectedStyle}>
              Next: Summary
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Preferences;

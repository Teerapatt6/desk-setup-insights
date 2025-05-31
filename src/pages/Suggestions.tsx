
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeskSetupData, PageType } from "../api/setup";

interface SuggestionsProps {
  showPage: (page: PageType) => void;
  deskSetupData: DeskSetupData;
  setupId: string;
}

const Suggestions = ({ showPage, deskSetupData, setupId }: SuggestionsProps) => {
  const suggestions = [
    {
      id: 1,
      name: 'Monitor Stand',
      description: 'Ergonomic monitor stand for better posture',
      price: '$29.99'
    },
    {
      id: 2,
      name: 'LED Strip Lights',
      description: 'Ambient lighting for your workspace',
      price: '$19.99'
    },
    {
      id: 3,
      name: 'Desk Organizer',
      description: 'Keep your workspace tidy and organized',
      price: '$15.99'
    }
  ];

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Personalized Suggestions</CardTitle>
          <CardDescription>
            Based on your {deskSetupData.preferences.style} style preference and desk dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((suggestion) => (
              <Card key={suggestion.id}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{suggestion.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                  <p className="font-bold text-orange-600">{suggestion.price}</p>
                  <Button className="w-full mt-2" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline" onClick={() => showPage("summary")}>
              Back to Summary
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Suggestions;

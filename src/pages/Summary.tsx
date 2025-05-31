
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeskSetupData, PageType } from "../api/setup";

interface SummaryProps {
  showPage: (page: PageType) => void;
  deskSetupData: DeskSetupData;
  onDataSaved: (setupName: string, setupId: string) => void;
}

const Summary = ({ showPage, deskSetupData, onDataSaved }: SummaryProps) => {
  const handleSave = () => {
    // Simulate saving data
    const setupId = 'setup_' + Date.now();
    const setupName = 'My Desk Setup';
    
    // Call the callback to indicate data has been saved
    onDataSaved(setupName, setupId);
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Review & Save</CardTitle>
          <CardDescription>
            Review your desk setup configuration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Desk Dimensions</h3>
              <p>Width: {deskSetupData.desk_details.width}cm</p>
              <p>Length: {deskSetupData.desk_details.length}cm</p>
              <p>Free Field Width: {deskSetupData.desk_details.freeFieldWidth}cm</p>
              <p>Free Field Length: {deskSetupData.desk_details.freeFieldLength}cm</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Style Preference</h3>
              <p>{deskSetupData.preferences.style}</p>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => showPage("preferences")}>
              Back
            </Button>
            <Button onClick={handleSave}>
              Save & Get Suggestions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;

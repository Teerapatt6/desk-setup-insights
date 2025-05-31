
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeskDetail, PageType } from "../api/setup";

interface DeskDetailsProps {
  showPage: (page: PageType) => void;
  updateDeskDetails: (details: DeskDetail) => void;
  currentData: DeskDetail;
}

const DeskDetails = ({ showPage, updateDeskDetails, currentData }: DeskDetailsProps) => {
  const [formData, setFormData] = useState<DeskDetail>(currentData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateDeskDetails(formData);
    showPage("preferences");
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Desk Details</CardTitle>
          <CardDescription>
            Enter your desk dimensions and current setup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="width">Width (cm)</Label>
                <Input
                  id="width"
                  type="number"
                  value={formData.width}
                  onChange={(e) => setFormData(prev => ({ ...prev, width: Number(e.target.value) }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="length">Length (cm)</Label>
                <Input
                  id="length"
                  type="number"
                  value={formData.length}
                  onChange={(e) => setFormData(prev => ({ ...prev, length: Number(e.target.value) }))}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="freeFieldWidth">Free Field Width (cm)</Label>
                <Input
                  id="freeFieldWidth"
                  type="number"
                  value={formData.freeFieldWidth}
                  onChange={(e) => setFormData(prev => ({ ...prev, freeFieldWidth: Number(e.target.value) }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="freeFieldLength">Free Field Length (cm)</Label>
                <Input
                  id="freeFieldLength"
                  type="number"
                  value={formData.freeFieldLength}
                  onChange={(e) => setFormData(prev => ({ ...prev, freeFieldLength: Number(e.target.value) }))}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit">Next: Preferences</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeskDetails;

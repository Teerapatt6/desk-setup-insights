
import { useState, useEffect } from 'react';
import { ChevronRight, Home, Settings, BarChart3, Lightbulb, Check, Clock, User } from 'lucide-react';
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DeskDetails from "./DeskDetails";
import Preferences from "./Preferences";
import Summary from "./Summary";
import Suggestions from "./Suggestions";
import { DeskDetail, Preferences as PreferencesType, DeskSetupData, PageType } from "../api/setup";

const DeskInfo = () => {
  const [activePage, setActivePage] = useState<PageType>("desk-details");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [savedSetupId, setSavedSetupId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  
  const [deskSetupData, setDeskSetupData] = useState<DeskSetupData>({
    desk_details: {
      width: 0,
      length: 0,
      freeFieldWidth: 0,
      freeFieldLength: 0,
      items: [],
    },
    preferences: {
      style: "",
    },
  });

  const steps = [
    { 
      id: "desk-details", 
      title: "Desk Details", 
      description: "Enter your desk dimensions and current items",
      icon: Home,
      status: deskSetupData.desk_details.width > 0 ? "completed" : activePage === "desk-details" ? "active" : "pending"
    },
    { 
      id: "preferences", 
      title: "Style Preferences", 
      description: "Choose your preferred desk style and theme",
      icon: Settings,
      status: deskSetupData.preferences.style ? "completed" : activePage === "preferences" ? "active" : "pending"
    },
    { 
      id: "summary", 
      title: "Review & Save", 
      description: "Review your setup and save configuration",
      icon: BarChart3,
      status: isDataSaved ? "completed" : activePage === "summary" ? "active" : "pending"
    },
    { 
      id: "suggestions", 
      title: "Get Suggestions", 
      description: "Discover personalized desk improvement ideas",
      icon: Lightbulb,
      status: isDataSaved ? (activePage === "suggestions" ? "active" : "pending") : "locked"
    },
  ];

  useEffect(() => {
    setError(null);
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const showPage = (page: PageType) => {
    if (page === "suggestions" && !isDataSaved) {
      setError("Please save your desk setup first before viewing suggestions");
      return;
    }

    setError(null);
    setIsLoaded(false);
    
    setTimeout(() => {
      setActivePage(page);
      setIsLoaded(true);
    }, 200);
  };

  const updateDeskDetails = (deskDetails: DeskDetail) => {
    setDeskSetupData(prev => ({ ...prev, desk_details: deskDetails }));
  };

  const updatePreferences = (preferences: PreferencesType) => {
    setDeskSetupData(prev => ({ ...prev, preferences }));
  };

  const handleDataSaved = (setupName: string, setupId: string) => {
    setIsDataSaved(true);
    setSavedSetupId(setupId);
    setError(null);
    setDeskSetupData(prev => ({ ...prev, id: setupId, name: setupName }));
    setActivePage("suggestions");
    setIsLoaded(true);
  };

  const getStepIcon = (step: typeof steps[0]) => {
    const Icon = step.icon;
    if (step.status === "completed") {
      return <Check className="w-5 h-5 text-green-600" />;
    }
    if (step.status === "active") {
      return <Icon className="w-5 h-5 text-orange-600" />;
    }
    if (step.status === "locked") {
      return <Icon className="w-5 h-5 text-gray-300" />;
    }
    return <Icon className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Design Your Perfect Desk Setup
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our step-by-step process to create a personalized workspace that matches your style and needs.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => showPage(step.id as PageType)}
                  disabled={step.status === "locked"}
                  className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                    step.status === "active" 
                      ? "bg-orange-100 shadow-lg scale-105" 
                      : step.status === "completed"
                      ? "bg-green-50 hover:bg-green-100"
                      : step.status === "locked"
                      ? "opacity-50 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    step.status === "active" 
                      ? "bg-orange-500 text-white" 
                      : step.status === "completed"
                      ? "bg-green-500 text-white"
                      : step.status === "locked"
                      ? "bg-gray-200"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}>
                    {getStepIcon(step)}
                  </div>
                  <h3 className="font-semibold text-sm text-center">{step.title}</h3>
                  <p className="text-xs text-gray-500 text-center max-w-24">{step.description}</p>
                </button>
                
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block w-6 h-6 text-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar for larger screens */}
          <div className="hidden lg:block w-80">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Progress Overview
                </CardTitle>
                <CardDescription>Track your setup progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      step.status === "active" ? "bg-orange-50 border border-orange-200" : ""
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed" ? "bg-green-100" :
                      step.status === "active" ? "bg-orange-100" : "bg-gray-100"
                    }`}>
                      {getStepIcon(step)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className={`transition-all duration-300 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-lg"></div>
                
                <div className="p-6 lg:p-8">
                  {activePage === "desk-details" && (
                    <DeskDetails
                      showPage={showPage}
                      updateDeskDetails={updateDeskDetails}
                      currentData={deskSetupData.desk_details}
                    />
                  )}
                  {activePage === "preferences" && (
                    <Preferences
                      showPage={showPage}
                      updatePreferences={updatePreferences}
                      currentData={deskSetupData.preferences}
                    />
                  )}
                  {activePage === "summary" && (
                    <Summary
                      showPage={showPage}
                      deskSetupData={deskSetupData}
                      onDataSaved={handleDataSaved}
                    />
                  )}
                  {activePage === "suggestions" && (isDataSaved || savedSetupId) && (
                    <Suggestions
                      showPage={showPage}
                      deskSetupData={deskSetupData}
                      setupId={savedSetupId}
                    />
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskInfo;

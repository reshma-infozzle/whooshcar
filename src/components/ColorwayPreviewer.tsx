import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const colorways = [{
  name: "Current Yellow",
  file: null,
  primary: "50 85% 65%",
  secondary: "160 60% 80%"
}, {
  name: "Ocean Blue",
  file: "ocean-blue.css",
  primary: "210 85% 65%",
  secondary: "195 60% 80%"
}, {
  name: "Forest Green",
  file: "forest-green.css",
  primary: "120 85% 45%",
  secondary: "140 60% 70%"
}, {
  name: "Sunset Orange",
  file: "sunset-orange.css",
  primary: "20 85% 65%",
  secondary: "40 60% 80%"
}, {
  name: "Royal Purple",
  file: "royal-purple.css",
  primary: "270 85% 65%",
  secondary: "290 60% 80%"
}, {
  name: "Cherry Red",
  file: "cherry-red.css",
  primary: "0 85% 65%",
  secondary: "340 60% 80%"
}];
export const ColorwayPreviewer = () => {
  const [selectedColorway, setSelectedColorway] = useState(colorways[0]);
  const applyColorway = (colorway: typeof colorways[0]) => {
    // Remove any existing colorway stylesheets
    const existingLinks = document.querySelectorAll('link[data-colorway]');
    existingLinks.forEach(link => link.remove());
    if (colorway.file) {
      // Apply new colorway
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `/src/colorway-previews/${colorway.file}`;
      link.setAttribute('data-colorway', 'true');
      document.head.appendChild(link);
    }
    setSelectedColorway(colorway);
  };
  // Reset any existing colorways on component mount
  useState(() => {
    const existingLinks = document.querySelectorAll('link[data-colorway]');
    existingLinks.forEach(link => link.remove());
  });

  return <div className="fixed bottom-4 right-4 z-50">
      <Card className="p-3 border-2 border-black shadow-comic bg-white">
        <div className="text-xs font-medium mb-2 text-foreground">Color Theme</div>
        <div className="flex flex-col gap-1">
          {colorways.map((colorway) => (
            <Button
              key={colorway.name}
              variant={selectedColorway.name === colorway.name ? "default" : "outline"}
              size="sm"
              onClick={() => applyColorway(colorway)}
              className="justify-start text-xs h-7 border-black"
            >
              <div 
                className="w-3 h-3 rounded-full border border-black mr-2"
                style={{ backgroundColor: `hsl(${colorway.primary})` }}
              />
              {colorway.name}
            </Button>
          ))}
        </div>
      </Card>
    </div>;
};
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get current visitor count from localStorage
    const storedVisitors = localStorage.getItem("visitorCount");
    let currentCount = storedVisitors ? parseInt(storedVisitors, 10) : 0;
    
    // Increment the count
    currentCount += 1;
    
    // Save back to localStorage
    localStorage.setItem("visitorCount", currentCount.toString());
    
    // Update state
    setVisitors(currentCount);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg glass-card border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
        <Eye className="h-4 w-4 text-primary" />
        <div className="flex flex-col items-end">
          <p className="text-xs text-muted-foreground">Visitors</p>
          <p className="text-lg font-semibold text-gradient">{visitors.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;

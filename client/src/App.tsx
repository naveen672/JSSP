import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from 'react';
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";

// Home and Main pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import Admissions from "@/pages/Admissions";
import CampusLife from "@/pages/CampusLife";
import Contact from "@/pages/Contact";

// Home section pages
import AboutJSSMVP from "@/pages/AboutJSSMVP";
import VisionMission from "@/pages/VisionMission";
import Messages from "@/pages/Messages";
import Governance from "@/pages/Governance";
import AICTE from "@/pages/AICTE";
import NBA from "@/pages/NBA";

// Employee Benefits pages
import StudentAccidentPolicy from "@/pages/StudentAccidentPolicy";
import JSSHealthScheme from "@/pages/JSSHealthScheme";
import GratuityScheme from "@/pages/GratuityScheme";

// Reports and Downloads pages
import NCCAnnualReport from "@/pages/NCCAnnualReport";
import AuditReport20222023 from "@/pages/AuditReport20222023";
import AuditReport20212022 from "@/pages/AuditReport20212022";
import AuditReport20202021 from "@/pages/AuditReport20202021";

function Router() {
  return (
    <Switch>
      {/* Main Navigation Routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/academics" component={Academics} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/campus-life" component={CampusLife} />
      <Route path="/contact" component={Contact} />
      
      {/* Home Section Routes */}
      <Route path="/about-jssmvp" component={AboutJSSMVP} />
      <Route path="/vision-mission" component={VisionMission} />
      <Route path="/messages" component={Messages} />
      <Route path="/governance" component={Governance} />
      <Route path="/aicte" component={AICTE} />
      <Route path="/nba" component={NBA} />
      
      {/* Employee Benefits Routes */}
      <Route path="/student-accident-policy" component={StudentAccidentPolicy} />
      <Route path="/jss-health-scheme" component={JSSHealthScheme} />
      <Route path="/gratuity-scheme" component={GratuityScheme} />
      
      {/* Reports and Downloads Routes */}
      <Route path="/ncc-annual-report" component={NCCAnnualReport} />
      <Route path="/audit-report-2022-2023" component={AuditReport20222023} />
      <Route path="/audit-report-2021-2022" component={AuditReport20212022} />
      <Route path="/audit-report-2020-2021" component={AuditReport20202021} />
      
      {/* 404 Not Found */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Hide splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showSplash ? <SplashScreen /> : (
          <>
            <Router />
            <ScrollToTop />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

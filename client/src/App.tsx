import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";

// Pages
import Home from "@/pages/home";
import Academics from "@/pages/academics";
import Admissions from "@/pages/admissions";
import About from "@/pages/about";
import AboutJSSMVP from "@/pages/about-jssmvp";
import Messages from "@/pages/messages";
import Governance from "@/pages/governance";
import AICTEEOA from "@/pages/aicte-eoa";
import NBA from "@/pages/nba";
import CalendarEvents from "@/pages/calendar-events";
import JSSCollaborationMOUs from "@/pages/jss-collaboration-mous";
import MandatoryDisclosure from "@/pages/mandatory-disclosure";
import ScienceDepartment from "@/pages/science-department";
import MechanicalEngineering from "@/pages/mechanical-engineering";
import InformationScienceEngineering from "@/pages/information-science-engineering";
import ComputerScienceEngineering from "@/pages/computer-science-engineering";
import CivilEngineering from "@/pages/civil-engineering";
import ElectricalElectronicsEngineering from "@/pages/electrical-electronics-engineering";
import ElectronicsCommunicationEngineering from "@/pages/electronics-communication-engineering";
import IQAC from "@/pages/iqac";
import TrainingPlacements from "@/pages/training-placements";
import Placements from "@/pages/placements";
import CulturalActivities from "@/pages/cultural-activities";
import FeePayment from "@/pages/fee-payment";
import HigherEducation from "@/pages/higher-education";
import AntiRagging from "@/pages/anti-ragging";
import CampusLife from "@/pages/campus-life";
import Infrastructure from "@/pages/infrastructure";
import Contact from "@/pages/contact";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import NotFound from "@/pages/not-found";

// Layout components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SplashScreen from "@/components/ui/splash-screen";
import ScrollToTop from "@/components/ui/scroll-to-top";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/about" component={About} />
          <Route path="/about-jssmvp" component={AboutJSSMVP} />
          <Route path="/messages" component={Messages} />
          <Route path="/governance" component={Governance} />
          <Route path="/aicte-eoa" component={AICTEEOA} />
          <Route path="/nba" component={NBA} />
          <Route path="/calendar-events" component={CalendarEvents} />
          <Route path="/jss-collaboration-mous" component={JSSCollaborationMOUs} />
          <Route path="/mandatory-disclosure" component={MandatoryDisclosure} />
          <Route path="/science-department" component={ScienceDepartment} />
          <Route path="/mechanical-engineering" component={MechanicalEngineering} />
          <Route path="/information-science-engineering" component={InformationScienceEngineering} />
          <Route path="/computer-science-engineering" component={ComputerScienceEngineering} />
          <Route path="/civil-engineering" component={CivilEngineering} />
          <Route path="/electrical-electronics-engineering" component={ElectricalElectronicsEngineering} />
          <Route path="/electronics-communication-engineering" component={ElectronicsCommunicationEngineering} />
          <Route path="/iqac" component={IQAC} />
          <Route path="/training-placements" component={TrainingPlacements} />
          <Route path="/placements" component={Placements} />
          <Route path="/cultural-activities" component={CulturalActivities} />
          <Route path="/fee-payment" component={FeePayment} />
          <Route path="/higher-education" component={HigherEducation} />
          <Route path="/anti-ragging" component={AntiRagging} />
          <Route path="/campus-life" component={CampusLife} />
          <Route path="/infrastructure" component={Infrastructure} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          {showSplash ? (
            <SplashScreen onComplete={handleSplashComplete} />
          ) : (
            <Router />
          )}
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

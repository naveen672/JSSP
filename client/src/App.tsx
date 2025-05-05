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
import IQAC from "@/pages/IQAC";
import MandatoryDisclosure from "@/pages/MandatoryDisclosure";

// Professional Bodies pages
import ProfBodyCS from "@/pages/ProfBodyCS";
import ProfBodyEC from "@/pages/ProfBodyEC";
import ProfBodyEE from "@/pages/ProfBodyEE";
import ProfBodyME from "@/pages/ProfBodyME";
import ProfBodyMT from "@/pages/ProfBodyMT";
import ProfBodyCE from "@/pages/ProfBodyCE";

// Employee Benefits pages
import StudentAccidentPolicy from "@/pages/StudentAccidentPolicy";
import JSSHealthScheme from "@/pages/JSSHealthScheme";
import GratuityScheme from "@/pages/GratuityScheme";

// Reports and Downloads pages
import NCCAnnualReport from "@/pages/NCCAnnualReport";
import AuditReport20222023 from "@/pages/AuditReport20222023";
import AuditReport20212022 from "@/pages/AuditReport20212022";
import AuditReport20202021 from "@/pages/AuditReport20202021";
import CalendarOfEvents from "@/pages/Calendar";

// Department pages
import DeptCivil from "@/pages/DeptCivil";
import DeptCS from "@/pages/DeptCS";
import DeptEC from "@/pages/DeptEC";
import DeptEE from "@/pages/DeptEE";
import DeptIS from "@/pages/DeptIS";
import DeptME from "@/pages/DeptME";
import DeptSC from "@/pages/DeptSC";

// Facility pages
import Library from "@/pages/Library";
import Hostel from "@/pages/Hostel";
import Sports from "@/pages/Sports";
import Infrastructure from "@/pages/Infrastructure";
import Placements from "@/pages/Placements";
import Internships from "@/pages/Internships";

// Infrastructure department pages
import InfrastructureDeptCS from "@/pages/infrastructure/DeptCS";
import InfrastructureDeptEC from "@/pages/infrastructure/DeptEC";
import InfrastructureDeptME from "@/pages/infrastructure/DeptME";
import InfrastructureDeptEE from "@/pages/infrastructure/DeptEE";
import InfrastructureDeptMT from "@/pages/infrastructure/DeptMT";
import InfrastructureDeptCE from "@/pages/infrastructure/DeptCE";

// Collaboration pages
import JSSMOUs from "@/pages/JSSMOUs";
import AboutAcademics from "@/pages/AboutAcademics";

// Admission pages
import CollegeProspectus from "@/pages/CollegeProspectus";
import AdmissionDetails from "@/pages/AdmissionDetails";
import AdmissionHelpdesk from "@/pages/AdmissionHelpdesk";

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
      <Route path="/iqac" component={IQAC} />
      <Route path="/mandatory-disclosure" component={MandatoryDisclosure} />
      
      {/* Employee Benefits Routes */}
      <Route path="/student-accident-policy" component={StudentAccidentPolicy} />
      <Route path="/jss-health-scheme" component={JSSHealthScheme} />
      <Route path="/gratuity-scheme" component={GratuityScheme} />
      
      {/* Reports and Downloads Routes */}
      <Route path="/ncc-annual-report" component={NCCAnnualReport} />
      <Route path="/audit-report-2022-2023" component={AuditReport20222023} />
      <Route path="/audit-report-2021-2022" component={AuditReport20212022} />
      <Route path="/audit-report-2020-2021" component={AuditReport20202021} />
      <Route path="/calendar-of-events" component={CalendarOfEvents} />
      
      {/* Department Routes */}
      <Route path="/dept-cs" component={DeptCS} />
      <Route path="/dept-ec" component={DeptEC} />
      <Route path="/dept-me" component={DeptME} />
      <Route path="/dept-ee" component={DeptEE} />
      <Route path="/dept-is" component={DeptIS} />
      <Route path="/dept-ce" component={DeptCivil} />
      <Route path="/dept-sc" component={DeptSC} />
      
      {/* Collaboration Routes */}
      <Route path="/jss-mous" component={JSSMOUs} />
      
      {/* Academic Routes */}
      <Route path="/about-academics" component={AboutAcademics} />
      
      {/* Admission Routes */}
      <Route path="/college-prospectus" component={CollegeProspectus} />
      <Route path="/admission-details" component={AdmissionDetails} />
      <Route path="/admission-helpdesk" component={AdmissionHelpdesk} />
      
      {/* Professional Bodies Routes */}
      <Route path="/prof-body-cs" component={ProfBodyCS} />
      <Route path="/prof-body-ec" component={ProfBodyEC} />
      <Route path="/prof-body-ee" component={ProfBodyEE} />
      <Route path="/prof-body-me" component={ProfBodyME} />
      <Route path="/prof-body-mt" component={ProfBodyMT} />
      <Route path="/prof-body-ce" component={ProfBodyCE} />
      
      {/* Facilities Routes */}
      <Route path="/library" component={Library} />
      <Route path="/hostel" component={Hostel} />
      <Route path="/sports" component={Sports} />
      <Route path="/infrastructure" component={Infrastructure} />
      <Route path="/placements" component={Placements} />
      <Route path="/internships" component={Internships} />
      
      {/* Infrastructure Department Routes */}
      <Route path="/infrastructure/dept-cs" component={InfrastructureDeptCS} />
      <Route path="/infrastructure/dept-ec" component={InfrastructureDeptEC} />
      <Route path="/infrastructure/dept-me" component={InfrastructureDeptME} />
      <Route path="/infrastructure/dept-ee" component={InfrastructureDeptEE} />
      <Route path="/infrastructure/dept-mt" component={InfrastructureDeptMT} />
      <Route path="/infrastructure/dept-ce" component={InfrastructureDeptCE} />
      
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

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { 
  Menu, University, ChevronDown, BookOpen, Users, GraduationCap, Calendar, FileText, Trophy, 
  Home, Phone, Building, Award, Briefcase, Camera, Settings, UserCheck, Shield, Heart,
  Computer, Cpu, Wrench, Zap, Cog, Database, MapPin, Library, Dumbbell, MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import jssLogo1 from "@assets/image_1748508966675.png";
import jssLogo2 from "@assets/image_1748508969261.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const toggleMobileDropdown = (dropdownName: string) => {
    if (mobileActiveDropdown === dropdownName) {
      setMobileActiveDropdown(null);
    } else {
      setMobileActiveDropdown(dropdownName);
    }
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileActiveDropdown(null);
  };

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link 
      href={href}
      className={cn(
        "inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive(href) && "bg-accent/50 text-accent-foreground",
        className
      )}
    >
      {children}
    </Link>
  );

  const DropdownButton = ({ name, children, icon: Icon }: { name: string; children: React.ReactNode; icon: any }) => (
    <button
      onClick={() => toggleDropdown(name)}
      className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none text-gray-700 hover:text-primary"
    >
      <Icon className="h-4 w-4 mr-1" />
      {children}
      <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", activeDropdown === name && "rotate-180")} />
    </button>
  );

  const DropdownContent = ({ name, children, className }: { name: string; children: React.ReactNode; className?: string }) => (
    <div className={cn(
      "absolute top-full left-0 mt-1 w-96 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200",
      activeDropdown === name ? "opacity-100 visible" : "opacity-0 invisible",
      className
    )}>
      <div className="p-4 grid gap-1">
        {children}
      </div>
    </div>
  );

  const DropdownLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) => (
    <Link 
      href={href}
      onClick={() => setActiveDropdown(null)}
      className="flex items-center p-2 rounded-md hover:bg-yellow-50 hover:text-yellow-700 transition-colors group"
    >
      <Icon className="h-4 w-4 mr-2 text-gray-600 group-hover:text-yellow-600" />
      <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-700">{children}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Logo Section */}
      <div className="container mx-auto px-4 py-3">
        <Link href="/" className="block">
          <div className="flex items-center justify-center space-x-6 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img src={jssLogo1} alt="JSS Logo 1" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary">JSS POLYTECHNIC</h1>
              <p className="text-sm text-gray-600">Mysore</p>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img src={jssLogo2} alt="JSS Logo 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </Link>
      </div>
      
      {/* Navigation Section */}
      <div className="container mx-auto px-4" ref={dropdownRef}>
        <div className="flex h-14 items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex mx-auto">
            <div className="flex items-center space-x-1">
              {/* Home Dropdown */}
              <div className="relative">
                <DropdownButton name="home" icon={Home}>Home</DropdownButton>
                <DropdownContent name="home">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">About Section</div>
                  <DropdownLink href="/about-jssmvp" icon={University}>About JSSMVP</DropdownLink>
                  <DropdownLink href="/about" icon={Award}>Vision Mission of the Institute</DropdownLink>
                  <DropdownLink href="/about" icon={Users}>Leadership Team</DropdownLink>
                  <DropdownLink href="/messages" icon={FileText}>Messages</DropdownLink>
                  <DropdownLink href="/governance" icon={Shield}>Governance</DropdownLink>
                  <DropdownLink href="/aicte-eoa" icon={Award}>All India Council for Technical Education (AICTE) and EOA</DropdownLink>
                  <DropdownLink href="/nba" icon={Trophy}>NBA</DropdownLink>
                  <DropdownLink href="/iqac" icon={UserCheck}>Internal Quality Assurance Cell (IQAC)</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Employee Benefits</div>
                  <DropdownLink href="/student-group-accident-policy" icon={Shield}>Student Group Accident Policy</DropdownLink>
                  <DropdownLink href="/jss-health-scheme" icon={Heart}>JSS Health Scheme</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Award}>Group Gratuity Saving Scheme</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Reports and Downloads</div>
                  <DropdownLink href="/campus-life" icon={FileText}>NCC Annual Report</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Audit Report 2022-2023</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Audit Report 2021-2022</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Audit Report 2020-2021</DropdownLink>
                </DropdownContent>
              </div>

              {/* Academics Dropdown */}
              <div className="relative">
                <DropdownButton name="academics" icon={GraduationCap}>Academics</DropdownButton>
                <DropdownContent name="academics">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Departments</div>
                  <DropdownLink href="/computer-science-engineering" icon={Computer}>Computer Science & Engineering</DropdownLink>
                  <DropdownLink href="/electronics-communication-engineering" icon={Cpu}>Electronics & Communication Engineering</DropdownLink>
                  <DropdownLink href="/mechanical-engineering" icon={Wrench}>Mechanical Engineering</DropdownLink>
                  <DropdownLink href="/electrical-electronics-engineering" icon={Zap}>Electrical & Electronics Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Cog}>Mechatronics Engineering</DropdownLink>
                  <DropdownLink href="/information-science-engineering" icon={Database}>Information Science & Engineering</DropdownLink>
                  <DropdownLink href="/civil-engineering" icon={Building}>Civil Engineering</DropdownLink>
                  <DropdownLink href="/science-department" icon={BookOpen}>Science Department</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Calendar</div>
                  <DropdownLink href="/calendar-events" icon={Calendar}>Calendar of Events</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Professional Bodies</div>
                  <DropdownLink href="/computer-science-engineering" icon={Computer}>Computer Science & Engineering</DropdownLink>
                  <DropdownLink href="/electronics-communication-engineering" icon={Cpu}>Electronics & Communication Engineering</DropdownLink>
                  <DropdownLink href="/mechanical-engineering" icon={Wrench}>Mechanical Engineering</DropdownLink>
                  <DropdownLink href="/electrical-electronics-engineering" icon={Zap}>Electrical & Electronics Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Cog}>Mechatronics Engineering</DropdownLink>
                  <DropdownLink href="/information-science-engineering" icon={Database}>Information Science & Engineering</DropdownLink>
                  <DropdownLink href="/civil-engineering" icon={Building}>Civil Engineering</DropdownLink>
                  <DropdownLink href="/science-department" icon={BookOpen}>Science Department</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Admission</div>
                  <DropdownLink href="/admissions" icon={FileText}>College Prospectus</DropdownLink>
                  <DropdownLink href="/admissions" icon={Phone}>Admission Help desk</DropdownLink>
                  <DropdownLink href="/admissions" icon={Settings}>Admission Details</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Other</div>
                  <DropdownLink href="/academics" icon={BookOpen}>About Academics</DropdownLink>
                  <DropdownLink href="/jss-collaboration-mous" icon={Award}>JSS Collaboration MOUs</DropdownLink>
                  <DropdownLink href="/mandatory-disclosure" icon={FileText}>Mandatory Disclosure</DropdownLink>
                </DropdownContent>
              </div>

              {/* Facilities Dropdown */}
              <div className="relative">
                <DropdownButton name="facilities" icon={Building}>Facilities</DropdownButton>
                <DropdownContent name="facilities">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">General Facilities</div>
                  <DropdownLink href="/campus-life" icon={Library}>Library & Information Centre</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Building}>Hostel</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Dumbbell}>Sports</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Placements & Training</div>
                  <DropdownLink href="/campus-life" icon={Briefcase}>Placements</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Settings}>Internships & Training</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Infrastructure</div>
                  <DropdownLink href="/infrastructure" icon={Building}>Infrastructure Overview</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Computer}>Computer Science & Engineering</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Cpu}>Electronics & Communication</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Wrench}>Mechanical Engineering</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Zap}>Electrical & Electronics</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Cog}>Mechatronics</DropdownLink>
                  <DropdownLink href="/infrastructure" icon={Building}>Civil Engineering</DropdownLink>
                </DropdownContent>
              </div>

              {/* Student Support Dropdown */}
              <div className="relative">
                <DropdownButton name="student-support" icon={Users}>Student Support</DropdownButton>
                <DropdownContent name="student-support">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Basic Support</div>
                  <DropdownLink href="/campus-life" icon={Award}>Scholarships</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Users}>Mentoring Scheme</DropdownLink>
                  <DropdownLink href="/anti-ragging" icon={Shield}>Anti Ragging</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Committees</div>
                  <DropdownLink href="/committees" icon={Users}>All Committees</DropdownLink>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Higher Education</div>
                  <DropdownLink href="/higher-education" icon={GraduationCap}>Higher Education</DropdownLink>
                  <DropdownLink href="/exam" icon={FileText}>Exam</DropdownLink>
                  <DropdownLink href="/fee-payment" icon={Settings}>Fee Payment</DropdownLink>
                  <DropdownLink href="/cultural-activities" icon={Users}>Cultural Crew</DropdownLink>
                  <DropdownLink href="/social-outreach" icon={Heart}>Social Outreach Programs</DropdownLink>
                </DropdownContent>
              </div>

              {/* Training & Placements Dropdown */}
              <div className="relative">
                <DropdownButton name="placements" icon={Briefcase}>Training & Placements</DropdownButton>
                <DropdownContent name="placements" className="left-[-150px]">
                  <DropdownLink href="/training-placements" icon={BookOpen}>Training</DropdownLink>
                  <DropdownLink href="/placements" icon={Briefcase}>Placements</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Settings}>Internships</DropdownLink>
                </DropdownContent>
              </div>

              {/* IQAC */}
              <NavLink href="/iqac">
                <UserCheck className="h-4 w-4 mr-1" />
                IQAC
              </NavLink>

              {/* More Dropdown */}
              <div className="relative">
                <DropdownButton name="more" icon={MoreHorizontal}>More</DropdownButton>
                <DropdownContent name="more" className="left-[-200px]">
                  <DropdownLink href="/campus-life" icon={Users}>Alumni</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Camera}>Photo Gallery</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Media Coverage Update</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Phone}>Online Grievance Support</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Briefcase}>Career Opportunity</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Service Rules</DropdownLink>
                </DropdownContent>
              </div>

              {/* Contact */}
              <NavLink href="/contact">
                <Phone className="h-4 w-4 mr-1" />
                Contact
              </NavLink>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 flex flex-col h-full">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation menu for JSS Polytechnic website</SheetDescription>
              <div className="flex-shrink-0 p-6 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={jssLogo1} alt="JSS Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-semibold">JSS Polytechnic</h2>
                    <p className="text-xs text-gray-600">Navigation</p>
                  </div>
                </div>
              </div>
              
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {/* Mobile Home Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown("mobile-home")}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveDropdown === "mobile-home" && "rotate-180")} />
                    </button>
                    {mobileActiveDropdown === "mobile-home" && (
                      <div className="pl-6 mt-2 space-y-1 max-h-80 overflow-y-auto">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">About Section</div>
                        <Link href="/about-jssmvp" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">About JSSMVP</Link>
                        <Link href="/about" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Vision Mission of the Institute</Link>
                        <Link href="/about" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Leadership Team</Link>
                        <Link href="/messages" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Messages</Link>
                        <Link href="/governance" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Governance</Link>
                        <Link href="/aicte-eoa" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">All India Council for Technical Education (AICTE) and EOA</Link>
                        <Link href="/nba" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">NBA</Link>
                        <Link href="/iqac" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Internal Quality Assurance Cell (IQAC)</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Employee Benefits</div>
                        <Link href="/student-group-accident-policy" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Student Group Accident Policy</Link>
                        <Link href="/jss-health-scheme" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">JSS Health Scheme</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Group Gratuity Saving Scheme</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Reports and Downloads</div>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">NCC Annual Report</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Audit Report 2022-2023</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Audit Report 2021-2022</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Audit Report 2020-2021</Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Academics Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown("mobile-academics")}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Academics</span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveDropdown === "mobile-academics" && "rotate-180")} />
                    </button>
                    {mobileActiveDropdown === "mobile-academics" && (
                      <div className="pl-6 mt-2 space-y-1 max-h-80 overflow-y-auto">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Departments</div>
                        <Link href="/computer-science-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Computer Science & Engineering</Link>
                        <Link href="/electronics-communication-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Electronics & Communication Engineering</Link>
                        <Link href="/mechanical-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mechanical Engineering</Link>
                        <Link href="/electrical-electronics-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Electrical & Electronics Engineering</Link>
                        <Link href="/academics" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mechatronics Engineering</Link>
                        <Link href="/information-science-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Information Science & Engineering</Link>
                        <Link href="/civil-engineering" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Civil Engineering</Link>
                        <Link href="/science-department" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Science Department</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Calendar</div>
                        <Link href="/calendar-events" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Calendar of Events</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Other</div>
                        <Link href="/academics" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">About Academics</Link>
                        <Link href="/jss-collaboration-mous" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">JSS Collaboration MOUs</Link>
                        <Link href="/mandatory-disclosure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mandatory Disclosure</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Admission</div>
                        <Link href="/admissions" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">College Prospectus</Link>
                        <Link href="/admissions" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Admission Help desk</Link>
                        <Link href="/admissions" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Admission Details</Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Facilities Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown("mobile-facilities")}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>Facilities</span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveDropdown === "mobile-facilities" && "rotate-180")} />
                    </button>
                    {mobileActiveDropdown === "mobile-facilities" && (
                      <div className="pl-6 mt-2 space-y-1 max-h-80 overflow-y-auto">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">General Facilities</div>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Library & Information Centre</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Hostel</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Sports</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Placements & Training</div>
                        <Link href="/placements" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Placements</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Internships & Training</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Infrastructure</div>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Infrastructure Overview</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Computer Science & Engineering</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Electronics & Communication</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mechanical Engineering</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Electrical & Electronics</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mechatronics</Link>
                        <Link href="/infrastructure" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Civil Engineering</Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Student Support Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown("mobile-support")}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Student Support</span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveDropdown === "mobile-support" && "rotate-180")} />
                    </button>
                    {mobileActiveDropdown === "mobile-support" && (
                      <div className="pl-6 mt-2 space-y-1 max-h-80 overflow-y-auto">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Basic Support</div>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Scholarships</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Mentoring Scheme</Link>
                        <Link href="/anti-ragging" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Anti Ragging</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Committees</div>
                        <Link href="/committees" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">All Committees</Link>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">Higher Education</div>
                        <Link href="/higher-education" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Higher Education</Link>
                        <Link href="/exam" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Exam</Link>
                        <Link href="/fee-payment" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Fee Payment</Link>
                        <Link href="/cultural-activities" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Cultural Crew</Link>
                        <Link href="/social-outreach" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Social Outreach Programs</Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Training & Placements Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown("mobile-placements")}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>Training & Placements</span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveDropdown === "mobile-placements" && "rotate-180")} />
                    </button>
                    {mobileActiveDropdown === "mobile-placements" && (
                      <div className="pl-6 mt-2 space-y-1 max-h-80 overflow-y-auto">
                        <Link href="/training-placements" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Training</Link>
                        <Link href="/placements" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Placements</Link>
                        <Link href="/campus-life" onClick={() => closeMobileMenu()} className="block p-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 rounded">Internships</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/iqac" onClick={() => closeMobileMenu()} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <UserCheck className="h-4 w-4" />
                    <span>IQAC</span>
                  </Link>
                  <Link href="/contact" onClick={() => closeMobileMenu()} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <Phone className="h-4 w-4" />
                    <span>Contact</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
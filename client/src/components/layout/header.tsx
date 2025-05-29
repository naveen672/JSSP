import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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
      "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200",
      activeDropdown === name ? "opacity-100 visible" : "opacity-0 invisible",
      className
    )}>
      <div className="p-4 grid gap-2">
        {children}
      </div>
    </div>
  );

  const DropdownLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) => (
    <Link 
      href={href}
      onClick={() => setActiveDropdown(null)}
      className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
    >
      <Icon className="h-4 w-4 mr-2 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Logo Section */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center space-x-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
            <img src={jssLogo1} alt="JSS Logo 1" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary">JSS POLYTECHNIC</h1>
            <p className="text-sm text-gray-600">A Constituent Institution of JSS Science and Technology University</p>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
            <img src={jssLogo2} alt="JSS Logo 2" className="w-full h-full object-cover" />
          </div>
        </div>
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
                  <DropdownLink href="/" icon={Home}>Home Page</DropdownLink>
                  <DropdownLink href="/about" icon={University}>About Us</DropdownLink>
                  <DropdownLink href="/contact" icon={Phone}>Contact Us</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Building}>Campus Tour</DropdownLink>
                </DropdownContent>
              </div>

              {/* Academics Dropdown */}
              <div className="relative">
                <DropdownButton name="academics" icon={GraduationCap}>Academics</DropdownButton>
                <DropdownContent name="academics">
                  <DropdownLink href="/academics" icon={BookOpen}>Programs Overview</DropdownLink>
                  <DropdownLink href="/academics" icon={Computer}>Computer Science Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Cpu}>Electronics & Communication</DropdownLink>
                  <DropdownLink href="/academics" icon={Wrench}>Mechanical Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Zap}>Electrical Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Cog}>Civil Engineering</DropdownLink>
                  <DropdownLink href="/academics" icon={Database}>Information Technology</DropdownLink>
                </DropdownContent>
              </div>

              {/* Facilities Dropdown */}
              <div className="relative">
                <DropdownButton name="facilities" icon={Building}>Facilities</DropdownButton>
                <DropdownContent name="facilities">
                  <DropdownLink href="/campus-life" icon={Library}>Library</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Computer}>Computer Labs</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Settings}>Workshop</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Dumbbell}>Sports Complex</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Heart}>Medical Center</DropdownLink>
                  <DropdownLink href="/campus-life" icon={MapPin}>Campus Map</DropdownLink>
                </DropdownContent>
              </div>

              {/* Student Support Dropdown */}
              <div className="relative">
                <DropdownButton name="student-support" icon={Users}>Student Support</DropdownButton>
                <DropdownContent name="student-support">
                  <DropdownLink href="/admissions" icon={FileText}>Admissions</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Users}>Student Services</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Shield}>Counseling</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Award}>Scholarships</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Calendar}>Academic Calendar</DropdownLink>
                </DropdownContent>
              </div>

              {/* Training & Placements Dropdown */}
              <div className="relative">
                <DropdownButton name="placements" icon={Briefcase}>Training & Placements</DropdownButton>
                <DropdownContent name="placements" className="left-[-150px]">
                  <DropdownLink href="/campus-life" icon={Settings}>Training Programs</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Briefcase}>Placement Cell</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Trophy}>Success Stories</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Users}>Industry Partners</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Calendar}>Placement Calendar</DropdownLink>
                </DropdownContent>
              </div>

              {/* IQAC */}
              <NavLink href="/about">
                <UserCheck className="h-4 w-4 mr-1" />
                IQAC
              </NavLink>

              {/* More Dropdown */}
              <div className="relative">
                <DropdownButton name="more" icon={MoreHorizontal}>More</DropdownButton>
                <DropdownContent name="more" className="left-[-200px]">
                  <DropdownLink href="/campus-life" icon={Camera}>Gallery</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Calendar}>Events</DropdownLink>
                  <DropdownLink href="/campus-life" icon={FileText}>Downloads</DropdownLink>
                  <DropdownLink href="/campus-life" icon={Trophy}>Achievements</DropdownLink>
                </DropdownContent>
              </div>
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
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={jssLogo1} alt="JSS Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-semibold">JSS Polytechnic</h2>
                    <p className="text-xs text-gray-600">Navigation</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link href="/" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                  <Link href="/about" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <University className="h-4 w-4" />
                    <span>About</span>
                  </Link>
                  <Link href="/academics" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <GraduationCap className="h-4 w-4" />
                    <span>Academics</span>
                  </Link>
                  <Link href="/admissions" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <FileText className="h-4 w-4" />
                    <span>Admissions</span>
                  </Link>
                  <Link href="/campus-life" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <Building className="h-4 w-4" />
                    <span>Campus Life</span>
                  </Link>
                  <Link href="/contact" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
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
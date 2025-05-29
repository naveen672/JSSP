import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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

  const isActive = (path: string) => location === path;

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <NavigationMenuLink 
      asChild
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        isActive(href) && "bg-accent/50 text-accent-foreground",
        className
      )}
    >
      <Link href={href}>
        {children}
      </Link>
    </NavigationMenuLink>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Logo Section */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <Link href="/">
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={jssLogo1} 
                  alt="JSS Maha Vidyapeetha Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold text-primary">JSS POLYTECHNIC</h1>
                <p className="text-lg text-gray-600">Excellence in Technical Education</p>
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={jssLogo2} 
                  alt="JSS Polytechnic Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex mx-auto relative">
            <NavigationMenuList className="flex space-x-1">
              {/* Home Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">About Section</h4>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          About JSSMVP
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Vision & Mission
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Leadership Team
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Employee Benefits</h4>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Group Accident Policy
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          JSS Health Scheme
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Reports</h4>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          NCC Annual Report
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Audit Reports
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[700px] gap-3 p-4 md:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                        <Computer className="h-4 w-4 mr-1" />
                        Departments
                      </h4>
                      <NavigationMenuLink asChild>
                        <Link href="/academics" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Computer Science & Engineering
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/academics" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Electronics & Communication
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/academics" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Mechanical Engineering
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/academics" className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Civil Engineering
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Calendar & Bodies
                      </h4>
                      <Link href="/academics">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Calendar of Events
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/academics">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Professional Bodies
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        Admission
                      </h4>
                      <Link href="/admissions">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          College Prospectus
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/admissions">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Admission Help Desk
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/admissions">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Admission Details
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Facilities Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <Building className="h-4 w-4 mr-1" />
                  Facilities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">General Facilities</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <Library className="h-3 w-3 mr-1 inline" />
                          Library & Information Centre
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <Home className="h-3 w-3 mr-1 inline" />
                          Hostel
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <Dumbbell className="h-3 w-3 mr-1 inline" />
                          Sports
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Training & Placements</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Placements
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Internships & Training
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Infrastructure</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Infrastructure Overview
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Department Labs
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Student Support Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <Users className="h-4 w-4 mr-1" />
                  Student Support
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Basic Support</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <Trophy className="h-3 w-3 mr-1 inline" />
                          Scholarships
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <UserCheck className="h-3 w-3 mr-1 inline" />
                          Mentoring Scheme
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <Shield className="h-3 w-3 mr-1 inline" />
                          Anti Ragging
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Committees</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          MOOC's Committee
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Internal Complaint Committee
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          SC/ST Committee
                        </NavigationMenuLink>
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Higher Education</h4>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Higher Education
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Fee Payment
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/campus-life">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Cultural Crew
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Training & Placements Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <Briefcase className="h-4 w-4 mr-1" />
                  Training & Placements
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[300px] left-[-150px]">
                  <div className="grid w-[300px] gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link href="/campus-life" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Internships
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Industry internship opportunities
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/campus-life" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Training
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional skill development
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/campus-life" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Placements
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Career placement services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* IQAC Direct Link */}
              <NavigationMenuItem>
                <NavLink href="/about">
                  <Award className="h-4 w-4 mr-1" />
                  IQAC
                </NavLink>
              </NavigationMenuItem>

              {/* More Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  <MoreHorizontal className="h-4 w-4 mr-1" />
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[400px] right-0">
                  <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Alumni
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with our alumni network
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Camera className="h-4 w-4 mr-2" />
                          Photo Gallery
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Campus life in pictures
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Media Coverage
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest news and updates
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Online Grievance
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Submit complaints and feedback
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Direct Link */}
              <NavigationMenuItem>
                <NavLink href="/contact">
                  <Phone className="h-4 w-4 mr-1" />
                  Contact
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                    <img 
                      src={jssLogo1} 
                      alt="JSS Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-primary">JSS POLYTECHNIC</span>
                </div>
                
                {/* Home Section */}
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </h3>
                  <div className="ml-6 space-y-2">
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      About JSSMVP
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Vision & Mission
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Leadership Team
                    </button>
                  </div>
                </div>

                {/* Academics Section */}
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Academics
                  </h3>
                  <div className="ml-6 space-y-2">
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Computer Science & Engineering
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Electronics & Communication
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mechanical Engineering
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Electrical Engineering
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Civil Engineering
                    </button>
                  </div>
                </div>

                {/* Facilities Section */}
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Facilities
                  </h3>
                  <div className="ml-6 space-y-2">
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Library & Information Centre
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Hostel
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sports Complex
                    </button>
                  </div>
                </div>

                {/* Student Support Section */}
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Student Support
                  </h3>
                  <div className="ml-6 space-y-2">
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Scholarships
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Mentoring Scheme
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Anti Ragging
                    </button>
                  </div>
                </div>

                {/* Training & Placements Section */}
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Training & Placements
                  </h3>
                  <div className="ml-6 space-y-2">
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Internships
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Training Programs
                    </button>
                    <button 
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Placements
                    </button>
                  </div>
                </div>

                {/* Direct Links */}
                <div className="space-y-2 pt-4 border-t">
                  <button 
                    className="flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    IQAC
                  </button>
                  <button 
                    className="flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

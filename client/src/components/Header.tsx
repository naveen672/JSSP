import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { ImageLoader } from './Images';

// Define types for menu items
interface SubmenuItem {
  path: string;
  label: string;
  category?: string;
}

interface NavLink {
  path: string;
  label: string;
  hasSubmenu: boolean;
  submenu?: SubmenuItem[];
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Add an effect to handle cleanup of body class when location changes
  useEffect(() => {
    // Always ensure mobile menu is closed and body scroll is enabled on navigation
    setIsMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
    
    // Cleanup function to ensure body class is removed when component unmounts
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [location]);

  // Helper function to close mobile menu and unlock scrolling
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };
  
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // Add or remove the body class for preventing background scroll
    if (newState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  // Submenu items for Home
  const homeSubmenus: SubmenuItem[] = [
    { path: '/about-jssmvp', label: 'About JSSMVP' },
    { path: '/vision-mission', label: 'Vision Mission of the Institute' },
    { path: '/leadership-team', label: 'Leadership Team' },
    { path: '/messages', label: 'Messages' },
    { path: '/governance', label: 'Governance' },
    { path: '/aicte', label: 'All India Council for Technical Education (AICTE) and EOA' },
    { path: '/nba', label: 'NBA' },
    { path: '/iqac', label: 'Internal Quality Assurance Cell (IQAC)' },
    // Employee Benefits
    { path: '/student-accident-policy', label: 'Student Group Accident Policy' },
    { path: '/jss-health-scheme', label: 'JSS Health Scheme' },
    { path: '/gratuity-scheme', label: 'Group Gratuity Saving Scheme' },
    // Reports and Downloads
    { path: '/ncc-annual-report', label: 'NCC Annual Report' },
    { path: '/audit-report-2022-2023', label: 'Audit Report 2022-2023' },
    { path: '/audit-report-2021-2022', label: 'Audit Report 2021-2022' },
    { path: '/audit-report-2020-2021', label: 'Audit Report 2020-2021' },
  ];

  // Submenu items for Academics
  const academicsSubmenus: SubmenuItem[] = [
    // Departments
    { path: '/dept-cs', label: 'Computer Science & Engineering', category: 'departments' },
    { path: '/dept-ec', label: 'Electronics & Communication Engineering', category: 'departments' },
    { path: '/dept-me', label: 'Mechanical Engineering', category: 'departments' },
    { path: '/dept-ee', label: 'Electrical & Electronics Engineering', category: 'departments' },
    { path: '/dept-mt', label: 'Mechatronics Engineering', category: 'departments' },
    { path: '/dept-is', label: 'Information Science & Engineering', category: 'departments' },
    { path: '/dept-ce', label: 'Civil Engineering', category: 'departments' },
    { path: '/dept-sc', label: 'Science Department', category: 'departments' },
    
    // Calendar of Events
    { path: '/calendar-of-events', label: 'Calendar of Events', category: 'calendar' },
    
    // JSS Collaborations
    { path: '/jss-mous', label: 'JSS Collaboration_MOUs', category: 'collaborations' },
    
    // Professional Bodies
    { path: '/prof-body-cs', label: 'Computer Science & Engineering', category: 'professional' },
    { path: '/prof-body-ec', label: 'Electronics & Communication Engineering', category: 'professional' },
    { path: '/prof-body-me', label: 'Mechanical Engineering', category: 'professional' },
    { path: '/prof-body-ee', label: 'Electrical & Electronics Engineering', category: 'professional' },
    { path: '/prof-body-mt', label: 'Mechatronics Engineering', category: 'professional' },
    { path: '/prof-body-ce', label: 'Civil Engineering', category: 'professional' },
    { path: '/prof-body-sc', label: 'Science Department', category: 'professional' },
    
    // About Academics
    { path: '/about-academics', label: 'About Academics', category: 'about' },
    
    // Admission
    { path: '/college-prospectus', label: 'College Prospectus', category: 'admission' },
    { path: '/admission-helpdesk', label: 'Admission Help_desk', category: 'admission' },
    { path: '/admission-details', label: 'Admission Details', category: 'admission' },
    
    // Mandatory Disclosure
    { path: '/mandatory-disclosure', label: 'Mandatory Disclosure', category: 'disclosure' },
  ];

  // Facilities submenus
  const facilitiesSubmenus: SubmenuItem[] = [
    { path: '/library', label: 'Library & Information Centre', category: 'facilities' },
    { path: '/hostel', label: 'Hostel', category: 'facilities' },
    { path: '/sports', label: 'Sports', category: 'facilities' },
    { path: '/placements', label: 'Placements', category: 'placements' },
    { path: '/internships', label: 'Internships & Training', category: 'placements' },
    { path: '/infrastructure', label: 'Infrastructure', category: 'infrastructure' },
    { path: '/infrastructure/dept-cs', label: 'Computer Science & Engineering', category: 'infrastructure' },
    { path: '/infrastructure/dept-ec', label: 'Electronics & Communication', category: 'infrastructure' },
    { path: '/infrastructure/dept-me', label: 'Mechanical Engineering', category: 'infrastructure' },
    { path: '/infrastructure/dept-ee', label: 'Electrical & Electronics', category: 'infrastructure' },
    { path: '/infrastructure/dept-mt', label: 'Mechatronics', category: 'infrastructure' },
    { path: '/infrastructure/dept-ce', label: 'Civil Engineering', category: 'infrastructure' },
  ];

  // Student Support submenus with nested categories
  const studentSupportSubmenus: SubmenuItem[] = [
    // Basic Support
    { path: '/scholarships', label: 'Scholarships', category: 'support' },
    { path: '/mentoring-scheme', label: 'Mentoring Scheme', category: 'support' },
    { path: '/anti-ragging', label: 'Anti Ragging', category: 'support' },
    
    // Committees (nested under Student Support)
    { path: '/moocs-committee', label: "MOOC's Committee", category: 'committees' },
    { path: '/internal-complaint-committee', label: 'Internal Complaint Committee', category: 'committees' },
    { path: '/sc-st-committee', label: 'SC/ST Committee', category: 'committees' },
    
    // Higher Education (nested under Student Support)
    { path: '/higher-education', label: 'Higher Education', category: 'higher-ed' },
    { path: '/exam', label: 'Exam', category: 'higher-ed' },
    { path: '/fee-payment', label: 'Fee Payment', category: 'higher-ed' },
    { path: '/cultural-crew', label: 'Cultural Crew', category: 'higher-ed' },
    { path: '/social-outreach', label: 'Social Outreach Programs', category: 'higher-ed' },
  ];
  
  // Training & Placements submenus
  const trainingPlacementsSubmenus: SubmenuItem[] = [
    { path: '/internships', label: 'Internships', category: 'training' },
    { path: '/training', label: 'Training', category: 'training' },
    { path: '/placements', label: 'Placements', category: 'training' },
  ];
  
  // More submenus
  const moreSubmenus: SubmenuItem[] = [
    { path: '/alumni', label: 'Alumni', category: 'more' },
    { path: '/photo-gallery', label: 'Photo Gallery', category: 'more' },
    { path: '/media-coverage', label: 'Media Coverage Update', category: 'more' },
    { path: '/online-grievance', label: 'Online Grievance Support', category: 'more' },
    { path: '/career-opportunity', label: 'Career Opportunity', category: 'more' },
    { path: '/service-rules', label: 'Service Rules', category: 'more' },
  ];

  // Main navigation links
  const navLinks: NavLink[] = [
    { path: '/', label: 'Home', hasSubmenu: true, submenu: homeSubmenus },
    { path: '/academics', label: 'Academics', hasSubmenu: true, submenu: academicsSubmenus },
    { path: '/facilities', label: 'Facilities', hasSubmenu: true, submenu: facilitiesSubmenus },
    { path: '/student-support', label: 'Student Support', hasSubmenu: true, submenu: studentSupportSubmenus },
    { path: '/training-placements', label: 'Training & Placements', hasSubmenu: true, submenu: trainingPlacementsSubmenus },
    { path: '/iqac', label: 'IQAC', hasSubmenu: false },
    { path: '/more', label: 'More', hasSubmenu: true, submenu: moreSubmenus },
    { path: '/contact', label: 'Contact', hasSubmenu: false },
  ];

  // State for expanded sections in mobile menu
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  
  // Toggle mobile submenu
  const toggleMobileSubmenu = (path: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };
  
  // For nested submenu clicks on desktop
  const [activeSubmenuCategory, setActiveSubmenuCategory] = useState<string | null>(null);

  const toggleNestedSubmenu = (category: string) => {
    if (activeSubmenuCategory === category) {
      setActiveSubmenuCategory(null);
    } else {
      setActiveSubmenuCategory(category);
    }
  };

  // For nested submenu clicks on mobile
  const [activeMobileCategories, setActiveMobileCategories] = useState<Record<string, boolean>>({});
  
  const toggleMobileCategory = (category: string) => {
    setActiveMobileCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  return (
    <header className="sticky top-0 z-50 shadow-lg bg-white border-b border-gray-200">
      {/* College Logo and Name - Full Width */}
      <div className="w-full bg-gradient-to-r from-white via-white to-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-4 md:gap-10">
            <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white">
              <ImageLoader src="/images/jssmvp.png" alt="JSS Mahavidyapeetha" className="h-14 w-14 md:h-20 md:w-20 rounded-full object-contain" />
            </div>
            <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white">
              <ImageLoader src="/images/jsspoly.png" alt="JSS Polytechnic" className="h-14 w-14 md:h-20 md:w-20 rounded-full object-contain" />
            </div>
          </div>
          <h1 className="mt-3 text-xl sm:text-2xl md:text-4xl text-center" style={{fontWeight: 900}}>
            <div style={{
              color: "#000000", 
              textShadow: "0px 0px 1px rgba(0,0,0,0.2)",
              letterSpacing: "0.5px",
              padding: "5px 10px",
              borderBottom: "2px solid #f59e0b"
            }}>
              JSS Polytechnic, Mysore
            </div>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 font-medium text-center">Affiliated to Directorate of Technical Education, Karnataka</p>
        </div>
      </div>

      {/* Navigation Menu Below */}
      <div className="bg-white shadow-md border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            {/* Mobile College Name - Hidden on Desktop */}
            <Link href="/" className="md:hidden">
              <div className="flex items-center space-x-3 cursor-pointer group">
                <span className="text-lg font-bold text-primary">JSS Polytechnic</span>
              </div>
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-1 mx-auto">
              {navLinks.map((link) => 
                link.hasSubmenu ? (
                  <DropdownMenu key={link.path}>
                    <DropdownMenuTrigger className={`flex items-center transition-all duration-300 px-4 py-3
                      ${location === link.path 
                        ? 'text-amber-600 bg-gray-100 font-semibold' 
                        : 'text-primary hover:text-amber-600 hover:bg-gray-100 font-medium'
                      }
                      relative group
                    `}>
                      <span className="relative">
                        {link.label}
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full 
                          ${location === link.path ? 'w-full' : ''}
                        `}></span>
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:transform group-hover:-rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72 bg-white text-primary shadow-xl border border-amber-100 rounded-md">
                      {link.path === '/' && (
                        <>
                          {/* About section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('about-home')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>About</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'about-home' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'about-home' && (
                              <div className="pl-2 py-1 space-y-1">
                                {homeSubmenus.slice(0, 7).map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Employee Benefits section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('benefits')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Employee Benefits</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'benefits' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'benefits' && (
                              <div className="pl-2 py-1 space-y-1">
                                {homeSubmenus.slice(7, 10).map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Reports section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('reports')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Reports and Downloads</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'reports' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'reports' && (
                              <div className="pl-2 py-1 space-y-1">
                                {homeSubmenus.slice(10).map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                        </>
                      )}
                      
                      {link.path === '/academics' && (
                        <>
                          {/* Departments section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('departments')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Departments</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'departments' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'departments' && (
                              <div className="pl-2 py-1 space-y-1">
                                {academicsSubmenus.filter(item => item.category === 'departments').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Calendar section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('calendar')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Calendar</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'calendar' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'calendar' && (
                              <div className="pl-2 py-1 space-y-1">
                                {academicsSubmenus.filter(item => item.category === 'calendar').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Professional Bodies section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('professional')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Professional Bodies</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'professional' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'professional' && (
                              <div className="pl-2 py-1 space-y-1">
                                {academicsSubmenus.filter(item => item.category === 'professional').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* About Academics section */}
                          <Link href="/about-academics" className="block py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded">
                            About Academics
                          </Link>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Admission section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('admission')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Admission</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'admission' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'admission' && (
                              <div className="pl-2 py-1 space-y-1">
                                {academicsSubmenus.filter(item => item.category === 'admission').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Mandatory Disclosure */}
                          <Link href="/mandatory-disclosure" className="block py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded">
                            Mandatory Disclosure
                          </Link>
                        </>
                      )}
                      
                      {link.path === '/facilities' && (
                        <>
                          {/* Facilities section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('facilities')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>General Facilities</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'facilities' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'facilities' && (
                              <div className="pl-2 py-1 space-y-1">
                                {facilitiesSubmenus.filter(item => item.category === 'facilities').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Placements section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('placements')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Placements & Training</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'placements' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'placements' && (
                              <div className="pl-2 py-1 space-y-1">
                                {facilitiesSubmenus.filter(item => item.category === 'placements').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Infrastructure section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('infrastructure')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Infrastructure</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'infrastructure' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'infrastructure' && (
                              <div className="pl-2 py-1 space-y-1">
                                {facilitiesSubmenus.filter(item => item.category === 'infrastructure').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                        </>
                      )}
                      
                      {link.path === '/student-support' && (
                        <>
                          {/* Basic Support section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('support')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Basic Support</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'support' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'support' && (
                              <div className="pl-2 py-1 space-y-1">
                                {studentSupportSubmenus.filter(item => item.category === 'support').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Committees section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('committees')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Committees</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'committees' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'committees' && (
                              <div className="pl-2 py-1 space-y-1">
                                {studentSupportSubmenus.filter(item => item.category === 'committees').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                          
                          <DropdownMenuSeparator />
                          
                          {/* Higher Education section */}
                          <DropdownMenuGroup>
                            <button 
                              onClick={() => toggleNestedSubmenu('higher-ed')}
                              className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded"
                            >
                              <span>Higher Education</span>
                              <ChevronRight 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                  activeSubmenuCategory === 'higher-ed' ? 'transform rotate-90' : ''
                                }`}
                              />
                            </button>
                            {activeSubmenuCategory === 'higher-ed' && (
                              <div className="pl-2 py-1 space-y-1">
                                {studentSupportSubmenus.filter(item => item.category === 'higher-ed').map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                    <Link href={subItem.path} className="w-full cursor-pointer">
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            )}
                          </DropdownMenuGroup>
                        </>
                      )}
                      
                      {link.path === '/training-placements' && (
                        <>
                          {/* Training section */}
                          <DropdownMenuGroup>
                            {trainingPlacementsSubmenus.map((subItem) => (
                              <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                <Link href={subItem.path} className="w-full cursor-pointer py-2 px-4">
                                  {subItem.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuGroup>
                        </>
                      )}
                      
                      {link.path === '/more' && (
                        <>
                          {/* More section */}
                          <DropdownMenuGroup>
                            {moreSubmenus.map((subItem) => (
                              <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                <Link href={subItem.path} className="w-full cursor-pointer py-2 px-4">
                                  {subItem.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuGroup>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    className={`relative group px-4 py-3 transition-all duration-300
                      ${location === link.path 
                        ? 'text-amber-600 bg-gray-100 font-semibold' 
                        : 'text-primary hover:text-amber-600 hover:bg-gray-100 font-medium'
                      }
                    `}
                  >
                    <span className="relative">
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full 
                        ${location === link.path ? 'w-full' : ''}
                      `}></span>
                    </span>
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className="p-2 rounded-md text-primary md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      


      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white overflow-y-auto transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Logo className="h-8 w-auto mr-2" />
              <span className="font-bold text-lg text-primary">JSS Polytechnic</span>
            </div>
            <button
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(link.path)}
                        className={`flex items-center justify-between w-full p-3 rounded-md text-gray-800 hover:bg-gray-100 
                          ${expandedMobileMenus[link.path] ? 'bg-gray-100' : ''}`}
                      >
                        <span className="font-medium">{link.label}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedMobileMenus[link.path] ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedMobileMenus[link.path] && (
                        <div className="mt-1 ml-4 pl-2 border-l-2 border-gray-200 space-y-1">
                          {/* Home submenu handling */}
                          {link.path === '/' && (
                            <>
                              <button 
                                onClick={() => toggleMobileCategory('about-home')}
                                className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                <span>About</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${
                                  activeMobileCategories['about-home'] ? 'transform rotate-180' : ''
                                }`} />
                              </button>
                              
                              {activeMobileCategories['about-home'] && (
                                <div className="mt-1 ml-2 space-y-1">
                                  {homeSubmenus.slice(0, 7).map((item) => (
                                    <Link 
                                      key={item.path}
                                      href={item.path}
                                      className="block p-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded"
                                      onClick={closeMenu}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                              
                              <button 
                                onClick={() => toggleMobileCategory('benefits')}
                                className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                <span>Employee Benefits</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${
                                  activeMobileCategories['benefits'] ? 'transform rotate-180' : ''
                                }`} />
                              </button>
                              
                              {activeMobileCategories['benefits'] && (
                                <div className="mt-1 ml-2 space-y-1">
                                  {homeSubmenus.slice(7, 10).map((item) => (
                                    <Link 
                                      key={item.path}
                                      href={item.path}
                                      className="block p-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded"
                                      onClick={closeMenu}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                              
                              <button 
                                onClick={() => toggleMobileCategory('reports')}
                                className="flex items-center justify-between w-full p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                <span>Reports and Downloads</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${
                                  activeMobileCategories['reports'] ? 'transform rotate-180' : ''
                                }`} />
                              </button>
                              
                              {activeMobileCategories['reports'] && (
                                <div className="mt-1 ml-2 space-y-1">
                                  {homeSubmenus.slice(10).map((item) => (
                                    <Link 
                                      key={item.path}
                                      href={item.path}
                                      className="block p-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded"
                                      onClick={closeMenu}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                          
                          {/* Other submenus handling */}
                          {link.path !== '/' && link.submenu?.map((subItem) => (
                            <Link 
                              key={subItem.path}
                              href={subItem.path}
                              className="block p-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded"
                              onClick={closeMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={link.path}
                      className="block p-3 rounded-md text-gray-800 hover:bg-gray-100 font-medium"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
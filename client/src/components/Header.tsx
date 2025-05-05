import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo from './Logo';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Submenu items for Home
  const homeSubmenus: SubmenuItem[] = [
    { path: '/about-jssmvp', label: 'About JSSMVP' },
    { path: '/vision-mission', label: 'Vision Mission of the Institute' },
    { path: '/messages', label: 'Messages' },
    { path: '/governance', label: 'Governance' },
    { path: '/aicte', label: 'All India Council for Technical Education (AICTE) and EOA' },
    { path: '/nba', label: 'NBA' },
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
    { path: '/calendar-2023-24', label: '2023-24 Even Semester', category: 'calendar' },
    
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
    { path: '/library', label: 'Library', category: 'facilities' },
    { path: '/hostel', label: 'Hostel', category: 'facilities' },
    { path: '/sports', label: 'Sports', category: 'facilities' },
    { path: '/infrastructure', label: 'Infrastructure', category: 'facilities' },
    { path: '/cs-engineering', label: 'Computer Science & Engineering', category: 'facilities' },
    { path: '/ec-engineering', label: 'Electronics & Communication Engineering', category: 'facilities' },
    { path: '/mechanical-engineering', label: 'Mechanical Engineering', category: 'facilities' },
    { path: '/ee-engineering', label: 'Electrical & Electronics Engineering', category: 'facilities' },
    { path: '/mechatronics-engineering', label: 'Mechatronics Engineering', category: 'facilities' },
    { path: '/is-engineering', label: 'Information Science & Engineering', category: 'facilities' },
    { path: '/civil-engineering', label: 'Civil Engineering', category: 'facilities' },
    { path: '/science-department', label: 'Science Department', category: 'facilities' },
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

  // Main navigation links
  const navLinks: NavLink[] = [
    { path: '/', label: 'Home', hasSubmenu: true, submenu: homeSubmenus },
    { path: '/academics', label: 'Academics', hasSubmenu: true, submenu: academicsSubmenus },
    { path: '/facilities', label: 'Facilities', hasSubmenu: true, submenu: facilitiesSubmenus },
    { path: '/student-support', label: 'Student Support', hasSubmenu: true, submenu: studentSupportSubmenus },
    { path: '/admissions', label: 'Admissions', hasSubmenu: false },
    { path: '/campus-life', label: 'Campus Life', hasSubmenu: false },
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="h-12 flex items-center justify-center">
                <Logo className="h-12 w-auto" />
              </div>
              <div>
                <p className="text-neutral-gray text-xs hidden md:block">Excellence in Technical Education</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.hasSubmenu ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className={`flex items-center text-primary hover:text-secondary font-medium transition duration-300 ${
                    location === link.path ? 'text-secondary font-semibold' : ''
                  }`}>
                    {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 bg-white text-primary">
                    {link.path === '/' ? (
                      // Home dropdown content with click-to-show nested submenus
                      <>
                        {/* About section */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('about-home')}
                            className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-primary hover:bg-neutral-100 rounded"
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
                              {link.submenu?.slice(0, 6).map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
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
                            className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-primary hover:bg-neutral-100 rounded"
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
                              {link.submenu?.slice(6, 9).map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Reports & Downloads section */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('reports')}
                            className="flex justify-between items-center w-full py-2 px-4 text-sm font-medium text-primary hover:bg-neutral-100 rounded"
                          >
                            <span>Reports & Downloads</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'reports' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'reports' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.slice(9).map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                      </>
                    ) : link.path === '/academics' ? (
                      // Academics dropdown content - only show categories as click toggles
                      <>
                        {/* Departments section */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('departments')}
                            className="dropdown-menu-button"
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
                              {link.submenu?.filter(item => item.category === 'departments').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Calendar of Events */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('calendar')}
                            className="dropdown-menu-button"
                          >
                            <span>Calendar of Events</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'calendar' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'calendar' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'calendar').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* JSS Collaborations */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('collaborations')}
                            className="dropdown-menu-button"
                          >
                            <span>JSS Collaborations</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'collaborations' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'collaborations' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'collaborations').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Professional Bodies */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('professional')}
                            className="dropdown-menu-button"
                          >
                            <span>Professional Bodies Draft</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'professional' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'professional' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'professional').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* About Academics */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('about')}
                            className="dropdown-menu-button"
                          >
                            <span>About</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'about' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'about' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'about').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Admission */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('admission')}
                            className="dropdown-menu-button"
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
                              {link.submenu?.filter(item => item.category === 'admission').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
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
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('disclosure')}
                            className="dropdown-menu-button"
                          >
                            <span>Mandatory Disclosure</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'disclosure' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'disclosure' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'disclosure').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                      </>
                    ) : link.path === '/facilities' ? (
                      // Facilities dropdown content
                      <>
                        {link.submenu?.map((subItem) => (
                          <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                            <Link href={subItem.path} className="w-full cursor-pointer">
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </>
                    ) : link.path === '/student-support' ? (
                      // Student Support dropdown content - with nested categories
                      <>
                        {/* Basic Support section */}
                        <DropdownMenuGroup>
                          <button 
                            onClick={() => toggleNestedSubmenu('support')}
                            className="dropdown-menu-button"
                          >
                            <span>Student Services</span>
                            <ChevronRight 
                              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                activeSubmenuCategory === 'support' ? 'transform rotate-90' : ''
                              }`}
                            />
                          </button>
                          {activeSubmenuCategory === 'support' && (
                            <div className="pl-2 py-1 space-y-1">
                              {link.submenu?.filter(item => item.category === 'support').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
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
                            className="dropdown-menu-button"
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
                              {link.submenu?.filter(item => item.category === 'committees').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
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
                            className="dropdown-menu-button"
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
                              {link.submenu?.filter(item => item.category === 'higher-ed').map((subItem) => (
                                <DropdownMenuItem key={subItem.path} asChild className="bg-white hover:bg-gray-100 text-gray-800">
                                  <Link href={subItem.path} className="w-full cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          )}
                        </DropdownMenuGroup>
                      </>
                    ) : null}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`text-primary hover:text-secondary font-medium transition duration-300 ${
                    location === link.path ? 'text-secondary font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary focus:outline-none" 
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
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-3">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasSubmenu ? (
                  <div>
                    <button 
                      className={`flex items-center justify-between w-full py-2 px-4 text-primary hover:bg-neutral-100 rounded ${
                        location === link.path ? 'bg-neutral-100 text-secondary font-semibold' : ''
                      }`}
                      onClick={() => toggleMobileSubmenu(link.path)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedMobileMenus[link.path] ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Submenu sections for mobile */}
                    {expandedMobileMenus[link.path] && (
                      <div className="ml-4 mt-2 space-y-4">
                        {link.path === '/' ? (
                          // Home mobile submenu
                          <>
                            {/* About section */}
                            <div className="space-y-1">
                              <button 
                                onClick={() => toggleMobileCategory('about-home')}
                                className="dropdown-menu-button"
                              >
                                <span>About</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['about-home'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['about-home'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.slice(0, 6).map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Employee Benefits section */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('benefits')}
                                className="dropdown-menu-button"
                              >
                                <span>Employee Benefits</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['benefits'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['benefits'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.slice(6, 9).map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Reports and Downloads section */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('reports')}
                                className="dropdown-menu-button"
                              >
                                <span>Reports & Downloads</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['reports'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['reports'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.slice(9).map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        ) : link.path === '/academics' ? (
                          // Academics mobile submenu
                          <>
                            {/* Departments section */}
                            <div className="space-y-1">
                              <button 
                                onClick={() => toggleMobileCategory('departments')}
                                className="dropdown-menu-button"
                              >
                                <span>Departments</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['departments'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['departments'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'departments').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Calendar of Events */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('calendar')}
                                className="dropdown-menu-button"
                              >
                                <span>Calendar of Events</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['calendar'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['calendar'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'calendar').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* JSS Collaborations */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('collaborations')}
                                className="dropdown-menu-button"
                              >
                                <span>JSS Collaborations</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['collaborations'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['collaborations'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'collaborations').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Professional Bodies */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('professional')}
                                className="dropdown-menu-button"
                              >
                                <span>Professional Bodies Draft</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['professional'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['professional'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'professional').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* About Academics */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('about')}
                                className="dropdown-menu-button"
                              >
                                <span>About</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['about'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['about'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'about').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Admission */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('admission')}
                                className="dropdown-menu-button"
                              >
                                <span>Admission</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['admission'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['admission'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'admission').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Mandatory Disclosure */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('disclosure')}
                                className="dropdown-menu-button"
                              >
                                <span>Mandatory Disclosure</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['disclosure'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['disclosure'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'disclosure').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        ) : link.path === '/facilities' ? (
                          // Facilities mobile submenu
                          <div className="space-y-2">
                            {link.submenu?.map((subItem) => (
                              <Link 
                                key={subItem.path} 
                                href={subItem.path}
                                className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ) : link.path === '/student-support' ? (
                          // Student Support mobile submenu with nested categories
                          <>
                            {/* Basic Support mobile section */}
                            <div className="space-y-1">
                              <button 
                                onClick={() => toggleMobileCategory('mobile-support')}
                                className="dropdown-menu-button"
                              >
                                <span>Student Services</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['mobile-support'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['mobile-support'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'support').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Committees mobile section */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('mobile-committees')}
                                className="dropdown-menu-button"
                              >
                                <span>Committees</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['mobile-committees'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['mobile-committees'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'committees').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Higher Education mobile section */}
                            <div className="space-y-1 mt-2">
                              <button 
                                onClick={() => toggleMobileCategory('mobile-higher-ed')}
                                className="dropdown-menu-button"
                              >
                                <span>Higher Education</span>
                                <ChevronRight 
                                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                    activeMobileCategories['mobile-higher-ed'] ? 'transform rotate-90' : ''
                                  }`}
                                />
                              </button>
                              {activeMobileCategories['mobile-higher-ed'] && (
                                <div className="mt-1 pl-4 space-y-1">
                                  {link.submenu?.filter(item => item.category === 'higher-ed').map((subItem) => (
                                    <Link 
                                      key={subItem.path} 
                                      href={subItem.path}
                                      className="block py-1 px-4 text-sm text-primary hover:bg-neutral-100 rounded"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        ) : null}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.path}
                    className={`block py-2 px-4 text-primary hover:bg-neutral-100 rounded ${
                      location === link.path ? 'bg-neutral-100 text-secondary font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

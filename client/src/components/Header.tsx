import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  // Main navigation links
  const navLinks: NavLink[] = [
    { path: '/', label: 'Home', hasSubmenu: true, submenu: homeSubmenus },
    { path: '/about', label: 'About', hasSubmenu: false },
    { path: '/academics', label: 'Academics', hasSubmenu: true, submenu: academicsSubmenus },
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
                  <DropdownMenuContent className="w-72">
                    {link.path === '/' ? (
                      // Home dropdown content
                      <>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>About</DropdownMenuLabel>
                          {link.submenu?.slice(0, 6).map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Employee Benefits</DropdownMenuLabel>
                          {link.submenu?.slice(6, 9).map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Reports & Downloads</DropdownMenuLabel>
                          {link.submenu?.slice(9).map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </>
                    ) : link.path === '/academics' ? (
                      // Academics dropdown content
                      <>
                        {/* Departments section */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Departments</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'departments').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Calendar of Events */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Calendar of Events</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'calendar').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* JSS Collaborations */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>JSS Collaborations</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'collaborations').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Professional Bodies */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Professional Bodies Draft</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'professional').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* About Academics */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>About</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'about').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Admission */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Admission</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'admission').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                        
                        <DropdownMenuSeparator />
                        
                        {/* Mandatory Disclosure */}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Mandatory Disclosure</DropdownMenuLabel>
                          {link.submenu?.filter(item => item.category === 'disclosure').map((subItem) => (
                            <DropdownMenuItem key={subItem.path} asChild>
                              <Link href={subItem.path} className="w-full cursor-pointer">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
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
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">About</h4>
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
                            
                            {/* Employee Benefits section */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Employee Benefits</h4>
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
                            
                            {/* Reports and Downloads section */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Reports & Downloads</h4>
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
                          </>
                        ) : link.path === '/academics' ? (
                          // Academics mobile submenu
                          <>
                            {/* Departments section */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Departments</h4>
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
                            
                            {/* Calendar of Events */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Calendar of Events</h4>
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
                            
                            {/* JSS Collaborations */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">JSS Collaborations</h4>
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
                            
                            {/* Professional Bodies */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Professional Bodies Draft</h4>
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
                            
                            {/* About Academics */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">About</h4>
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
                            
                            {/* Admission */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Admission</h4>
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
                            
                            {/* Mandatory Disclosure */}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-neutral-600 px-4 py-1">Mandatory Disclosure</h4>
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

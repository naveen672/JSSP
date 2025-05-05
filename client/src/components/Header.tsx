import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

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
  const homeSubmenus = [
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

  // Main navigation links
  const navLinks = [
    { path: '/', label: 'Home', hasSubmenu: true, submenu: homeSubmenus },
    { path: '/about', label: 'About', hasSubmenu: false },
    { path: '/academics', label: 'Academics', hasSubmenu: false },
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
                    {/* About and Vision section */}
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
                    
                    {/* Employee Benefits section */}
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
                    
                    {/* Reports and Downloads section */}
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

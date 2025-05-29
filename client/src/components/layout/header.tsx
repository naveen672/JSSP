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
import { Menu, University, ChevronDown, BookOpen, Users, GraduationCap, Calendar, FileText, Trophy, Home, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link href={href}>
      <NavigationMenuLink className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        isActive(href) && "bg-accent/50 text-accent-foreground",
        className
      )}>
        {children}
      </NavigationMenuLink>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center">
                <University className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Excellence University</h1>
                <p className="text-xs text-gray-600">Inspiring Excellence Since 1965</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  Academics <ChevronDown className="ml-1 h-3 w-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <NavigationMenuLink asChild>
                      <Link href="/academics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Departments
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our academic departments and programs
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/academics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Faculty
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Meet our distinguished faculty members
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/academics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Programs
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Undergraduate and graduate programs
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/academics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Academic Calendar
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Important dates and schedules
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  Admissions <ChevronDown className="ml-1 h-3 w-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <NavigationMenuLink asChild>
                      <Link href="/admissions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Apply Online
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Start your application process
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/admissions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Requirements
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Admission requirements and criteria
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/admissions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Trophy className="h-4 w-4 mr-2" />
                          Scholarships
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Financial aid and scholarship opportunities
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/admissions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Important Dates
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Application deadlines and dates
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/about">About</NavLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavLink href="/campus-life">Campus Life</NavLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/">
                  <div className="flex items-center space-x-2 pb-4">
                    <University className="h-6 w-6 text-primary" />
                    <span className="font-bold text-primary">Excellence University</span>
                  </div>
                </Link>
                
                <Link href="/academics">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileOpen(false)}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Academics
                  </Button>
                </Link>
                
                <Link href="/admissions">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileOpen(false)}>
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Admissions
                  </Button>
                </Link>
                
                <Link href="/about">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileOpen(false)}>
                    <University className="h-4 w-4 mr-2" />
                    About
                  </Button>
                </Link>
                
                <Link href="/campus-life">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileOpen(false)}>
                    <Trophy className="h-4 w-4 mr-2" />
                    Campus Life
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setMobileOpen(false)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

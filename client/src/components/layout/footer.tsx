import { Link } from "wouter";
import { University, Facebook, Twitter, Linkedin, Youtube, BookOpen, Users, Calendar, ExternalLink, MapPin, Phone, Mail, Eye, Smartphone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import jssLogo1 from "@assets/image_1748508966675.png";
import qrCodeImage from "@assets/image_1748554546191.png";
import socialQRCodes from "@assets/image_1748554552757.png";

export default function Footer() {
  const { data: visitorStats } = useQuery({
    queryKey: ["/api/visitor-stats"],
  });

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                <img 
                  src={jssLogo1} 
                  alt="JSS Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">JSS POLYTECHNIC</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to technical excellence and innovation since 1963. 
              Shaping tomorrow's engineers and technical professionals through quality education.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://m.facebook.com/jss.polytechnic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/jsspolytechnicmysuru?igsh=MTMxaDdnZnB6enUycg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jsspolytechnicmysuru418suru-91197a260/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@jsspolytechnicmysore8070?si=43hsOYIH66cuUUNl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-accent transition-colors flex items-center">
                    <University className="h-4 w-4 mr-2" />
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="text-gray-300 hover:text-accent transition-colors flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Academic Programs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="text-gray-300 hover:text-accent transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Faculty
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life">
                  <span className="text-gray-300 hover:text-accent transition-colors flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Campus Life
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Student Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Library</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Student Portal</a>
              </li>
              <li>
                <Link href="/academics">
                  <span className="text-gray-300 hover:text-accent transition-colors">Academic Calendar</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Support Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Career Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-accent" />
                <div>
                  <span className="block">JSS TI's Campus</span>
                  <span className="block">Mysuru-570006</span>
                  <span className="block">Karnataka</span>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>0821-2548318</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 mr-2 text-accent" />
                <span>+91-9686677237</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>jssp418@yahoo.co.in</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2 text-accent" />
                <span>Timings: 08:00 AM to 05:45 PM</span>
              </div>
            </div>
          </div>


        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-300 text-sm">
              &copy; 2024 JSS Polytechnic, Mysore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
          
          {/* Visitor Counter */}
          <div className="flex justify-center">
            <div className="bg-accent/10 rounded-lg px-4 py-2 flex items-center space-x-2">
              <Eye className="h-4 w-4 text-accent" />
              <span className="text-sm text-gray-300">
                Total Visitors: <span className="text-accent font-semibold">{(visitorStats as any)?.total || "Loading..."}</span>
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-300">
                Today: <span className="text-accent font-semibold">{(visitorStats as any)?.today || "0"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

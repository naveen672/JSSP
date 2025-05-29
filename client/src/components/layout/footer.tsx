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
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
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

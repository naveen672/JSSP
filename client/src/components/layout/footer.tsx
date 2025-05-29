import { Link } from "wouter";
import { University, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent text-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <University className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Excellence University</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to academic excellence and character development since 1965. 
              Shaping tomorrow's leaders through innovation and education.
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
                  <span className="text-gray-300 hover:text-accent transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="text-gray-300 hover:text-accent transition-colors">Academic Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/academics">
                  <span className="text-gray-300 hover:text-accent transition-colors">Faculty</span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life">
                  <span className="text-gray-300 hover:text-accent transition-colors">Campus Life</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Research</a>
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
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="block">📍 123 Excellence Drive</span>
                <span className="block">University City, State 12345</span>
              </p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@excellenceuniversity.edu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 Excellence University. All rights reserved.
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
      </div>
    </footer>
  );
}

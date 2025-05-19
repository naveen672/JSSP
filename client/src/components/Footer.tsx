import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Programs', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Facilities', path: '/campus-life' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const contactInfo = {
    address: 'JSS Technical Institutions Campus, University of Mysuru, Manasagangothri, Mysuru - 570006, Karnataka, India',
    phone: '+91 9876543210',
    email: 'principal@jsspolytechnic.ac.in',
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-gradient-to-b from-primary/95 to-primary text-white pt-16 pb-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col items-center sm:items-start space-y-3 mb-6">
              <div className="bg-white p-3 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300">
                <Logo className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-white/90 mb-4 text-center sm:text-left">
              Established in 1986, JSS Polytechnic provides technical education and expertise for students pursuing diploma courses in various engineering disciplines.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-white hover:text-secondary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="bg-white/0 group-hover:bg-white/20 w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-white/20 pb-2">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="mr-3 mt-1 p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <MapPin className="shrink-0" size={18} />
                </div>
                <span className="text-white/80 group-hover:text-white transition-all duration-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-3 p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Phone className="shrink-0" size={18} />
                </div>
                <span className="text-white/80 group-hover:text-white transition-all duration-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-3 p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Mail className="shrink-0" size={18} />
                </div>
                <span className="text-white/80 group-hover:text-white transition-all duration-300">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 border-b border-white/20 pb-2">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive updates on admissions, events, and more.
            </p>
            <form onSubmit={handleSubscribe} className="group">
              <div className="flex flex-col space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="px-4 py-2 rounded-md focus:outline-none text-gray-800 bg-white/90 focus:bg-white transition-all duration-300 border-0"
                  required
                />
                <Button
                  type="submit"
                  className="btn-secondary font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} JSS Polytechnic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

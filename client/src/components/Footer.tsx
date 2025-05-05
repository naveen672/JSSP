import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
    address: '123 Education Street, Mysore, Karnataka - 570006, India',
    phone: '+91 8765432100',
    email: 'info@jsspolytechnic.edu.in',
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m0 2.18l6 3.27h-2.18l-3.82-2.09l-3.82 2.09H6l6-3.27m1 14.05l-5-2.73v-4.77L12 15l4-2.27v4.77l-3 1.73"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl">JSS POLYTECHNIC</h3>
            </div>
            <p className="text-neutral-100 opacity-80 mb-4">
              Empowering students with technical knowledge and skills for a successful career since 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-neutral-100 opacity-80 hover:opacity-100 hover:text-secondary transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 shrink-0" size={20} />
                <span className="text-neutral-100 opacity-80">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 shrink-0" size={20} />
                <span className="text-neutral-100 opacity-80">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 shrink-0" size={20} />
                <span className="text-neutral-100 opacity-80">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Newsletter</h3>
            <p className="text-neutral-100 opacity-80 mb-4">
              Subscribe to our newsletter to receive updates on admissions, events, and more.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="px-4 py-2 rounded-md focus:outline-none text-neutral-dark"
                  required
                />
                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-dark text-white font-medium px-4 py-2 rounded-md transition duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-light pt-8 text-center">
          <p className="text-neutral-100 opacity-80">&copy; {new Date().getFullYear()} JSS Polytechnic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

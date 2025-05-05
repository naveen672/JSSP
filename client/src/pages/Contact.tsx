import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/collegeData';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiry: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real app, this would send the data to the server
  };

  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Our Location</h3>
              <p className="text-neutral-gray">123 Education Street, Mysore, Karnataka - 570006, India</p>
            </div>
            
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Phone</h3>
              <p className="text-neutral-gray mb-2">General Inquiries: +91 8765432100</p>
              <p className="text-neutral-gray">Admissions: +91 8765432101</p>
            </div>
            
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Email</h3>
              <p className="text-neutral-gray mb-2">info@jsspolytechnic.edu.in</p>
              <p className="text-neutral-gray">admissions@jsspolytechnic.edu.in</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="font-heading font-bold text-lg mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="inquiry" className="block mb-2 font-medium">Inquiry Type</label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="academics">Academic Information</SelectItem>
                        <SelectItem value="facilities">Campus Facilities</SelectItem>
                        <SelectItem value="placement">Placement Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Enter your message" 
                      rows={5} 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-dark flex items-center"
                  >
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map and Office Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Find Us</h2>
              <div className="bg-neutral rounded-lg overflow-hidden shadow-md mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1368547669297!2d76.63968171432787!3d12.327718791251954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ae94fffffff%3A0xfffffff!2sMysore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="w-full"
                  title="JSS Polytechnic Location"
                ></iframe>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-heading font-bold text-primary">Office Hours</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday & Holidays:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-heading font-semibold mb-2">Admission Office</h4>
                  <p className="text-neutral-gray mb-4">
                    For admission inquiries, our dedicated team is available from Monday to Saturday, 9:00 AM to 4:00 PM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Department Contacts</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              Get in touch with specific departments for specialized inquiries
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Contact Person</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Mechanical Engineering</td>
                  <td className="p-4">Dr. Rajesh Kumar</td>
                  <td className="p-4">mech@jsspolytechnic.edu.in</td>
                  <td className="p-4">+91 8765432102</td>
                </tr>
                <tr className="border-b bg-neutral">
                  <td className="p-4">Computer Science</td>
                  <td className="p-4">Prof. Meena Sharma</td>
                  <td className="p-4">cs@jsspolytechnic.edu.in</td>
                  <td className="p-4">+91 8765432103</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Electrical Engineering</td>
                  <td className="p-4">Dr. Vijay Patil</td>
                  <td className="p-4">electrical@jsspolytechnic.edu.in</td>
                  <td className="p-4">+91 8765432104</td>
                </tr>
                <tr className="border-b bg-neutral">
                  <td className="p-4">Civil Engineering</td>
                  <td className="p-4">Prof. Anand Kumar</td>
                  <td className="p-4">civil@jsspolytechnic.edu.in</td>
                  <td className="p-4">+91 8765432105</td>
                </tr>
                <tr>
                  <td className="p-4">Placement Cell</td>
                  <td className="p-4">Mr. Suresh Varma</td>
                  <td className="p-4">placement@jsspolytechnic.edu.in</td>
                  <td className="p-4">+91 8765432106</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

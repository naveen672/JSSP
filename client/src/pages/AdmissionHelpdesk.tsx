import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { PhoneCall, Clock, Mail, MapPin } from "lucide-react";

export default function AdmissionHelpdesk() {
  return (
    <>
      <Helmet>
        <title>Admission Help Desk - JSS Polytechnic</title>
        <meta name="description" content="Contact information and support for admission inquiries at JSS Polytechnic for the academic year 2024-2025." />
      </Helmet>

      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Admissions", path: "/admissions" },
          { label: "Admission Help Desk", path: "/admission-helpdesk" }
        ]} 
      />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Admission Help Desk
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-6">
                Admission Help Desk 2024-25
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  JSS Polytechnic, Mysuru admission for the year 2024-2025 is now open. For admission related 
                  information, parents/students are requested to contact any of the admission committee members 
                  listed below.
                </p>
                
                <div className="bg-blue-50 p-5 rounded-lg my-6 flex items-center">
                  <div className="mr-4 text-blue-600">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Office Hours:</h3>
                    <p>The admission office is open for admission assistance between 9 am and 4.45 pm from Monday to Friday & 9AM to 1PM on Saturdays.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-6">
                Contact Admission Committee Members
              </h2>
              
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Sl No</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Name</th>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Contact No</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 text-gray-700">1</td>
                        <td className="py-3 px-4 text-gray-700">Principal</td>
                        <td className="py-3 px-4 text-gray-700">9844333115</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">2</td>
                        <td className="py-3 px-4 text-gray-700">Umesh</td>
                        <td className="py-3 px-4 text-gray-700">9164333359</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <PhoneCall className="text-primary mr-3" size={24} />
                      <h3 className="text-lg font-semibold">Call Us</h3>
                    </div>
                    <p className="text-gray-700">
                      For immediate assistance, you can contact us at the numbers listed above.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Mail className="text-primary mr-3" size={24} />
                      <h3 className="text-lg font-semibold">Email Us</h3>
                    </div>
                    <p className="text-gray-700">
                      You can also reach us by email at: <a href="mailto:jsspolytechnic@gmail.com" className="text-primary hover:underline">jsspolytechnic@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-6">
                Campus Location
              </h2>
              
              <div className="flex items-center mb-6">
                <MapPin className="text-primary mr-3" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-700">
                    JSS Polytechnic for Women, JSS Technical Institutions Campus, 
                    Mysuru - 570006, Karnataka, India
                  </p>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.223714320616!2d76.6126988!3d12.300795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70092a920879%3A0xb3d13bc8ef9e8!2sJSS%20Polytechnic%20for%20Women!5e0!3m2!1sen!2sin!4v1641796990229!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
            
            <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Start Your Application Process
              </h2>
              <p className="mb-6 text-gray-700">
                We look forward to helping you begin your educational journey at JSS Polytechnic.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/college-prospectus" 
                  className="px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  View College Prospectus
                </a>
                <a 
                  href="/admission-details" 
                  className="px-5 py-2 bg-white text-primary font-medium rounded-md border border-primary hover:bg-gray-50 transition-colors duration-300"
                >
                  See Admission Details
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
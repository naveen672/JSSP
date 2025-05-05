import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ExternalLink } from "lucide-react";

export default function MandatoryDisclosure() {
  return (
    <>
      <Helmet>
        <title>Mandatory Disclosure - JSS Polytechnic</title>
        <meta name="description" content="Mandatory Disclosure information for JSS Polytechnic, Mysuru as per regulatory requirements." />
      </Helmet>

      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "Mandatory Disclosure", path: "/mandatory-disclosure" }
        ]} 
      />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Mandatory Disclosure
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-3 mb-6">
                JSS Polytechnic Mandatory Disclosure
              </h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-6">
                  As per the regulatory requirements, JSS Polytechnic, Mysuru provides the following mandatory 
                  disclosure document that contains detailed information about our institution, including:
                </p>
                
                <ul className="space-y-2 list-disc pl-6 mb-8">
                  <li>Institutional information</li>
                  <li>Infrastructure details</li>
                  <li>Course offerings and accreditation status</li>
                  <li>Faculty information</li>
                  <li>Fee structure</li>
                  <li>Admission procedures</li>
                  <li>Facilities available</li>
                  <li>Results and placements</li>
                </ul>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                  <h3 className="text-xl font-bold text-primary mb-3">Access the Complete Document</h3>
                  <p className="mb-4">
                    Click the link below to view the complete Mandatory Disclosure document for JSS Polytechnic, Mysuru:
                  </p>
                  <a 
                    href="https://docs.google.com/document/d/1_Tnb6z_b1g5xH9Nz_EYgBEezTKtjov71/edit?usp=drive_link&ouid=107979518854372710184&rtpof=true&sd=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    View Mandatory Disclosure Document
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Note:</h3>
                  <p className="text-gray-700">
                    This disclosure is made in compliance with the regulatory requirements and contains 
                    information that is updated periodically. For the most recent information, 
                    please contact the institution directly.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
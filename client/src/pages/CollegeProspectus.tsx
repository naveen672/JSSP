import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
// Path to the PDF file
const brochurePdf = "/assets/brochur or college prospector.pdf";

export default function CollegeProspectus() {
  return (
    <>
      <Helmet>
        <title>College Prospectus - JSS Polytechnic</title>
        <meta name="description" content="JSS Polytechnic College Prospectus providing detailed information about courses, facilities, and admission procedures." />
      </Helmet>

      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Admissions", path: "/admissions" },
          { label: "College Prospectus", path: "/college-prospectus" }
        ]} 
      />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            College Prospectus
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-primary mb-6">
                JSS Polytechnic College Prospectus 2024-25
              </h2>
              
              <div className="mb-8 text-gray-700">
                <p className="mb-4">
                  Our college prospectus provides comprehensive information about:
                </p>
                <ul className="text-left max-w-lg mx-auto space-y-2 list-disc pl-6">
                  <li>Courses offered and curriculum</li>
                  <li>Admission procedures and eligibility criteria</li>
                  <li>Facilities and infrastructure</li>
                  <li>Faculty and academic excellence</li>
                  <li>Placements and career opportunities</li>
                  <li>Student life and campus activities</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Key Information</h3>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div>
                    <p className="font-semibold">Medium of Instruction:</p>
                    <p>English</p>
                  </div>
                  <div>
                    <p className="font-semibold">Level of Award:</p>
                    <p>Diploma- Board of Technical Education, Government of Karnataka, Approved by AICTE, New Delhi</p>
                  </div>
                  <div>
                    <p className="font-semibold">Duration of the Course:</p>
                    <p>Six semesters (i.e. 3 years)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="mb-4 font-medium">Download the complete prospectus:</p>
                <a 
                  href={brochurePdf} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Download Prospectus PDF
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Click the button above to view or download the prospectus
                </p>
              </div>
            </section>
            
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Why Choose JSS Polytechnic?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Academic Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive curriculum designed to meet industry requirements with experienced faculty 
                    providing quality education.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Modern Infrastructure</h3>
                  <p className="text-gray-600 text-sm">
                    Well-equipped laboratories, workshops, library, and computing facilities to enhance 
                    the learning experience.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Industry Connections</h3>
                  <p className="text-gray-600 text-sm">
                    Strong industry partnerships for internships, training programs, and placement opportunities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Holistic Development</h3>
                  <p className="text-gray-600 text-sm">
                    Focus on all-round development through extracurricular activities, sports, and cultural events.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Begin Your Journey with JSS Polytechnic
              </h2>
              <p className="mb-6 text-gray-700">
                For more information about admissions, please visit our Admission Details and Help Desk pages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/admission-details" 
                  className="px-5 py-2 bg-primary/10 text-primary font-medium rounded-md hover:bg-primary/20 transition-colors duration-300"
                >
                  Admission Details
                </a>
                <a 
                  href="/admission-helpdesk" 
                  className="px-5 py-2 bg-primary/10 text-primary font-medium rounded-md hover:bg-primary/20 transition-colors duration-300"
                >
                  Admission Help Desk
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
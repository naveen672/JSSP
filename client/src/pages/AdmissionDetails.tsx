import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
// Path to the PDF file
const brochurePdf = "/assets/brochur or college prospector.pdf";

export default function AdmissionDetails() {
  return (
    <>
      <Helmet>
        <title>Admission Details - JSS Polytechnic</title>
        <meta name="description" content="Detailed information about the admission process, eligibility criteria, and application procedures for JSS Polytechnic." />
      </Helmet>

      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Admissions", path: "/admissions" },
          { label: "Admission Details", path: "/admission-details" }
        ]} 
      />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Admission Details
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Admission Information 2024-25
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  JSS Polytechnic, Mysuru provides quality technical education with comprehensive 
                  facilities and experienced faculty members. We are now accepting applications for 
                  the academic year 2024-25.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                  <p className="font-medium">Please refer to our College Prospectus for detailed information about admissions.</p>
                </div>
                
                <div className="flex justify-center my-6">
                  <a 
                    href={brochurePdf} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 transition-colors duration-300"
                  >
                    View Admission Details in Prospectus
                  </a>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Courses Offered
              </h2>
              
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Course</th>
                        <th className="py-3 px-4 border-b text-center font-medium text-gray-700">Duration</th>
                        <th className="py-3 px-4 border-b text-center font-medium text-gray-700">Intake</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Computer Science & Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">60</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Electronics & Communication Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">60</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Mechanical Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">60</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Information Science & Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Civil Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">40</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-700">Electrical & Electronics Engineering</td>
                        <td className="py-3 px-4 text-center text-gray-700">3 Years</td>
                        <td className="py-3 px-4 text-center text-gray-700">40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Admission Process
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <span className="font-medium">Obtain Prospectus:</span> Download the prospectus or visit our 
                    campus to get the information brochure and application form.
                  </li>
                  <li>
                    <span className="font-medium">Submit Application:</span> Complete the application form with 
                    all required documents and submit it to the admission office.
                  </li>
                  <li>
                    <span className="font-medium">Document Verification:</span> Present original documents for 
                    verification as mentioned in the prospectus.
                  </li>
                  <li>
                    <span className="font-medium">Counseling:</span> Attend the counseling session as per the 
                    schedule communicated to you.
                  </li>
                  <li>
                    <span className="font-medium">Fee Payment:</span> Complete the fee payment process after seat 
                    allocation to confirm your admission.
                  </li>
                </ol>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h3 className="font-semibold text-primary mb-2">Required Documents:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>SSLC Marks Card (Original and photocopy)</li>
                    <li>Transfer Certificate</li>
                    <li>Migration Certificate (if applicable)</li>
                    <li>Caste Certificate (if applicable)</li>
                    <li>Income Certificate (if applicable)</li>
                    <li>Recent passport size photographs</li>
                    <li>Aadhar Card</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Need Assistance?
              </h2>
              <p className="mb-6 text-gray-700">
                For inquiries regarding admission, please contact our Admission Help Desk.
              </p>
              <a 
                href="/admission-helpdesk" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Admission Help Desk
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
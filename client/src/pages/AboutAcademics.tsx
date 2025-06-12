import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutAcademics() {
  return (
    <>
      <Helmet>
        <title>About Academics - JSS Polytechnic</title>
        <meta name="description" content="Information about the academic structure and governance at JSS Polytechnic, including the Academic Board and its functions." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            About Academics
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {/* Introduction Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Academic Board
              </h2>
              <p className="text-gray-700 mb-6">
                The Institute has constituted the Academic Board to review and approve the academic related matters 
                through meetings when and where required.
              </p>

              {/* Academic Board Composition */}
              <h3 className="text-xl font-semibold text-primary mb-4">
                The constitution of the Academic Board:
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Sl. No.</th>
                      <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Constitution</th>
                      <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">1.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Principal</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Chairman</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">2.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">One Representative from the State Board of Technical Examination</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">3.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">One nominee from ISTE</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">4.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">One member from NITTTR, Chennai</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">5.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Two experts from Industry</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">6.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of ME</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">7.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of E&C</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">8.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of CE</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">9.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of CS</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">10.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of IS</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">11.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of E&E</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">12.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">HOD of MC</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">13.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">One Senior Faculty of the Institution</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">14.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">One Representative of the Alumni of the Institution</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700">15.</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Controller of the Examination of the Institute</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Member Secretary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Powers and Functions Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Powers and Functions of the Academic Board
              </h2>
              <p className="text-gray-700 mb-4">
                The Academic Board shall have the following Powers and functions:
              </p>
              <ul className="space-y-3 list-disc pl-6 text-gray-700">
                <li>
                  To frame curricula for the courses based on the guidelines of Directorate of Technical Education 
                  and get them approved by the Curriculum Development Cell, DTE, Govt. of Karnataka.
                </li>
                <li>
                  To decide the teaching methods and sequence.
                </li>
                <li>
                  To evolve and adopt suitable practical and project-oriented training programs, educational tours etc.
                </li>
                <li>
                  To update the course contents according to the changing needs and communicate them to the DTE.
                </li>
                <li>
                  To device suitable methods of continuous internal evaluation system.
                </li>
                <li>
                  To device suitable forms of records for entering marks/grades obtained by the students in the 
                  various tests and examinations.
                </li>
                <li>
                  To appoint such other adhoc or standing committees to perform such functions as it may delegate 
                  in both Curriculum formation and evaluation.
                </li>
                <li>
                  To perform such other functions as may be prescribed by the Directorate of Technical Education 
                  for maintaining high standard of technician training.
                </li>
              </ul>
            </section>

            {/* Additional Information Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Academic Excellence
              </h2>
              <p className="text-gray-700 mb-4">
                JSS Polytechnic is committed to maintaining high academic standards through:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Innovative Teaching</h3>
                  <p className="text-gray-600 text-sm">
                    Our faculty employs modern teaching methods to ensure effective knowledge transfer and 
                    practical skill development.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Industry Collaboration</h3>
                  <p className="text-gray-600 text-sm">
                    Regular industry inputs help us keep our curriculum relevant to current industry needs and practices.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Practical Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Emphasis on hands-on training and practical sessions in well-equipped laboratories.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">Regular Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Continuous evaluation system to monitor student progress and improve learning outcomes.
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
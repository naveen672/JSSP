import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { ClipboardCheck, Users, CheckSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function IQAC() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Internal Quality Assurance Cell (IQAC) | JSS Polytechnic</title>
        <meta name="description" content="Internal Quality Assurance Cell (IQAC) at JSS Polytechnic ensures academic quality and standards through continuous assessment and improvement." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <ClipboardCheck className="mr-3" size={32} />
            Internal Quality Assurance Cell (IQAC)
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'IQAC', path: '/iqac' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">About IQAC</h2>
              <p className="mb-4 text-gray-800">
                The Internal Quality Assurance Cell was constituted by the Institute to inspect / verify all the academic related documents such as IA test books, attendance registers, course plan, continuous internal evaluation sheets, CO attainments of courses, time tables, practical records, academic calendars and other academic documents related to the department etc.
              </p>
              <p className="mb-4 text-gray-800">
                The committee also prepares the detailed proceedings of the verification process and further action will be initiated depending on the findings. This ensures that quality is maintained consistently across all academic activities of the institution.
              </p>
            </section>
            
            {/* IQAC Members Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Users className="mr-2" size={24} />
                IQAC Committee Members
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">SI No</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Name</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">1</td>
                      <td className="py-3 px-4 border border-gray-300">Sri Prashanth Kumar malvade</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/ME</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">2</td>
                      <td className="py-3 px-4 border border-gray-300">Smt Pavithra</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/EC</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">3</td>
                      <td className="py-3 px-4 border border-gray-300">Smt Shewtha M P</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/EE</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">4</td>
                      <td className="py-3 px-4 border border-gray-300">Smt Maheshwari</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/MC</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">5</td>
                      <td className="py-3 px-4 border border-gray-300">Sri Roopesh Kumar</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/CE</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">6</td>
                      <td className="py-3 px-4 border border-gray-300">Smt Shruthi M</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/IS</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">7</td>
                      <td className="py-3 px-4 border border-gray-300">Smt Sowmyashree</td>
                      <td className="py-3 px-4 border border-gray-300">Lecturer/CS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Roles & Responsibilities */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <CheckSquare className="mr-2" size={24} />
                Roles & Responsibilities of IQAC
              </h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-800">
                <li>Improvement of quality of teaching by regular inputs to all concerned on feedback of students.</li>
                <li>Providing inputs for better practices in administration for effective resource utilization of better services to the staff and students.</li>
                <li>Providing inputs for academic audit and analysis of results for improvement in the areas found weak.</li>
                <li>Verifying and ensuring the quality of academic documents across all departments.</li>
                <li>Monitoring the continuous internal evaluation process to maintain fairness and consistency.</li>
                <li>Reviewing course outcomes and their attainment to ensure educational objectives are being met.</li>
                <li>Suggesting improvements in academic and administrative processes based on quality assessments.</li>
                <li>Facilitating the creation of a learner-centric environment conducive for quality education.</li>
              </ul>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Quality Initiatives</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Academic Audits</h3>
                  <p className="text-gray-700">Regular internal audits to ensure quality in teaching-learning processes</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Faculty Development</h3>
                  <p className="text-gray-700">Workshops and training sessions to enhance teaching methodologies</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Student Feedback</h3>
                  <p className="text-gray-700">Systematic collection and analysis of student feedback for continual improvement</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Documentation</h3>
                  <p className="text-gray-700">Standardized documentation practices for academic and administrative processes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">IQAC Activities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Regular committee meetings to review quality parameters</li>
                <li>Documentation verification drives across departments</li>
                <li>Analysis of student performance data</li>
                <li>Faculty performance assessment</li>
                <li>Development of quality benchmarks for various academic activities</li>
                <li>Organizing workshops on quality-related themes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
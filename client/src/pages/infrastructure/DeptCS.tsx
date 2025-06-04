import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Building, Monitor, Users, ShieldCheck, Computer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function DeptCS() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Computer Science Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Computer Science Department infrastructure at JSS Polytechnic - Modern classrooms, computer labs, and facilities for quality technical education." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Computer className="mr-3" size={32} />
            Computer Science Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Computer Science', path: '/infrastructure/dept-cs' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Computer Science Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Computer Science Department at JSS Polytechnic is equipped with state-of-the-art facilities to provide students with comprehensive practical training. Adequate numbers of classrooms are available for conducting classes, which are spacious enough to accommodate students and are well-furnished with proper circulation of fresh air and light. All classrooms are kept clean and hygienic.
              </p>
            </section>
            
            {/* Classrooms Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Classrooms</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">Room Description</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Carpet Area (Sq.m)</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Usage</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Rooms Equipped with</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Class Room 213</td>
                      <td className="py-3 px-4 border border-gray-300">63.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 3rd YEAR Student</td>
                      <td className="py-3 px-4 border border-gray-300">
                        1) Desktop<br />
                        2) Multimedia Projector<br />
                        3) CC TV<br />
                        4) Green Board<br />
                        5) Sufficient desks<br />
                        6) Lights, Fan
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Class Room 207</td>
                      <td className="py-3 px-4 border border-gray-300">54.75</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 2nd YEAR Student</td>
                      <td className="py-3 px-4 border border-gray-300">
                        1) Desktop<br />
                        2) Multimedia Projector<br />
                        3) CC TV<br />
                        4) Green Board<br />
                        5) Sufficient desks<br />
                        6) Lights, Fans
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Class Room CS-P104</td>
                      <td className="py-3 px-4 border border-gray-300">91.2</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 1ST YEAR Students</td>
                      <td className="py-3 px-4 border border-gray-300">
                        1) Green Board<br />
                        2) Sufficient Desks<br />
                        3) Lights, Fans
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">201 Seminar Hall (Main Block)</td>
                      <td className="py-3 px-4 border border-gray-300">147</td>
                      <td className="py-3 px-4 border border-gray-300">All Departments</td>
                      <td className="py-3 px-4 border border-gray-300">
                        1) I/O Point available with internet facility<br />
                        2) Desktop<br />
                        3) Multimedia Projector<br />
                        4) CC TV<br />
                        5) Green Board<br />
                        6) Sufficient desks<br />
                        7) Lights, Fans
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Laboratory Facilities */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Laboratory Facilities</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Adequacy</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>The department has well-established laboratories with sufficient computers installed with necessary softwares for the students to do their practical experiments as per the timetable.</li>
                  <li>Students can use the laboratories during their free time for their project work and online courses etc.</li>
                  <li>The students can enhance their knowledge with the guidance of faculty members and well trained technical staff.</li>
                  <li>Size of the laboratories is adequate to accommodate the students.</li>
                  <li>All laboratories are well furnished.</li>
                  <li>The laboratory is kept clean and hygienic.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>All laboratories are well equipped with essential hardware, software to aid the students to learn the course and complete all lab experiments as per curriculum requirements.</li>
                  <li>After completion of practical exercises, the students write observation and record books which are checked and evaluated.</li>
                  <li>One faculty member and one technical staff member are assigned for each lab session.</li>
                  <li>Computers are provided to students on a 1:1 ratio.</li>
                  <li>Each batch size is around 20.</li>
                  <li>List of experiments for the different courses as per curriculum is displayed.</li>
                  <li>The requirements of consumables for laboratory are given in advance.</li>
                  <li>Subject related charts are displayed in the laboratory.</li>
                  <li>Lab manuals are shared to all students.</li>
                </ul>
              </div>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Monitor className="mr-2" size={20} />
                Computer Lab Facilities
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Computers:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">1:1 Ratio</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Internet:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Software:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">Updated</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Users className="mr-2" size={20} />
                Laboratory Staff
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Each lab session is supervised by:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>One faculty member</li>
                  <li>One technical staff member</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <ShieldCheck className="mr-2" size={20} />
                Safety Measures
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our laboratories are equipped with:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>CCTV Surveillance</li>
                  <li>Fire Safety Equipment</li>
                  <li>First Aid Kits</li>
                  <li>Proper Electrical Safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Radio, Monitor, Users, ShieldCheck, Cpu } from 'lucide-react';

export default function DeptEC() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Electronics & Communication Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Electronics & Communication Department infrastructure at JSS Polytechnic - Laboratories and facilities for comprehensive electronic engineering education." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Cpu className="mr-3" size={32} />
            Electronics & Communication Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Electronics & Communication', path: '/infrastructure/dept-ec' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Electronics & Communication Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Electronics and Communication Department at JSS Polytechnic is equipped with modern facilities to provide students with comprehensive practical training. Adequate numbers of classrooms are available for conducting classes, which are spacious enough to accommodate students and are well-furnished with proper circulation of fresh air and light. All classrooms are kept clean and hygienic.
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
                      <th className="py-3 px-4 border border-gray-300 text-left">Room Number</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Carpet Area (Sq.m)</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Usage</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Capacity</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Rooms Equipped with</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Main Block</td>
                      <td className="py-3 px-4 border border-gray-300">206</td>
                      <td className="py-3 px-4 border border-gray-300">54.75</td>
                      <td className="py-3 px-4 border border-gray-300">1st year</td>
                      <td className="py-3 px-4 border border-gray-300">60</td>
                      <td className="py-3 px-4 border border-gray-300">Black board, Desk, Podium, Notice board CCTV</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Main Block</td>
                      <td className="py-3 px-4 border border-gray-300">211</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">2nd year</td>
                      <td className="py-3 px-4 border border-gray-300">40</td>
                      <td className="py-3 px-4 border border-gray-300">Black board, Desk, Podium, Notice board CCTV</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Block 2</td>
                      <td className="py-3 px-4 border border-gray-300">P105</td>
                      <td className="py-3 px-4 border border-gray-300">91.2</td>
                      <td className="py-3 px-4 border border-gray-300">3rd year</td>
                      <td className="py-3 px-4 border border-gray-300">60</td>
                      <td className="py-3 px-4 border border-gray-300">Black board, Desk, Podium, Notice board</td>
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
                <p className="mb-4 text-gray-800">
                  The department has well-established laboratories that impart practical knowledge to students. The students can enhance their knowledge with the guidance of faculty members and well trained technical staff.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 border border-gray-300 text-left">SI No</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Name of the Laboratory</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Room No</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Carpet area in Sqm</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">No of students per batch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">1</td>
                        <td className="py-3 px-4 border border-gray-300">Electronics Lab</td>
                        <td className="py-3 px-4 border border-gray-300">101</td>
                        <td className="py-3 px-4 border border-gray-300">91.98 Sqm</td>
                        <td className="py-3 px-4 border border-gray-300">20</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">2</td>
                        <td className="py-3 px-4 border border-gray-300">Computer Lab</td>
                        <td className="py-3 px-4 border border-gray-300">102</td>
                        <td className="py-3 px-4 border border-gray-300">38.69 Sqm</td>
                        <td className="py-3 px-4 border border-gray-300">20(1:1)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">3</td>
                        <td className="py-3 px-4 border border-gray-300">Digital Lab</td>
                        <td className="py-3 px-4 border border-gray-300">103</td>
                        <td className="py-3 px-4 border border-gray-300">55.48 Sqm</td>
                        <td className="py-3 px-4 border border-gray-300">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>All laboratories are well equipped with essential electronic equipments & instructional manuals.</li>
                  <li>The observation and record books are checked, verified and maintained.</li>
                  <li>Student Computers ratio is 1:1.</li>
                  <li>Adequate number of equipments are available in the Laboratories.</li>
                  <li>Each batch size consists of 20 students.</li>
                  <li>The assessment is based on DTE curriculum rubrics.</li>
                  <li>The requirements of consumables for laboratory are given on time so that practical's can be conducted smoothly.</li>
                  <li>Safety measures, charts are displayed in the Laboratory.</li>
                  <li>The laboratory is kept clean and hygienic.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Safety Measures</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Safety measure charts are displayed in all labs.</li>
                  <li>Electrical wires are protected by MCB and fuses.</li>
                  <li>First-aid Kit is available.</li>
                  <li>Proper earthing is done.</li>
                  <li>CCTV cameras are installed.</li>
                </ul>
              </div>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Radio className="mr-2" size={20} />
                Electronics Lab Equipment
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our electronics labs are equipped with:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Oscilloscopes</li>
                  <li>Function Generators</li>
                  <li>Digital Multimeters</li>
                  <li>Breadboards</li>
                  <li>Soldering Stations</li>
                  <li>Electronic Components</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Monitor className="mr-2" size={20} />
                Digital Lab Features
              </h2>
              <div className="space-y-3">
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Digital IC Trainers</li>
                  <li>Logic Analyzers</li>
                  <li>FPGA Development Kits</li>
                  <li>Microcontroller Kits</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <ShieldCheck className="mr-2" size={20} />
                Safety Protocols
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Safety is our priority:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Regular equipment maintenance</li>
                  <li>Safety instruction before lab sessions</li>
                  <li>Proper grounding of all electrical equipment</li>
                  <li>Emergency shutdown protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Zap, Shield, Users, ShieldCheck, LightbulbIcon, Layers } from 'lucide-react';

export default function DeptEE() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Electrical & Electronics Engineering Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Electrical & Electronics Engineering Department infrastructure at JSS Polytechnic - Laboratories and facilities for comprehensive electrical engineering education." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Zap className="mr-3" size={32} />
            Electrical & Electronics Engineering Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Electrical & Electronics', path: '/infrastructure/dept-ee' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Electrical & Electronics Engineering Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Electrical and Electronics Engineering Department at JSS Polytechnic is equipped with modern facilities to provide students with comprehensive practical training. Adequate numbers of classrooms are available for conducting classes, which are spacious enough to accommodate students and are well-furnished with proper circulation of fresh air and light. All classrooms are kept clean and hygienic.
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
                      <td className="py-3 px-4 border border-gray-300">Class Room 006</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 3rd YEAR Student</td>
                      <td className="py-3 px-4 border border-gray-300">Green board</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Class Room 210</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 2nd YEAR Student</td>
                      <td className="py-3 px-4 border border-gray-300">Green Board/Projector</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Class Room CS-P001</td>
                      <td className="py-3 px-4 border border-gray-300">91.6</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 1ST YEAR Students</td>
                      <td className="py-3 px-4 border border-gray-300">Projector and black board</td>
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
                  <li>All Laboratories are equipped with electrical equipments for students to do their practical work during the working hours as per the time table and beyond the working hours according to their own interest.</li>
                  <li>All experiments prescribed in curriculum are conducted as per time table and also students carry out their mini projects/lab related activities apart from syllabus.</li>
                  <li>The students can enhance their knowledge with the guidance of faculty and well trained technical staff.</li>
                  <li>All the laboratories are provided with sufficient furniture facilities.</li>
                </ul>
                
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 border border-gray-300 text-left">SI NO</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Name of the Laboratory</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Dimension in Sqm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">1</td>
                        <td className="py-3 px-4 border border-gray-300">Electrical machines lab</td>
                        <td className="py-3 px-4 border border-gray-300">41.8</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">2</td>
                        <td className="py-3 px-4 border border-gray-300">Switch Gear and Protection lab</td>
                        <td className="py-3 px-4 border border-gray-300">41.8</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">3</td>
                        <td className="py-3 px-4 border border-gray-300">Electronics lab</td>
                        <td className="py-3 px-4 border border-gray-300">41.8</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">4</td>
                        <td className="py-3 px-4 border border-gray-300">Computer lab</td>
                        <td className="py-3 px-4 border border-gray-300">55.48</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>All laboratories are well equipped with essential electrical and electronics equipments.</li>
                  <li>The observation and record books are checked, verified and maintained.</li>
                  <li>One faculty member and one technical staff member are assigned for each lab session.</li>
                  <li>Various Resource persons are invited to conduct hands-on workshops/Guest Lectures on latest trends in the industry and practice.</li>
                  <li>Adequate numbers of equipments are available in the Laboratories.</li>
                  <li>Each batch sizes 20</li>
                  <li>The students can perform the experiments without any difficulty.</li>
                  <li>The assessment is done based on DTE Curriculum Rubrics</li>
                  <li>The requirements of consumables for laboratory are given on time so that practical's will be conducted smoothly.</li>
                  <li>Safety measures, charts are displayed in the Laboratory.</li>
                  <li>The requirements of consumables for laboratory are given on time so that practical works are carried out smoothly</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Safety Measures</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Safety measure charts are displayed in all labs.</li>
                  <li>Electrical Wires are protected by MCB and fuses</li>
                  <li>First-aid Kit</li>
                  <li>Fire Extinguisher</li>
                  <li>Safety gloves</li>
                  <li>Proper Earthing</li>
                  <li>CCTV Cameras</li>
                </ul>
              </div>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <LightbulbIcon className="mr-2" size={20} />
                Electrical Machines Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our electrical machines lab is equipped with:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>DC Motors and Generators</li>
                  <li>Transformers</li>
                  <li>Induction Motors</li>
                  <li>Synchronous Machines</li>
                  <li>Motor Control Panels</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Shield className="mr-2" size={20} />
                Switch Gear and Protection Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Features of our protection lab:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Circuit Breakers</li>
                  <li>Relays and Protection Systems</li>
                  <li>Isolators and Switches</li>
                  <li>Fault Analysis Equipment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Layers className="mr-2" size={20} />
                Electronics Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our electronics lab includes:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Digital IC Trainers</li>
                  <li>Oscilloscopes</li>
                  <li>Function Generators</li>
                  <li>Power Electronic Devices</li>
                  <li>Microcontroller Kits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
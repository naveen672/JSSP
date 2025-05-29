import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Building, HardHat, Monitor, ShieldCheck, Ruler } from 'lucide-react';

export default function DeptCE() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Civil Engineering Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Civil Engineering Department infrastructure at JSS Polytechnic - Modern laboratories and classrooms for quality civil engineering education." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Building className="mr-3" size={32} />
            Civil Engineering Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Civil Engineering', path: '/infrastructure/dept-ce' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Civil Engineering Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Civil Engineering Department at JSS Polytechnic is equipped with modern facilities to provide students with comprehensive practical training. Adequate number of class rooms are available for conducting classes, class rooms are specious enough to accommodate students and are well furnished and ensure proper circulation of fresh air and light. The dimensions and other facilities of the classrooms are maintained as per the AICTE norms classrooms are kept clean and hygienic. An adequate number of class rooms is available for conducting lectures.
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
                      <td className="py-3 px-4 border border-gray-300">Class Room CE-211</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 3rd Yr Student</td>
                      <td className="py-3 px-4 border border-gray-300">Black Board, Chalk, Duster, Notice Board</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Class Room CE-007</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 2nd Yr Student</td>
                      <td className="py-3 px-4 border border-gray-300">Black Board, Chalk, Duster, Notice Board</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Class Room CE-P101</td>
                      <td className="py-3 px-4 border border-gray-300">91.6</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 1ST Yr Students</td>
                      <td className="py-3 px-4 border border-gray-300">Black Board, Chalk, Duster, Notice Board</td>
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
                  The department has well-established laboratories that excel in enriching the practical knowledge of students with creative engineering experiments.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Survey lab</li>
                  <li>Material testing lab</li>
                  <li>Computer lab</li>
                  <li>Construction lab</li>
                </ul>
                <p className="mb-4 text-gray-800">
                  Size of the Laboratories is adequate accommodate the students. All laboratories are well furnished. All the doors are sufficiently wide and available in adequate numbers. The laboratory is kept clean and hygienic. Adequate numbers of equipment are available in the Laboratories.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>The students learn and practice the fundamentals of various fields in these laboratories.</li>
                  <li>All laboratories are well equipped with essential Civil equipments like hardware, software and instructional manuals.</li>
                  <li>The observation and record books are checked, verified and maintained.</li>
                  <li>One faculty member and one technical staff member are assigned for each lab session.</li>
                  <li>All Computers and softwares help the students to learn the Course Contents and practice sufficiently as per curriculum requirements.</li>
                  <li>Various Resource persons are invited to conduct hands-on workshops/Guest Lectures on latest trends in the industry and practice.</li>
                  <li>Computers. are provided to students on 1:1 ratio.</li>
                  <li>Adequate numbers of equipment are available in the Laboratories.</li>
                  <li>Each batch size is 21 (21 students).</li>
                  <li>The students can perform the experiments without any difficulty.</li>
                  <li>The assessment is done based on DTE curriculum and rubrics. understanding the experiment and on-time submission of laboratory records.</li>
                  <li>The requirements of consumables for laboratory are given in time so that practical s will be conducted efficiently.</li>
                  <li>Safety measures, charts are displayed in the Laboratory.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Safety Measures</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Safety measure charts are Displayed in all labs.</li>
                  <li>Electrical Wires are protected by MCB and fuses</li>
                  <li>First-aid Kit</li>
                  <li>Fire Extinguisher</li>
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
                <Ruler className="mr-2" size={20} />
                Survey Lab Equipment
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our survey lab is equipped with:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Theodolites</li>
                  <li>Total Stations</li>
                  <li>Leveling Instruments</li>
                  <li>Measuring Tapes and Chains</li>
                  <li>GPS Equipment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <HardHat className="mr-2" size={20} />
                Material Testing Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our material testing lab features:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Compression Testing Machine</li>
                  <li>Universal Testing Machine</li>
                  <li>Concrete Mixers</li>
                  <li>Slump Test Apparatus</li>
                  <li>Aggregate Testing Equipment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Monitor className="mr-2" size={20} />
                Computer Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our computer lab includes:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Modern Computer Systems (1:1 ratio)</li>
                  <li>AutoCAD Software</li>
                  <li>Structural Analysis Software</li>
                  <li>Fluid Mechanics Software</li>
                  <li>Internet Connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
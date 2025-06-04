import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Cpu, Monitor, Bot, ShieldCheck, Layers } from 'lucide-react';

export default function DeptMT() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Mechatronics Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Mechatronics Department infrastructure at JSS Polytechnic - Modern labs and facilities for integrated mechanical and electronic engineering education." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Bot className="mr-3" size={32} />
            Mechatronics Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Mechatronics', path: '/infrastructure/dept-mt' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Mechatronics Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Mechatronics Department at JSS Polytechnic is equipped with modern facilities to provide students with comprehensive practical training in the integrated field of mechanical and electronic engineering. Adequate numbers of classrooms are available for conducting classes, which are spacious enough to accommodate students and are well-furnished with proper circulation of fresh air and light. All classrooms are kept clean and hygienic.
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
                      <td className="py-3 px-4 border border-gray-300">Class Room 208</td>
                      <td className="py-3 px-4 border border-gray-300">41.8</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 3rd Yr Student</td>
                      <td className="py-3 px-4 border border-gray-300">Green Board, Podium, Benches, Fans, Light, Dust bins, CCTV cameras</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Class Room 214</td>
                      <td className="py-3 px-4 border border-gray-300">31.35</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 2nd Yr Student</td>
                      <td className="py-3 px-4 border border-gray-300">LCD Projector and projector screen, one computer, LAN Connectivity, Speakers, Green Board, Benches, CCTV cameras, Fans, Lights and Dustbin.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Class Room P004</td>
                      <td className="py-3 px-4 border border-gray-300">91.2</td>
                      <td className="py-3 px-4 border border-gray-300">Class Room For 1ST Yr Students</td>
                      <td className="py-3 px-4 border border-gray-300">Black Board, Chalk, Duster, Notice Board</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Class Room 201</td>
                      <td className="py-3 px-4 border border-gray-300">147</td>
                      <td className="py-3 px-4 border border-gray-300">ALL Department</td>
                      <td className="py-3 px-4 border border-gray-300">LCD Projector and projector screen, LAN Connectivity, Speakers, Green Board, white board, CCTV cameras, Fans, Lights, and Dustbin</td>
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
                  All Laboratories are furnished with efficient electronics equipments for students to do their practical work during the working hours as per the time table and beyond the working hours according to their own interest.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>All experiments prescribed in curriculum are conducted as per time table and also students carry out their mini projects /lab related activities apart from syllabus.</li>
                  <li>The students can enhance their knowledge with the guidance of faculty and well trained technical staff</li>
                  <li>All the laboratories are provided with sufficient furniture facilities.</li>
                </ul>
                
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 border border-gray-300 text-left">SL NO</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Name of the Laboratory</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Carpet Area (Sqm)</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Room No</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">No of students per setup (Batch Size)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">1</td>
                        <td className="py-3 px-4 border border-gray-300">Computer Applications Lab</td>
                        <td className="py-3 px-4 border border-gray-300">102.25</td>
                        <td className="py-3 px-4 border border-gray-300">112</td>
                        <td className="py-3 px-4 border border-gray-300">1 in 1 computer (15 students /batch)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">2</td>
                        <td className="py-3 px-4 border border-gray-300">Analog Electronics lab</td>
                        <td className="py-3 px-4 border border-gray-300">102.24</td>
                        <td className="py-3 px-4 border border-gray-300">113</td>
                        <td className="py-3 px-4 border border-gray-300">3 in 1 setup (15 students /batch)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Laboratories are well equipped with essential electronics equipments, hardware and software's.</li>
                  <li>Every Laboratory is provided with separate faculty in-charge and adequate facilities for the development of practical knowledge to the students.</li>
                  <li>Every practical work is done by the student himself under the guidance of concerned faculty member.</li>
                  <li>Practical work done is recorded in observation and record book which is evaluated by staff periodically. Assessment is done based on DTE curriculum rubrics</li>
                  <li>Importance is given to carry out application oriented experiments/ Mini projects /Projects so that laboratories are effectively utilized.</li>
                  <li>Each batch size is 15 and 2 / 3 in one set up.</li>
                  <li>Computers are provided to students on 1:1 ratio</li>
                  <li>Computer Applications lab is provided with uninterruptible power supply of 7.5 KVA of 2 nos.</li>
                  <li>Laboratories are kept clean and Hygienic.</li>
                  <li>Safety measures like first aid boxes, safety gloves, proper earthing, MCBs and fire extinguishers are maintained periodically.</li>
                  <li>Students are strictly instructed to wear apron and shoes in workshop.</li>
                  <li>Display boards like DO's and DONT's, List of experiments (as per syllabus), specification of every equipment are displayed.</li>
                  <li>Hands on training and workshops are conducted in respective laboratories.</li>
                  <li>The requirements of consumables for laboratory are given on time so that practical works are carried out smoothly</li>
                  <li>Project models are used by students to enhance / study the features of project work.</li>
                </ul>
              </div>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Monitor className="mr-2" size={20} />
                Computer Applications Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our computer lab features:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Modern Computer Systems (1:1 ratio)</li>
                  <li>CAD/CAM Software</li>
                  <li>Simulation Software</li>
                  <li>Uninterrupted Power Supply</li>
                  <li>LAN Connectivity</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Cpu className="mr-2" size={20} />
                Analog Electronics Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our electronics lab includes:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Electronic Circuit Trainers</li>
                  <li>Oscilloscopes</li>
                  <li>Function Generators</li>
                  <li>Digital Multi-meters</li>
                  <li>Microcontroller Kits</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <ShieldCheck className="mr-2" size={20} />
                Safety Measures
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our safety provisions include:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>First Aid Boxes</li>
                  <li>Safety Gloves</li>
                  <li>Proper Earthing</li>
                  <li>MCBs for Electrical Protection</li>
                  <li>Fire Extinguishers</li>
                  <li>Lab Safety Guidelines</li>
                  <li>CCTV Surveillance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
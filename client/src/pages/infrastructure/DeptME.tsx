import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Cog, Wrench, Users, ShieldCheck, Printer, Settings } from 'lucide-react';

export default function DeptME() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Mechanical Engineering Department Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Mechanical Engineering Department infrastructure at JSS Polytechnic - Workshops, laboratories and facilities for practical mechanical engineering education." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Cog className="mr-3" size={32} />
            Mechanical Engineering Department Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' },
            { label: 'Mechanical Engineering', path: '/infrastructure/dept-me' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Mechanical Engineering Department Infrastructure</h2>
              <p className="mb-4 text-gray-800">
                The Mechanical Engineering Department at JSS Polytechnic is well-equipped with modern facilities to provide students with hands-on training in mechanical engineering concepts. Adequate numbers of classrooms are available for conducting classes, which are spacious enough to accommodate students and are well-furnished with proper circulation of fresh air and light. All classrooms are kept clean and hygienic.
              </p>
            </section>
            
            {/* Classrooms Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Classrooms</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">SI NO</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">CLASS ROOM</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">CARPET AREA (sqm)</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Equipment</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">SEATING CAPACITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">1</td>
                      <td className="py-3 px-4 border border-gray-300">201 A</td>
                      <td className="py-3 px-4 border border-gray-300">73.5</td>
                      <td className="py-3 px-4 border border-gray-300">CCTV, Multimedia projector</td>
                      <td className="py-3 px-4 border border-gray-300">60</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">2</td>
                      <td className="py-3 px-4 border border-gray-300">216</td>
                      <td className="py-3 px-4 border border-gray-300">112.42</td>
                      <td className="py-3 px-4 border border-gray-300">CCTV</td>
                      <td className="py-3 px-4 border border-gray-300">60</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">3</td>
                      <td className="py-3 px-4 border border-gray-300">P003</td>
                      <td className="py-3 px-4 border border-gray-300">91.2</td>
                      <td className="py-3 px-4 border border-gray-300">CCTV</td>
                      <td className="py-3 px-4 border border-gray-300">60</td>
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
                  <li>The department has well–established laborites that excel in enriching the practical knowledge of students with creative engineering experiments.</li>
                  <li>Size of the laboratories is adequate to accommodate the students.</li>
                  <li>All laboratories are well furnished.</li>
                  <li>All the doors are sufficiently wide and available in adequate numbers.</li>
                  <li>The laboratory is kept clean and hygienic.</li>
                  <li>Adequate numbers of equipment are available in the Laboratories.</li>
                </ul>
                
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 border border-gray-300 text-left">SI NO</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">Name of the laboratory</th>
                        <th className="py-3 px-4 border border-gray-300 text-left">CARPET AREA (sqm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">1</td>
                        <td className="py-3 px-4 border border-gray-300">Computer lab</td>
                        <td className="py-3 px-4 border border-gray-300">144</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">2</td>
                        <td className="py-3 px-4 border border-gray-300">Fluid power Engineering lab</td>
                        <td className="py-3 px-4 border border-gray-300">30.8</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">3</td>
                        <td className="py-3 px-4 border border-gray-300">3D printing lab</td>
                        <td className="py-3 px-4 border border-gray-300">31.8</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border border-gray-300">4</td>
                        <td className="py-3 px-4 border border-gray-300">Machine shop</td>
                        <td className="py-3 px-4 border border-gray-300">170</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-4 border border-gray-300">5</td>
                        <td className="py-3 px-4 border border-gray-300">Workshop</td>
                        <td className="py-3 px-4 border border-gray-300">200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Quality of Labs/Workshop</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>The students learn and practice the fundamentals of various fields in these laboratories.</li>
                  <li>All laboratories are well equipped with essential lathes, shapers, milling machine, 3D printer, and soft wares and instructional manuals.</li>
                  <li>The observation and record books are checked, verified and maintained.</li>
                  <li>One faculty member and one technical staff member are assigned for each lab session.</li>
                  <li>Various resource person are invited to conduct hands-on workshop/guest lectures on latest technology in the industry and practice.</li>
                  <li>Lathes, shapers, milling machines, tools and equipments are provided to students.</li>
                  <li>Computers are provided to students on 1:1 ratio.</li>
                  <li>Adequate numbers of equipments are available in the laboratories.</li>
                  <li>Each batch size is 21.</li>
                  <li>The students can perform the experiments without any difficulty.</li>
                  <li>The assessment is done based on the DTE curriculum and rubrics, Student's involvement and performance on- time submission of records.</li>
                  <li>The requirements of consumables for workshop/laboratory are given on time so that the practical will be conducted smoothly.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Safety Measures</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                  <li>Safety measures, charts are displayed all labs</li>
                  <li>Electrical wires are protected by MCB and fuses.</li>
                  <li>First aid kit.</li>
                  <li>Fire extinguisher.</li>
                  <li>Safety gloves. Welding apron. Welding goggles.</li>
                  <li>Proper earthing.</li>
                  <li>CCTV cameras.</li>
                </ul>
              </div>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Settings className="mr-2" size={20} />
                Workshop Equipment
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our workshops are equipped with:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Lathes</li>
                  <li>Shapers</li>
                  <li>Milling Machines</li>
                  <li>CNC Equipment</li>
                  <li>Welding Stations</li>
                  <li>Cutting Tools</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Printer className="mr-2" size={20} />
                3D Printing Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Features of our 3D printing lab:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Modern 3D Printers</li>
                  <li>CAD/CAM Software</li>
                  <li>Prototyping Materials</li>
                  <li>Design Workstations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Wrench className="mr-2" size={20} />
                Fluid Power Engineering Lab
              </h2>
              <div className="space-y-3">
                <p className="text-gray-800">Our fluid power lab includes:</p>
                <ul className="list-disc pl-5 text-gray-800">
                  <li>Hydraulic Test Benches</li>
                  <li>Pneumatic Systems</li>
                  <li>Fluid Mechanics Apparatus</li>
                  <li>Pressure Testing Equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
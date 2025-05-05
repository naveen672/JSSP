import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Briefcase, GraduationCap, Building, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function Placements() {
  const departmentCoordinators = [
    { department: 'Mechanical Engineering', coordinator: 'Sri. Uday R' },
    { department: 'Electronics & Communication Engineering', coordinator: 'Smt. Vimala H N' },
    { department: 'Computer Science & Engineering', coordinator: 'Smt. Shruthi S' },
    { department: 'Information Science & Engineering', coordinator: 'Smt. Shruthi M' },
    { department: 'Mechatronics Engineering', coordinator: 'Kum. Mayeshwari D' },
    { department: 'Electrical & Electronics Engineering', coordinator: 'Smt. Vidya S K' },
    { department: 'Civil Engineering', coordinator: 'Smt. Bhavya M' },
  ];

  const MOUs = {
    'Mechanical Engineering': [
      'KGTTI, Mysuru',
      'Flow & Force Engineers, Bengaluru',
      'GTTC, Mysuru',
      'VIDYUT Automation, Mysuru',
      'IRobo Automations Pvt.Ltd, Mysuru'
    ],
    'Electronics & Communication Engineering': [
      'Ultismart Infotech LLP, Mysuru',
      'IQuest Technologies, Mysuru',
      'MARCONICS Technologies, Mysuru',
      'KGTTI, Mysuru'
    ],
    'Computer Science & Engineering': [
      'Diliber Foundation',
      'StormX Technologies Pvt Ltd',
      'Sai Sofsol Hebbal Industrial Area Mysuru',
      'Ecclesia Advanced Computer Technology Mysuru',
      'MyViz Mysuru',
      'Jupiter King Infotech, Srirampura, Mysuru'
    ],
    'Mechatronics Engineering': [
      'BDS Enterprises, Mysuru',
      'KGTTI, Mysuru',
      'GTTC, Mysuru'
    ],
    'Electrical & Electronics Engineering': [
      'Vidyut Automation, Mysuru',
      'Sri Sai Enterprises, Hebbal, Mysuru'
    ],
    'Civil Engineering': [
      'CAD DESK'
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Placements | JSS Polytechnic</title>
        <meta name="description" content="Placement details, career guidance, and training programs at JSS Polytechnic." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-3" size={32} />
            Placement & Career Guidance
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Campus Life', path: '/campus-life' },
            { label: 'Placements', path: '/placements' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Career Guidance & Counselling</h2>
              <p className="mb-4 text-gray-800">
                JSS Polytechnic Training and Placement Cell supports and guides the students to shape up their career. 
                The institute, for the benefit of students, organizes "Career Awareness Programme" to help the students 
                plan for their career.
              </p>
              <p className="mb-4 text-gray-800">
                The training and placement cell smoothens the procedure of placement activities for students passing out 
                from the institute. It also associates with leading organizations and institutes for the benefit of students 
                in terms of internship and training programmes. The cell is led by a committed member Sri. Roopesh Kumar B, 
                expert advice of the Principal and the effective support from the department placement coordinators.
              </p>
            </section>
            
            {/* Department Coordinators */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Building className="mr-2" size={24} />
                Department Placement Coordinators
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">SI No</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Department</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Placement Coordinator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentCoordinators.map((coordinator, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4 border border-gray-300">{index + 1}</td>
                        <td className="py-3 px-4 border border-gray-300">{coordinator.department}</td>
                        <td className="py-3 px-4 border border-gray-300">{coordinator.coordinator}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Functions of Training and Placement Cell */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Functions of Training and Placement Cell</h2>
              <p className="mb-4 text-gray-800">
                The institute has contacts with various companies for the placement of students. Our students get placed 
                with different Multi-National Companies, Retails, Hospitality, Industries, Service and Skill Oriented sectors. 
                Training and Placement cell also impart productive direction among students to pursue higher education. 
                The cell operates like a link between the institution and industries.
              </p>
            </section>
            
            {/* MOUs */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Award className="mr-2" size={24} />
                MOUs Signed for Placement and Training
              </h2>
              <div className="space-y-6">
                {Object.entries(MOUs).map(([department, companies], index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{department}</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      {companies.map((company, idx) => (
                        <li key={idx}>{company}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Placement Statistics */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Placement Details</h2>
              <p className="text-gray-700 mb-4">
                Click below to view detailed placement statistics from the last 4 years.
              </p>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors">
                View Placement Statistics
              </button>
            </div>
            
            {/* Higher Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                Higher Education
              </h2>
              <p className="text-gray-700 mb-4">
                View details of students pursuing higher education:
              </p>
              <div className="space-y-3">
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-left">
                  2018-2021 Higher Education
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-left">
                  2019-2022 Higher Education
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-left">
                  2020-2023 Higher Education
                </button>
              </div>
            </div>
            
            {/* Career Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Career Services</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Resume Building Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Interview Preparation Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Industry Interaction Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Career Counselling</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Technical & Soft Skills Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
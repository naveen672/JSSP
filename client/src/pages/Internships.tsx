import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Briefcase, GraduationCap, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function Internships() {
  const placementStatistics = [
    { program: 'CE', strength: 37, placements: 1, higherEducation: 31 },
    { program: 'CS', strength: 47, placements: 2, higherEducation: 40 },
    { program: 'EC', strength: 23, placements: 1, higherEducation: 17 },
    { program: 'EE', strength: 39, placements: 4, higherEducation: 23 },
    { program: 'IS', strength: 7, placements: 0, higherEducation: 4 },
    { program: 'ME', strength: 43, placements: 2, higherEducation: 19 },
    { program: 'MC', strength: 18, placements: 1, higherEducation: 11 },
  ];

  // Calculate totals
  const totalStudents = placementStatistics.reduce((sum, stat) => sum + stat.strength, 0);
  const totalPlacements = placementStatistics.reduce((sum, stat) => sum + stat.placements, 0);
  const totalHigherEducation = placementStatistics.reduce((sum, stat) => sum + stat.higherEducation, 0);
  const placementPercentage = ((totalPlacements / totalStudents) * 100).toFixed(2);
  const higherEducationPercentage = ((totalHigherEducation / totalStudents) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Internships & Training | JSS Polytechnic</title>
        <meta name="description" content="Internship training programs and placement statistics at JSS Polytechnic." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-3" size={32} />
            Internships & Training
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Campus Life', path: '/campus-life' },
            { label: 'Internships', path: '/internships' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Internship Training</h2>
              <p className="mb-4 text-gray-800">
                JSS Polytechnic, has taken necessary steps to ensure that each of its students undergo internship training as a part of 
                his/her regular academic programmes. The students have a choice of selecting a nearby industry/organization to undergo 
                internship training. A total number of 256 students of our Polytechnic have undergone internship training in the year 2022-2023. 
                Further, action will be initiated to blend internship training as a part of curriculum.
              </p>
            </section>
            
            {/* Placement Statistics Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <BarChart className="mr-2" size={24} />
                2020-2023 (Batch) Placement Statistics
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">SI No</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Programme</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Students Strength</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Number of Placements</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Higher Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementStatistics.map((stat, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-3 px-4 border border-gray-300">{index + 1}</td>
                        <td className="py-3 px-4 border border-gray-300">{stat.program}</td>
                        <td className="py-3 px-4 border border-gray-300">{stat.strength}</td>
                        <td className="py-3 px-4 border border-gray-300">{stat.placements}</td>
                        <td className="py-3 px-4 border border-gray-300">{stat.higherEducation}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold">
                      <td colSpan={2} className="py-3 px-4 border border-gray-300 text-center">Total</td>
                      <td className="py-3 px-4 border border-gray-300">{totalStudents}</td>
                      <td className="py-3 px-4 border border-gray-300">{totalPlacements}</td>
                      <td className="py-3 px-4 border border-gray-300">{totalHigherEducation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-primary mb-2">Percentage of Students Placed</h3>
                  <p className="text-3xl font-bold text-gray-800">{placementPercentage}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-primary mb-2">Percentage of Students in Higher Education</h3>
                  <p className="text-3xl font-bold text-gray-800">{higherEducationPercentage}%</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Internship Benefits */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Benefits of Internships</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Practical application of theoretical knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Industry exposure and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Enhanced technical and soft skills</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Better career prospects and employment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Understanding of professional work ethics</span>
                </li>
              </ul>
            </div>
            
            {/* Higher Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                Higher Education Opportunities
              </h2>
              <p className="text-gray-700 mb-4">
                After completing diploma programs at JSS Polytechnic, students have opportunities to pursue higher education at:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Engineering colleges through lateral entry</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Specialized technical institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>Management programs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>International universities</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-gray-700">View detailed higher education statistics:</p>
                <div className="mt-2 space-y-2">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-md transition-colors text-left">
                    2018-2021 Higher Education Details
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-md transition-colors text-left">
                    2019-2022 Higher Education Details
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-md transition-colors text-left">
                    2020-2023 Higher Education Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Career Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Career Resources</h2>
              <div className="space-y-3">
                <a href="/placements" className="block py-2 px-4 bg-primary/5 hover:bg-primary/10 text-primary rounded-md transition-colors">
                  Training & Placement Cell
                </a>
                <a href="#" className="block py-2 px-4 bg-primary/5 hover:bg-primary/10 text-primary rounded-md transition-colors">
                  Industry Partners
                </a>
                <a href="#" className="block py-2 px-4 bg-primary/5 hover:bg-primary/10 text-primary rounded-md transition-colors">
                  Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
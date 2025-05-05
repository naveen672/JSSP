import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Building, LucideIcon, School, Users } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

interface DepartmentCard {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export default function Infrastructure() {
  const departments: DepartmentCard[] = [
    {
      name: "Computer Science Engineering",
      description: "Spacious classrooms and labs equipped with modern computer systems and software.",
      link: "/infrastructure/dept-cs",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      name: "Electronics & Communication",
      description: "Well-equipped laboratories with essential electronic equipments and instructional manuals.",
      link: "/infrastructure/dept-ec",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    },
    {
      name: "Mechanical Engineering",
      description: "Comprehensive machine shop and labs with lathes, shapers, milling machines and more.",
      link: "/infrastructure/dept-me",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      name: "Electrical & Electronics",
      description: "Laboratories equipped with electrical machines, switch gear protection, and electronics labs.",
      link: "/infrastructure/dept-ee",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    },
    {
      name: "Mechatronics",
      description: "Modern labs with analog electronics, computer applications, and automation equipment.",
      link: "/infrastructure/dept-mt",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    },
    {
      name: "Civil Engineering",
      description: "Well-established laboratories including survey, material testing, construction, and computer labs.",
      link: "/infrastructure/dept-ce",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Infrastructure | JSS Polytechnic</title>
        <meta name="description" content="Infrastructure facilities at JSS Polytechnic - Modern classrooms, laboratories, and departmental facilities for quality technical education." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Building className="mr-3" size={32} />
            Infrastructure
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Infrastructure', path: '/infrastructure' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Description */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Campus Infrastructure</h2>
            <p className="mb-4 text-gray-800">
              JSS Polytechnic provides state-of-the-art infrastructure facilities to create an environment conducive for effective teaching and learning. Our campus is equipped with modern classrooms, laboratories, workshops, and other facilities to support the academic and extracurricular development of students.
            </p>
            <p className="mb-4 text-gray-800">
              Each department has specialized laboratories and facilities designed as per AICTE norms to provide hands-on experience to students in their respective fields of study. Our classrooms are spacious, well-ventilated, and equipped with modern teaching aids.
            </p>
          </section>
          
          {/* Infrastructure Highlights */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Infrastructure Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <School className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Modern Classrooms</h3>
                  <p className="text-gray-700">Spacious classrooms with good ventilation, lighting, and multimedia facilities</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Well-Equipped Laboratories</h3>
                  <p className="text-gray-700">Department-specific labs with modern equipment and safety measures</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Safety Measures</h3>
                  <p className="text-gray-700">CCTV surveillance, fire safety equipment, and proper earthing in all labs</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Technical Staff</h3>
                  <p className="text-gray-700">Well-trained technical staff available in all labs to assist students</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Department Infrastructure */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Departmental Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Link href={dept.link} key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 h-full">
                    <div className="bg-gradient-to-r from-primary/80 to-primary p-4 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                      <div className="bg-white p-2 rounded-full">{dept.icon}</div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 mb-4">{dept.description}</p>
                      <div className="text-primary font-medium flex items-center mt-auto">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
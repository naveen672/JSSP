import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Trophy, Dumbbell, Users, Calendar, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function Sports() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Sports Facilities | JSS Polytechnic</title>
        <meta name="description" content="Sports facilities at JSS Polytechnic - Encouraging physical activities and sports events for overall development of students." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Trophy className="mr-3" size={32} />
            Sports Facilities
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Sports', path: '/sports' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Sports Facilities</h2>
              <p className="mb-4 text-gray-800">
                JSS Polytechnic, Mysuru has been giving equal importance to both Curricular, Co-curricular and extracurricular activities. To encourage the students to participate in sports activities, the institute has created all the necessary sports facilities.
              </p>
              <p className="mb-4 text-gray-800">
                Our college Sports department has been organizing many sports events to promote physical fitness, team spirit, and leadership qualities among students.
              </p>
            </section>
            
            {/* Indoor Sports */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Indoor Sports Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Table Tennis</h3>
                    <p className="text-gray-700">Dedicated area with professional table tennis equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Carrom</h3>
                    <p className="text-gray-700">Multiple carrom boards available for student recreation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Chess</h3>
                    <p className="text-gray-700">Chess boards and pieces for strategic mind games</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Dumbbell className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fitness Room</h3>
                    <p className="text-gray-700">Basic fitness equipment for student workouts</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Outdoor Sports */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Outdoor Sports Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cricket Ground</h3>
                    <p className="text-gray-700">Well-maintained cricket pitch and practice nets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Volleyball Court</h3>
                    <p className="text-gray-700">Standard volleyball court with net and marking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Basketball Court</h3>
                    <p className="text-gray-700">Basketball court with standard hoops and markings</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Badminton Court</h3>
                    <p className="text-gray-700">Outdoor badminton court with nets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Athletics Track</h3>
                    <p className="text-gray-700">Running track for athletics and sports meets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Kabaddi Ground</h3>
                    <p className="text-gray-700">Dedicated space for Kabaddi, promoting traditional sports</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Sports Events */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Regular Sports Events</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Annual Sports Meet with variety of athletic and game events</li>
                <li>Inter-class tournaments for Cricket, Volleyball, Kabaddi, and other sports</li>
                <li>Friendly matches with neighboring educational institutions</li>
                <li>Special training sessions by professional coaches</li>
                <li>Yoga and fitness workshops for holistic development</li>
              </ul>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Calendar className="mr-2" size={20} />
                Sports Schedule
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Morning Practice Sessions</h3>
                  <p className="text-gray-700">6:30 AM - 8:00 AM (Mon-Sat)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Evening Practice Sessions</h3>
                  <p className="text-gray-700">4:30 PM - 6:00 PM (Mon-Fri)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Weekend Games</h3>
                  <p className="text-gray-700">9:00 AM - 5:00 PM (Sat)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Trophy className="mr-2" size={20} />
                Recent Achievements
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-3 py-2">
                  <h3 className="font-medium text-gray-800">Inter-Polytechnic Cricket Tournament</h3>
                  <p className="text-gray-700 text-sm">Champions (2022-23)</p>
                </div>
                <div className="border-l-4 border-primary pl-3 py-2">
                  <h3 className="font-medium text-gray-800">District Level Volleyball Tournament</h3>
                  <p className="text-gray-700 text-sm">Runners-up (2022-23)</p>
                </div>
                <div className="border-l-4 border-primary pl-3 py-2">
                  <h3 className="font-medium text-gray-800">State Level Technical Meet</h3>
                  <p className="text-gray-700 text-sm">3rd Place in Athletics (2022-23)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Users className="mr-2" size={20} />
                Sports Department
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-800">Physical Education Instructor</h3>
                  <p className="text-gray-700">Available during college hours for guidance and training</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-800">Equipment Issuance</h3>
                  <p className="text-gray-700">Sports equipment can be issued against ID cards during designated hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
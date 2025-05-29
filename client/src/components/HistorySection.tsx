import React from 'react';

export default function HistorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our History</h2>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                JSS Polytechnic, Mysuru was set up in 1986 to provide technical education and expertise for those who want to set up their own business. The Polytechnic offers Diploma courses in Computer Science, Electronics and Communications, Mechanical Engineering, Commercial Practice, Information Science and Engineering, Mechatronics and Electrical Engineering with intake of 320 students. The Karnataka government and the AICTE, New Delhi, have approved these courses. Besides, job-oriented courses are also taught here.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The campus is situated at an extensively elevated stretch of over 6 Hectares in the JSS Technical Institutions' campus to the west of the University of Mysuru, Manasagangothri and is well-equipped with modern workshops and best-in-class facilities. It is located at about 6Kms from the city central bus stand and railway station. Adjacent to the college campus is an exclusive shopping centre, where essential student's requirements and public utility services are made available.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-all">
                <span className="mr-2">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
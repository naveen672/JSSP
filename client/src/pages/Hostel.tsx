import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Home, UtensilsCrossed, Bed, MapPin } from 'lucide-react';

export default function Hostel() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Hostel Facilities | JSS Polytechnic</title>
        <meta name="description" content="Hostel facilities at JSS Polytechnic - Providing comfortable accommodation with modern amenities for students." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <Home className="mr-3" size={32} />
            Hostel Facilities
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Hostel', path: '/hostel' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Boys Hostel</h2>
              <p className="mb-4 text-gray-800">
                The Polytechnic has a separate hostel facility for boys within the campus. The hostel runs mess on sharing basis with modern kitchen to ensure adequate hygiene.
              </p>
              <p className="mb-4 text-gray-800">
                Since the hostel facilities are limited, the allotment of the seats for the hostel is done based on the needs of the candidates.
              </p>
            </section>
            
            {/* Hostel Features */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Hostel Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Bed className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comfortable Accommodation</h3>
                    <p className="text-gray-700">Well-maintained rooms with proper ventilation and essential furniture</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <UtensilsCrossed className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Modern Kitchen</h3>
                    <p className="text-gray-700">Hygienic mess facility with nutritious and balanced meals</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">On-Campus Location</h3>
                    <p className="text-gray-700">Conveniently located within the campus for easy access to academic buildings</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Hostel Rules and Guidelines */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">General Rules and Guidelines</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Students must maintain discipline and decorum within the hostel premises.</li>
                <li>Ragging in any form is strictly prohibited and is a punishable offense.</li>
                <li>Students are responsible for keeping their rooms clean and tidy.</li>
                <li>Electrical appliances like heaters, irons, etc. are not allowed in the rooms without permission.</li>
                <li>Smoking, consumption of alcohol and narcotic drugs is strictly prohibited.</li>
                <li>Students should be present in their respective rooms during roll call/attendance time.</li>
                <li>Students should not damage any hostel property. If damaged, necessary charges will be collected.</li>
                <li>Students should not leave the hostel premises without prior permission from the warden.</li>
                <li>Visitors are allowed only in the designated visiting area during specified hours.</li>
                <li>Students should follow the mess timings and rules strictly.</li>
              </ul>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Hostel Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Type of Accommodation</h3>
                  <p className="text-gray-700">Boys Hostel (On-Campus)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-1">Application Process</h3>
                  <p className="text-gray-700">Hostel seats are allotted based on needs of candidates and availability. Applications can be submitted at the time of admission.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-1">Mess Facility</h3>
                  <p className="text-gray-700">Operates on sharing basis with hygienic preparation of food.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4">Contact Information</h2>
              <p className="mb-2 text-gray-800">For any queries regarding hostel facilities, please contact:</p>
              <div className="space-y-2">
                <p className="font-medium">Hostel Warden</p>
                <p className="text-gray-700">JSS Polytechnic Boys Hostel</p>
                <p className="text-gray-700">Contact: <span className="text-primary">+91-XXXXXXXXXX</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Award, Check } from 'lucide-react';

export default function NBA() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">NBA Accreditation</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                National Board of Accreditation (NBA)
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                JSS Polytechnic proudly announces that following Six Programs of the Polytechnic have been accredited by NBA for three years (AY 2024-25, 2025-26 & 2026-27).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Civil Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Electronic and Communication Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Electrical and Electronics Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Computer Science and Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mechatronics Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                <div className="bg-green-50 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mechanical Engineering</h3>
                  <p className="text-sm text-gray-600">Accredited for 3 years</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                The NBA accreditation recognizes the quality and standards of education provided by JSS Polytechnic.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck } from 'lucide-react';

export default function StudentAccidentPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Student Group Accident Policy</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center py-12">
              <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-xl font-medium text-gray-700 mb-4">Student Group Accident Policy Details</h2>
              <p className="text-gray-500">Information about Student Group Accident Policy will be updated soon.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
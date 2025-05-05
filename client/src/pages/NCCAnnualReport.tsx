import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NCCAnnualReport() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">NCC Annual Report</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center justify-center py-8">
              <FileText className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-xl font-medium text-gray-700 mb-4">
                National Cadet Corps (NCC) Annual Reports
              </h2>
              <p className="text-gray-500 mb-8 text-center max-w-2xl">
                The National Cadet Corps (NCC) is a Tri-Services Organization engaging in developing the youth of the country into disciplined and patriotic citizens.
              </p>
              
              <div className="w-full max-w-md">
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Annual Report 2023</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-6">
                  Additional reports will be added soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
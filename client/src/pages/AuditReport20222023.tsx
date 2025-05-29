import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuditReport20222023() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Audit Report 2022-2023</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center justify-center py-8">
              <FileText className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-xl font-medium text-gray-700 mb-4">
                Financial Audit Report for Academic Year 2022-2023
              </h2>
              <p className="text-gray-500 mb-8 text-center max-w-2xl">
                This report contains the financial statements and audit findings for JSS Polytechnic covering the period from 2022 to 2023.
              </p>
              
              <div className="w-full max-w-md">
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Audit Report 2022-2023</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-4 mt-8">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/audit-report-2021-2022">View 2021-2022 Report</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/audit-report-2020-2021">View 2020-2021 Report</a>
                  </Button>
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
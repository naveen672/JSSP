import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Award, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AICTE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-sm">AICTE & EOA</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="text-white/50">•</span>
            <span className="font-medium">All India Council for Technical Education</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mb-4 shadow-sm">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a2542] mb-4">
              All India Council for Technical Education (AICTE) and EOA
            </h2>
            <p className="text-lg font-semibold text-[#1a2542] max-w-2xl mx-auto border-l-4 pl-4 py-1 border-primary/30 bg-primary/5 rounded-r-md">
              The All India Council for Technical Education (AICTE) is a statutory body established by the Government of India. JSS Polytechnic has been approved by AICTE.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <h3 className="font-medium text-primary/70 text-sm">AICTE File No.</h3>
                <p className="font-semibold text-[#1a2542]">South-West/1-9321175360/2021/EOA</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <h3 className="font-medium text-primary/70 text-sm">Name of the Institution</h3>
                <p className="font-semibold text-[#1a2542]">JSS Polytechnic, Mysuru.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Address</h3>
                <p className="font-medium">JSS Technical Institutions' Campus, Manasa Gangothri, Mysore</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">City & Pin code</h3>
                <p className="font-medium">Mysore 570006</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">State / UT</h3>
                <p className="font-medium">Karnataka</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Longitude & Latitude</h3>
                <p className="font-medium">76,36,32 & 12,18,56</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Phone number with STD code</h3>
                <p className="font-medium">0821-2548318</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Office hours at the Institution</h3>
                <p className="font-medium">10:00AM TO 5:30PM</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Academic hours at the Institution</h3>
                <p className="font-medium">8:00AM TO 5:45PM</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Email</h3>
                <p className="font-medium">jssp418@yahoo.co.in</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Website</h3>
                <p className="font-medium">www.jsspolytechnic.org</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Nearest Railway station (distance in KM)</h3>
                <p className="font-medium">6.2 KM ( Main Railway station)</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Nearest Airport (distance in KM)</h3>
                <p className="font-medium">17.5 KM</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Type of Institution</h3>
                <p className="font-medium">Private Self-financing</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Category (1) of the Institution</h3>
                <p className="font-medium">Non-Minority</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Category (2) of the Institution</h3>
                <p className="font-medium">Co-Ed</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Name of the Affiliating University</h3>
                <p className="font-medium">Department of Technical Education</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Latest Affiliation Period</h3>
                <p className="font-medium">2024-25</p>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="font-medium text-gray-500">Name and address of Principal</h3>
                <p className="font-medium">Dr. Bhakthavathsala K S</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Address, Mobile</h3>
                <p className="font-medium">J S S Polytechnic, Mysore-6, 9844333115</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Email ID</h3>
                <p className="font-medium">KSB@JSSPOLYTECHNIC.ORG</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Specialization</h3>
                <p className="font-medium">Mechanical Engineering</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">EOA Details</h2>
            
            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2024-2025</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1IGVmr64aLPVcQUe4W76sLO_aR9wC9ECF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2023-2024</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1-DYaaV8bll6-rACrl2bk8MSAB3QzMd7c/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2022-2023</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1-Lv9SsExxFByTbFLPz4ZcIvneLE4rZwp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2021-2022</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1ZOW2xhmMB8p0lc-EMJTnus09wObcH3th/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2020-2021</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1Qi9zdG4y9cnzjQk5I_PTcH35vQqwzzHe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2019-2020</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1VGDkc8kjscpD9to9Rh9dzr0DuC0TXiWK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  <span className="font-medium">Academic Year 2018-2019</span>
                </div>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="https://drive.google.com/file/d/1k79PZoqCWRRZ9lLc6O9TUWaFsSGAhPw-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
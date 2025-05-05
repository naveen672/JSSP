import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Award, ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AICTE() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">All India Council for Technical Education (AICTE) and EOA</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-500">AICTE File No.</h3>
                <p className="font-medium">South-West/1-9321175360/2021/EOA</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Name of the Institution</h3>
                <p className="font-medium">JSS Polytechnic, Mysuru.</p>
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
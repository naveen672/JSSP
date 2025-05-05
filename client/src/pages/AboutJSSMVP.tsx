import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';

export default function AboutJSSMVP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary/90 to-primary/80 text-white py-10 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About JSSMVP</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span>Home</span>
            <span>•</span>
            <span className="font-medium">About</span>
            <span>•</span>
            <span className="font-medium">JSSMVP</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-full">
              <School className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">JSS Mahavidyapeetha Heritage</h2>
          </div>
          
          <Separator className="my-6 bg-primary/10" />
          
          <div className="prose max-w-none prose-headings:text-primary">
            <p className="lead text-lg mb-6 font-medium">
              Jagadguru Sri Veerasimhasana Math, a religious monastery situated at Suttur in Mysore District of Karnataka State, has a history of about one thousand years. Jagadguru Sri Shivarathrishwara Mahavidyapeetha, popularly known as JSS Mahavidyapeetha (JSSMVP), sponsored by the above Math, was established during 1954 by the then President of JSSMVP, His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji.
            </p>
            
            <p className="mb-6">
              Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching many more programmes covering all aspects of life in the service of the nation. His Holiness's vision, enthusiasm, spirit of dedication is incomparable. The long tradition of the JSS Mahavidyapeetha is being continued now with renewed force and fervor.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-lg my-8 border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-primary mb-4">TECHNICAL EDUCATION SYSTEM OF JSS MAHAVIDYAPEETHA</h2>
              <p className="mb-0">
                As the number of Technical Institutions has increased considerably, JSS Mahavidyapeetha has established a separate Directorate to look after its Technical Institutions. This Directorate is under the control of a Director (Technical).
              </p>
            </div>
            
            <p className="mb-6">
              The JSS Mahavidyapeetha's technical education system consists of the following institutions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-2 inline-flex">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  Engineering Colleges
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sri Jayachamarajendra Engineering College, Mysuru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Academy of Technical Education(JSSATE), Bengaluru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Academy of Technical Education (JSSATE), NOIDA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Academy of Technical Education, Mauritius</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-2 inline-flex">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  Polytechnics
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Women's Polytechnic, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Polytechnic, SJCE Campus, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Polytechnic, Nanjangud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>JSS Polytechnic for the Differently Abled, Mysuru</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Other Technical Institutions:</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Three Industrial Training Institutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Consultancy Trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Three Science and Technology Entrepreneurship Parks (STEP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Nodal Centre for Entrepreneurship and Management Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Institute for Water and Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Rural Development and Self Employment Training Institution (JSS RUDSETI), Mariyala</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Urban Haath, Mysore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Centre for Management Studies, Mysore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Education Foundation, Dubai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Two JSS Skill Training Center, Thandya, Nanjangud Taluk and Mariyala, Chamarajanagar Taluk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Export Production Center, Dharawar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>JSS Export Production cum Training Centers at Talavadi, Tamilnadu, Harave and Mariyala, Chamarajanagar Taluk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
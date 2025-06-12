import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function AboutJSSMVP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "JSSMVP", path: "/about-jssmvp" }
        ]} 
      />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">About JSSMVP</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-full shadow-sm">
              <School className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              JSS Mahavidyapeetha Heritage
            </h2>
          </div>
          
          <Separator className="my-6 bg-gradient-to-r from-primary/20 to-primary/5 h-0.5 rounded-full" />
          
          <div className="prose max-w-none prose-headings:text-primary">
            <p className="lead text-lg mb-6 font-semibold text-[#1a2542] border-l-4 pl-4 py-1 border-primary/30 bg-primary/5 rounded-r-md">
              Jagadguru Sri Veerasimhasana Math, a religious monastery situated at Suttur in Mysore District of Karnataka State, has a history of about one thousand years. Jagadguru Sri Shivarathrishwara Mahavidyapeetha, popularly known as JSS Mahavidyapeetha (JSSMVP), sponsored by the above Math, was established during 1954 by the then President of JSSMVP, His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji.
            </p>
            
            <p className="mb-6 text-[#1a2542] font-medium leading-relaxed">
              Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching many more programmes covering all aspects of life in the service of the nation. His Holiness's vision, enthusiasm, spirit of dedication is incomparable. The long tradition of the JSS Mahavidyapeetha is being continued now with renewed force and fervor.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg my-8 border-l-4 border-primary shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[#1a2542]">TECHNICAL EDUCATION SYSTEM OF JSS MAHAVIDYAPEETHA</h2>
              <p className="mb-0 text-[#1a2542] font-medium">
                As the number of Technical Institutions has increased considerably, JSS Mahavidyapeetha has established a separate Directorate to look after its Technical Institutions. This Directorate is under the control of a Director (Technical).
              </p>
            </div>
            
            <p className="mb-6 text-[#1a2542] font-medium leading-relaxed">
              The JSS Mahavidyapeetha's technical education system consists of the following prestigious institutions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <h3 className="text-xl font-bold text-[#1a2542] mb-4 flex items-center">
                  <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  Engineering Colleges
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">Sri Jayachamarajendra Engineering College, Mysuru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Academy of Technical Education(JSSATE), Bengaluru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Academy of Technical Education (JSSATE), NOIDA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Academy of Technical Education, Mauritius</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <h3 className="text-xl font-bold text-[#1a2542] mb-4 flex items-center">
                  <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  Polytechnics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Women's Polytechnic, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Polytechnic, SJCE Campus, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Polytechnic, Nanjangud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span className="text-[#1a2542] font-medium">JSS Polytechnic for the Differently Abled, Mysuru</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-[#1a2542] mt-8 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </span>
              Other Technical Institutions
            </h3>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">Three Industrial Training Institutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">Consultancy Trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">Three Science and Technology Entrepreneurship Parks (STEP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">Nodal Centre for Entrepreneurship and Management Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Institute for Water and Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Rural Development and Self Employment Training Institution (JSS RUDSETI), Mariyala</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Urban Haath, Mysore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Centre for Management Studies, Mysore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Education Foundation, Dubai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">Two JSS Skill Training Center, Thandya, Nanjangud Taluk and Mariyala, Chamarajanagar Taluk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Export Production Center, Dharawar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">JSS Export Production cum Training Centers at Talavadi, Tamilnadu, Harave and Mariyala, Chamarajanagar Taluk</span>
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';

export default function AboutJSSMVP() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <School className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">About JSSMVP</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              Jagadguru Sri Veerasimhasana Math, a religious monastery situated at Suttur in Mysore District of Karnataka State, has a history of about one thousand years. Jagadguru Sri Shivarathrishwara Mahavidyapeetha, popularly known as JSS Mahavidyapeetha (JSSMVP), sponsored by the above Math, was established during 1954 by the then President of JSSMVP, His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji.
            </p>
            
            <p className="mb-6">
              Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching many more programmes covering all aspects of life in the service of the nation. His Holiness's vision, enthusiasm, spirit of dedication is incomparable. The long tradition of the JSS Mahavidyapeetha is being continued now with renewed force and fervor.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">TECHNICAL EDUCATION SYSTEM OF JSS MAHAVIDYAPEETHA</h2>
            <p className="mb-6">
              As the number of Technical Institutions has increased considerably, JSS Mahavidyapeetha has established a separate Directorate to look after its Technical Institutions. This Directorate is under the control of a Director (Technical). This system consists of:
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Four Engineering Colleges:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Sri Jayachamarajendra Engineering College, Mysuru</li>
              <li>JSS Academy of Technical Education(JSSATE), Bengaluru</li>
              <li>JSS Academy of Technical Education (JSSATE), NOIDA</li>
              <li>JSS Academy of Technical Education, Mauritius</li>
            </ul>
            
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Four Polytechnics:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>JSS Women's Polytechnic, Mysore</li>
              <li>JSS Polytechnic, SJCE Campus, Mysore</li>
              <li>JSS Polytechnic, Nanjangud</li>
              <li>JSS Polytechnic for the Differently Abled, Mysuru</li>
            </ul>
            
            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Other Technical Institutions:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Three Industrial Training Institutes</li>
              <li>Consultancy Trust</li>
              <li>Three Science and Technology Entrepreneurship Parks (STEP)</li>
              <li>Nodal Centre for Entrepreneurship and Management Development</li>
              <li>JSS Institute for Water and Health</li>
              <li>JSS Rural Development and Self Employment Training Institution (JSS RUDSETI), Mariyala</li>
              <li>JSS Urban Haath, Mysore</li>
              <li>JSS Centre for Management Studies, Mysore</li>
              <li>JSS Education Foundation, Dubai</li>
              <li>Two JSS Skill Training Center, Thandya, Nanjangud Taluk and Mariyala, Chamarajanagar Taluk</li>
              <li>JSS Export Production Center, Dharawar</li>
              <li>JSS Export Production cum Training Centers at Talavadi, Tamilnadu, Harave and Mariyala, Chamarajanagar Taluk</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
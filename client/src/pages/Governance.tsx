import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Users, ShieldCheck } from 'lucide-react';

export default function Governance() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Governance</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              The Polytechnic has the Governing Council which has a set of members constituted by the Management as per the norms of AICTE for giving guidance regarding administration of the Institution.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The composition of Governing Council:</h2>
            <p className="mb-6">
              The Governing Council shall have at least 11 members including the Chairman and the Member Secretary. The Management/Registered Society shall nominate members including the Chairman and the Member-Secretary as indicated below:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The Chairman</li>
              <li>Two to Five members (Industrialist/Technologist/Educationalist)</li>
              <li>One nominee from the Affiliating Board</li>
              <li>One nominee from All India Council for Technical Education (Ex-Officio)</li>
              <li>One nominee from the State Government (Ex-Officio)</li>
              <li>One Senior Faculty member of the Institute</li>
              <li>Principal of the concerned technical institution is the Member Secretary</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The present Members of the Governing Council:</h2>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border-b text-left">Sl.No.</th>
                    <th className="py-3 px-4 border-b text-left">Name of the Member</th>
                    <th className="py-3 px-4 border-b text-left">Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">1</td>
                    <td className="py-3 px-4 border-b">His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru President, JSS Mahavidyapeetha, Mysuru</td>
                    <td className="py-3 px-4 border-b">Chairman</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">2</td>
                    <td className="py-3 px-4 border-b">Dr.C G Betsurmath Executive Secretary JSS Mahavidyapeetha, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member Management Nominee</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">3</td>
                    <td className="py-3 px-4 border-b">Dr. B. Suresh, Director (TED), JSSMVP, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member Management Nominee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">4</td>
                    <td className="py-3 px-4 border-b">Sri Prasanna H Director, Directorate of Technical Examination, Bengaluru</td>
                    <td className="py-3 px-4 border-b">Member</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">5</td>
                    <td className="py-3 px-4 border-b">Dr. H.R. Mahadevaswamy, Joint Director (TED), JSS MVP, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member (Nominee of the State Govt.)(Ex-Officio)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">6</td>
                    <td className="py-3 px-4 border-b">Sri Achutha Bachalli K, M/s. Unilog Content Solutions, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">7</td>
                    <td className="py-3 px-4 border-b">Sri Prakash, Principal, CPC(Govt.)Polytechnic, Mysuru</td>
                    <td className="py-3 px-4 border-b">Special Invitee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">8</td>
                    <td className="py-3 px-4 border-b">Smt. Asha Kulkarni, HOD, E&C Dept., JSSP, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">9</td>
                    <td className="py-3 px-4 border-b">Sri. K.S. Bhakthavatsala, Principal, JSS Polytechnic, Mysuru</td>
                    <td className="py-3 px-4 border-b">Member Secretary</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b">10</td>
                    <td className="py-3 px-4 border-b">Sri Srikanth G Joint Director(Exam), Board of Technical Examinations, Bengaluru</td>
                    <td className="py-3 px-4 border-b">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Functions and responsibilities of the Governing Council:</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Review the action taken in connection with their solution made during last meeting.</li>
              <li>Analyze and understand the present administrative processes and provide guidance for improvement of overall development of the Institute.</li>
              <li>Critical comments on the proposed list of activities of the Institute.</li>
              <li>Analyze and guide the financial status of the Institute.</li>
              <li>Suggestions to improve the admissions, placement and other academic requirements of the institute.</li>
              <li>Approval for various activities conducted by the Institute in the areas of curricular, co-curricular and extracurricular.</li>
              <li>Approval of new initiatives, projects and suggestions for improvement.</li>
              <li>Suggestions/recommendations for further development.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
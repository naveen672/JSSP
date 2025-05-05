import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Users, ShieldCheck } from 'lucide-react';

export default function Governance() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white/90 drop-shadow-sm">Governance</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="text-white/50">•</span>
            <span className="font-medium">Governance</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <div className="prose max-w-none">
            <p className="lead text-lg mb-6 font-semibold text-[#1a2542] border-l-4 pl-4 py-1 border-primary/30 bg-primary/5 rounded-r-md">
              The Polytechnic has the Governing Council which has a set of members constituted by the Management as per the norms of AICTE for giving guidance regarding administration of the Institution.
            </p>
            
            <h2 className="text-2xl font-bold text-[#1a2542] mt-10 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              The composition of Governing Council:
            </h2>
            <p className="mb-6 text-[#1a2542] font-medium leading-relaxed">
              The Governing Council shall have at least 11 members including the Chairman and the Member Secretary. The Management/Registered Society shall nominate members including the Chairman and the Member-Secretary as indicated below:
            </p>
            
            <ul className="pl-0 mb-6 space-y-3 mt-6">
              {[
                "The Chairman",
                "Two to Five members (Industrialist/Technologist/Educationalist)",
                "One nominee from the Affiliating Board",
                "One nominee from All India Council for Technical Education (Ex-Officio)",
                "One nominee from the State Government (Ex-Officio)",
                "One Senior Faculty member of the Institute",
                "Principal of the concerned technical institution is the Member Secretary"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span className="text-[#1a2542] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold text-[#1a2542] mt-10 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                <Users className="h-5 w-5 text-primary" />
              </span>
              The present Members of the Governing Council:
            </h2>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <th className="py-3 px-4 border-b text-left font-semibold text-[#1a2542]">Sl.No.</th>
                    <th className="py-3 px-4 border-b text-left font-semibold text-[#1a2542]">Name of the Member</th>
                    <th className="py-3 px-4 border-b text-left font-semibold text-[#1a2542]">Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">1</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru President, JSS Mahavidyapeetha, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Chairman</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">2</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Dr.C G Betsurmath Executive Secretary JSS Mahavidyapeetha, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member Management Nominee</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">3</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Dr. B. Suresh, Director (TED), JSSMVP, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member Management Nominee</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">4</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Sri Prasanna H Director, Directorate of Technical Examination, Bengaluru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">5</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Dr. H.R. Mahadevaswamy, Joint Director (TED), JSS MVP, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member (Nominee of the State Govt.)(Ex-Officio)</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">6</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Sri Achutha Bachalli K, M/s. Unilog Content Solutions, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">7</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Sri Prakash, Principal, CPC(Govt.)Polytechnic, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Special Invitee</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">8</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Smt. Asha Kulkarni, HOD, E&C Dept., JSSP, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">9</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Sri. K.S. Bhakthavatsala, Principal, JSS Polytechnic, Mysuru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member Secretary</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 border-b text-[#1a2542]">10</td>
                    <td className="py-3 px-4 border-b text-[#1a2542] font-medium">Sri Srikanth G Joint Director(Exam), Board of Technical Examinations, Bengaluru</td>
                    <td className="py-3 px-4 border-b text-[#1a2542]">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold text-[#1a2542] mt-10 mb-4 flex items-center">
              <span className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-full mr-3 inline-flex shadow-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              Functions and responsibilities of the Governing Council:
            </h2>
            <ul className="pl-0 mb-6 space-y-3 mt-6">
              {[
                "Review the action taken in connection with their solution made during last meeting.",
                "Analyze and understand the present administrative processes and provide guidance for improvement of overall development of the Institute.",
                "Critical comments on the proposed list of activities of the Institute.",
                "Analyze and guide the financial status of the Institute.",
                "Suggestions to improve the admissions, placement and other academic requirements of the institute.",
                "Approval for various activities conducted by the Institute in the areas of curricular, co-curricular and extracurricular.",
                "Approval of new initiatives, projects and suggestions for improvement.",
                "Suggestions/recommendations for further development."
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-primary/20">
                  <span className="text-primary mr-2 font-bold bg-primary/10 w-6 h-6 flex items-center justify-center rounded-full">{index + 1}</span>
                  <span className="text-[#1a2542] font-medium pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
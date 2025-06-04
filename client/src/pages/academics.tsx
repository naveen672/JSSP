import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
  UserCheck,
  Target,
  Clock,
  Globe,
  Download,
  FileText,
} from "lucide-react";
import brochurePdf from "@assets/Brochure3_compressed.pdf";

export default function Academics() {
  const { data: departments, isLoading } = useQuery({
    queryKey: ["/api/departments"],
  });

  const { data: faculty } = useQuery({
    queryKey: ["/api/faculty"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Academic Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Academics
          </h2>

          {/* Course Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Medium of Instruction</h3>
              <p className="text-lg">English</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <GraduationCap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Level of Award</h3>
              <p className="text-sm">
                Diploma - Board of Technical Education, Government of Karnataka,
                Approved by AICTE, New Delhi
              </p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Duration</h3>
              <p className="text-lg">Six semesters (3 years)</p>
            </Card>
          </div>

          {/* Academic Board */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <UserCheck className="h-8 w-8" />
                Academic Board
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Institute has constituted the Academic Board to review and
                approve the academic related matters through meetings when and
                where required.
              </p>

              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Constitution of the Academic Board:
              </h3>

              <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold">
                        Sl. No.
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Constitution
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { sl: 1, constitution: "Principal", role: "Chairman" },
                      {
                        sl: 2,
                        constitution:
                          "One Representative from the State Board of Technical Examination",
                        role: "Member",
                      },
                      {
                        sl: 3,
                        constitution: "One nominee from ISTE",
                        role: "Member",
                      },
                      {
                        sl: 4,
                        constitution: "One member from NITTTR, Chennai",
                        role: "Member",
                      },
                      {
                        sl: 5,
                        constitution: "Two experts from Industry",
                        role: "Member",
                      },
                      { sl: 6, constitution: "HOD of ME", role: "Member" },
                      { sl: 7, constitution: "HOD of E&C", role: "Member" },
                      { sl: 8, constitution: "HOD of CE", role: "Member" },
                      { sl: 9, constitution: "HOD of CS", role: "Member" },
                      { sl: 10, constitution: "HOD of IS", role: "Member" },
                      { sl: 11, constitution: "HOD of E&E", role: "Member" },
                      { sl: 12, constitution: "HOD of MC", role: "Member" },
                      {
                        sl: 13,
                        constitution: "One Senior Faculty of the Institution",
                        role: "Member",
                      },
                      {
                        sl: 14,
                        constitution:
                          "One Representative of the Alumni of the Institution",
                        role: "Member",
                      },
                      {
                        sl: 15,
                        constitution:
                          "Controller of the Examination of the Institute",
                        role: "Member Secretary",
                      },
                    ].map((member, index) => (
                      <tr
                        key={member.sl}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium text-blue-600">
                          {member.sl}
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {member.constitution}
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              member.role === "Chairman"
                                ? "default"
                                : member.role === "Member Secretary"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {member.role}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Powers and Functions of the Academic Board
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To frame curricula for the courses based on the guidelines
                      of Directorate of Technical Education and get them
                      approved by the Curriculum Development Cell, DTE, Govt. of
                      Karnataka
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>To decide the teaching methods and sequence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To evolve and adopt suitable practical and
                      project-oriented training programs, educational tours etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To update the course contents according to the changing
                      needs and communicate them to the DTE
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To device suitable methods of continuous internal
                      evaluation system
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To device suitable forms of records for entering
                      marks/grades obtained by the students in the various tests
                      and examinations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To appoint such other adhoc or standing committees to
                      perform such functions as it may delegate in both
                      Curriculum formation and evaluation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      To perform such other functions as may be prescribed by
                      the Directorate of Technical Education for maintaining
                      high standard of technician training
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">College Prospectus</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Course Details</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Level:</strong> Diploma - Board of Technical Education, Government of Karnataka</li>
                        <li>• <strong>Approval:</strong> AICTE, New Delhi</li>
                        <li>• <strong>Duration:</strong> Six semesters (3 years)</li>
                        <li>• <strong>Medium:</strong> English</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Institution Vision</h4>
                      <p className="text-sm text-gray-700">
                        To be recognized as a prestigious academic center for excellence in technical education 
                        and to meet the needs of Academia, Industry & Society.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <a 
                      href={brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download College Prospectus
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

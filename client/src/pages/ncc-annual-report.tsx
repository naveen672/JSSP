import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Flag, 
  Users, 
  FileText, 
  Download,
  Award,
  AlertCircle,
  CheckCircle,
  Calendar,
  Target,
  Phone,
  Building
} from "lucide-react";
import nccReportPdf from "@assets/Ncc-report-1-1-1.pdf";

export default function NCCAnnualReport() {
  const nccAims = [
    "To develop character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens",
    "To create a pool of organized, trained and motivated youth to provide leadership in all walks of life including the Armed Forces",
    "To provide a suitable environment to motivate young Indians to take up a career in the Armed Forces",
    "To create awareness about the rich cultural heritage of our country and to inculcate the feeling of 'Unity in Diversity'"
  ];

  const activities = [
    {
      title: "Drill and Ceremonial Parades",
      description: "Regular training in drill movements and participation in ceremonial parades",
      icon: <Flag className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Adventure Training",
      description: "Mountain climbing, trekking, river crossing and other adventure activities",
      icon: <Target className="h-6 w-6 text-green-600" />
    },
    {
      title: "Social Service",
      description: "Community service, blood donation camps, and social awareness programs",
      icon: <Users className="h-6 w-6 text-red-600" />
    },
    {
      title: "National Integration",
      description: "Cultural exchange programs and unity camps to promote national integration",
      icon: <Award className="h-6 w-6 text-purple-600" />
    }
  ];

  const achievements = [
    "Best NCC Unit Award for outstanding performance",
    "State-level competitions and recognitions",
    "Participation in Republic Day parade",
    "Adventure training certifications",
    "Community service recognition",
    "Leadership development programs"
  ];

  const statistics = [
    { label: "Total Cadets", value: "150+", color: "bg-blue-100 text-blue-800" },
    { label: "Training Hours", value: "200+", color: "bg-green-100 text-green-800" },
    { label: "Activities Conducted", value: "50+", color: "bg-purple-100 text-purple-800" },
    { label: "Awards Received", value: "25+", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Flag className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">NCC Annual Report</h1>
              <p className="text-xl text-blue-100">National Cadet Corps - JSS Polytechnic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Annual Report Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The National Cadet Corps (NCC) at JSS Polytechnic has been instrumental in 
                    developing leadership qualities, discipline, and patriotic spirit among students. 
                    This annual report highlights our achievements, activities, and contributions 
                    to national development through youth engagement.
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <a 
                      href={nccReportPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Annual Report
                    </a>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-900">Report Highlights</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Report Period:</span>
                      <span className="font-medium">Academic Year 2023-24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unit Type:</span>
                      <span className="font-medium">Technical Unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-green-600">Senior Division</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-green-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Statistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key performance indicators and achievements for the academic year
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <Badge className={stat.color}>{stat.label}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NCC Aims */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NCC Aims & Objectives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core objectives that guide our NCC activities and training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {nccAims.map((aim, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{aim}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Major activities and training programs conducted during the year
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{activity.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Awards and recognitions received by our NCC unit and cadets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training schedule and specialized programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drill and ceremonial training</li>
                  <li>• Physical fitness programs</li>
                  <li>• Basic military knowledge</li>
                  <li>• Discipline and leadership</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Advanced military tactics</li>
                  <li>• Communication systems</li>
                  <li>• Map reading and navigation</li>
                  <li>• Field craft and camouflage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Special Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Adventure training camps</li>
                  <li>• Social service projects</li>
                  <li>• Cultural programs</li>
                  <li>• National integration camps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Contact NCC Unit</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        NCC Unit Office
                      </h3>
                      <p>JSS Polytechnic</p>
                      <p className="text-blue-100">Mysore-570 006, Karnataka</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Details
                      </h3>
                      <p>Phone: +91-821-2548318</p>
                      <p className="text-blue-100">Email: ncc@jssp.edu.in</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-center text-sm text-blue-100">
                      For NCC enrollment and program information, contact the NCC Officer
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
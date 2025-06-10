import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Eye, 
  GraduationCap,
  Briefcase,
  Globe,
  Building
} from "lucide-react";

export default function MechatronicsEngineering() {
  const departmentInfo = {
    name: "Department of Mechatronics Engineering",
    established: "2006",
    hod: "Mrs. Manjula M",
    intake: "30 students per year",
    duration: "3 Years (6 Semesters)"
  };

  const vision = "To develop efficient Mechatronics Engineering professionals who serve competently in the challenging field of automation and robotics with ethical values.";

  const mission = [
    "To provide quality technical education in Mechatronics Engineering",
    "To develop problem-solving skills and innovative thinking",
    "To foster industry-institute interaction for practical exposure",
    "To promote research and development activities",
    "To inculcate professional ethics and social responsibility"
  ];

  const programOutcomes = [
    "Apply knowledge of mathematics, science and engineering fundamentals",
    "Design and conduct experiments as well as analyze and interpret data",
    "Design systems, components or processes to meet desired needs",
    "Function on multidisciplinary teams effectively",
    "Identify, formulate and solve engineering problems",
    "Understand professional and ethical responsibility",
    "Communicate effectively in technical and non-technical environments",
    "Recognize the need for and engage in lifelong learning"
  ];

  const careerOpportunities = [
    "Automation Engineer",
    "Robotics Engineer", 
    "Control Systems Engineer",
    "PLC Programmer",
    "Maintenance Engineer",
    "Quality Control Engineer",
    "Production Engineer",
    "R&D Engineer"
  ];

  const laboratories = [
    {
      name: "Basic Electronics Lab",
      description: "Fundamentals of electronic components and circuits"
    },
    {
      name: "Digital Electronics Lab", 
      description: "Digital logic design and microprocessor programming"
    },
    {
      name: "PLC & SCADA Lab",
      description: "Industrial automation using PLCs and SCADA systems"
    },
    {
      name: "Robotics Lab",
      description: "Robot programming and control systems"
    },
    {
      name: "Sensors & Transducers Lab",
      description: "Study of various sensors and measurement systems"
    },
    {
      name: "CAD Lab",
      description: "Computer-aided design and simulation"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              {departmentInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging Mechanical, Electronics, and Computer Engineering for Modern Automation
            </p>
          </div>

          {/* Department Quick Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-sm text-gray-600">Established</div>
                <div className="text-lg font-semibold">{departmentInfo.established}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-sm text-gray-600">Head of Department</div>
                <div className="text-lg font-semibold">{departmentInfo.hod}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-sm text-gray-600">Annual Intake</div>
                <div className="text-lg font-semibold">{departmentInfo.intake}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="text-lg font-semibold">{departmentInfo.duration}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-accent" />
                  <span>Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{vision}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span>Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mission.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {programOutcomes.map((outcome, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">
                      PO{index + 1}
                    </Badge>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Laboratories & Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {laboratories.map((lab, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="text-lg">{lab.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{lab.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {careerOpportunities.map((career, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800">{career}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Connect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Industry Connect</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The Mechatronics Engineering department maintains strong industry partnerships to provide 
              students with practical exposure through internships, industrial visits, and guest lectures. 
              Our graduates are well-prepared for the evolving demands of the automation and robotics industry.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Industrial Visits</h3>
                  <p className="text-gray-600">Regular visits to automation and manufacturing industries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Guest Lectures</h3>
                  <p className="text-gray-600">Industry experts share practical knowledge and trends</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Internships</h3>
                  <p className="text-gray-600">Hands-on experience in leading automation companies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
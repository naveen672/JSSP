import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Clock, BookOpen } from "lucide-react";

export default function CalendarEvents() {
  const semesterCalendars = [
    {
      title: "Academic Year 2024-25 (1st Semester)",
      duration: "Induction Program: 20-06-2024 to 02-07-2024",
      totalWeeks: "16 weeks",
      totalDays: "86 working days",
      theoryExams: "From 19-11-2024",
      practicalExams: "From 04-11-2024",
      highlights: [
        "Skill Test-I: 05-08-2024 to 10-08-2024",
        "Skill Test-II: 19-08-2024 to 24-08-2024",
        "MCQ (II Sem): 05-08-2024 to 10-08-2024",
        "Open Book Test: 02-09-2024 to 06-09-2024",
        "Last Working Day: 19-10-2024"
      ]
    },
    {
      title: "Academic Year 2023-24 (Even Semester - II Sem)",
      duration: "January 8, 2024 to April 30, 2024",
      totalWeeks: "17 weeks",
      totalDays: "91 working days",
      theoryExams: "From 17-05-2024",
      practicalExams: "From 02-05-2024",
      highlights: [
        "MCQ and Skill Test-I: 12-02-2024 to 17-02-2024",
        "Skill Test-II: 04-03-2024 to 09-03-2024",
        "Open Book Test and Skill Test-III: 11-03-2024 to 16-03-2024",
        "Parents Meeting: Every 2nd Saturday",
        "Last Working Day: 30-04-2024"
      ]
    },
    {
      title: "Academic Year 2023-24 (Even Semester - IV & VI Sem)",
      duration: "January 8, 2024 to April 30, 2024",
      totalWeeks: "17 weeks",
      totalDays: "91 working days",
      theoryExams: "From 17-05-2024",
      practicalExams: "From 02-05-2024",
      highlights: [
        "Skill Test-I: 26-02-2024 to 02-03-2024",
        "Skill Test-II: 01-04-2024 to 06-04-2024",
        "CIE Tests for VI Semester scheduled",
        "ITI Lateral Entry students test calendar",
        "Last Working Day: 30-04-2024"
      ]
    }
  ];

  const mechatronicsSchedule = {
    oddSemester: {
      title: "Mechatronics Engineering - III & V Semester (2023-24 Odd)",
      totalDays: "83 working days",
      theoryExams: "From 04-12-2023",
      practicalExams: "From 20-11-2023",
      lastWorkingDay: "16-11-2023",
      highlights: [
        "Skill Test-I: 04-09-2023 to 09-09-2023",
        "Skill Test-II: 16-10-2023 to 21-10-2023",
        "NSS/NCC/RED CROSS/INNOVATION CLUB: Every Friday 2 PM TO 5 PM",
        "Technical talks/Seminars/Industrial Visits: 2nd and 4th Saturday"
      ]
    },
    firstSemester: {
      title: "Mechatronics Engineering - I Semester (2023-24)",
      inductionProgram: "03-07-2023 to 15-07-2023",
      totalDays: "95 working days",
      theoryExams: "From 04-12-2023",
      practicalExams: "From 20-11-2023",
      lastWorkingDay: "16-11-2023",
      highlights: [
        "MCQ: 21-08-2023 to 26-08-2023",
        "Open Book Test: 25-09-2023 to 30-09-2023",
        "NSS/NCC/RED CROSS/INNOVATION CLUB: Every Friday 2 PM TO 5 PM",
        "Technical talks/Seminars/Industrial Visits: 2nd and 4th Saturday"
      ]
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Calendar of Events</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Academic calendar and important events schedule for JSS Polytechnic academic year programs.
          </p>
        </div>
      </section>

      {/* Current Academic Year */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Year 2024-25</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span>First Semester Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Academic Schedule</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Induction Program: 20-06-2024 to 02-07-2024</li>
                        <li>• Total Weeks: 16</li>
                        <li>• Working Days: 86</li>
                        <li>• Principal Contact: 9686677237</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Examination Schedule</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Theory Exams: From 19-11-2024</li>
                        <li>• Practical Exams: From 04-11-2024</li>
                        <li>• Last Working Day: 19-10-2024</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Important Test Dates</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Skill Test-I: 05-08-2024 to 10-08-2024</li>
                        <li>• Skill Test-II: 19-08-2024 to 24-08-2024</li>
                        <li>• MCQ (II Sem): 05-08-2024 to 10-08-2024</li>
                        <li>• Open Book Test: 02-09-2024 to 06-09-2024</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Academic Year */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Year 2023-24</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Even Semester - II Semester */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span>Even Semester - II Semester</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Duration:</span>
                    <Badge>Jan 8 - Apr 30, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Working Days:</span>
                    <span>91 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Theory Exams:</span>
                    <span>From 17-05-2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Practical Exams:</span>
                    <span>From 02-05-2024</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <h4 className="font-semibold text-primary mb-2">Key Highlights</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• MCQ and Skill Test-I: 12-02 to 17-02-2024</li>
                      <li>• Skill Test-II: 04-03 to 09-03-2024</li>
                      <li>• Open Book Test: 11-03 to 16-03-2024</li>
                      <li>• Parents Meeting: Every 2nd Saturday</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Even Semester - IV & VI Semester */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span>Even Semester - IV & VI Semester</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Duration:</span>
                    <Badge>Jan 8 - Apr 30, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Working Days:</span>
                    <span>91 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Theory Exams:</span>
                    <span>From 17-05-2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Practical Exams:</span>
                    <span>From 02-05-2024</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <h4 className="font-semibold text-primary mb-2">Special Features</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• CIE Tests for VI Semester</li>
                      <li>• ITI Lateral Entry student tests</li>
                      <li>• Skill Test-I: 26-02 to 02-03-2024</li>
                      <li>• Skill Test-II: 01-04 to 06-04-2024</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mechatronics Department Specific */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Department of Mechatronics Engineering</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>III & V Semester (Odd 2023-24)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Working Days:</span>
                    <span>83 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Theory Exams:</span>
                    <span>From 04-12-2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Practical Exams:</span>
                    <span>From 20-11-2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Working Day:</span>
                    <span>16-11-2023</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <h4 className="font-semibold text-primary mb-2">Special Activities</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Friday Activities: NSS/NCC/RED CROSS/INNOVATION CLUB (2-5 PM)</li>
                      <li>• Technical talks: 2nd and 4th Saturday</li>
                      <li>• Industrial Visits: Scheduled throughout semester</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>I Semester (Odd 2023-24)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Induction Program:</span>
                    <span>03-07 to 15-07-2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Working Days:</span>
                    <span>95 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Theory Exams:</span>
                    <span>From 04-12-2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Practical Exams:</span>
                    <span>From 20-11-2023</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <h4 className="font-semibold text-primary mb-2">Assessment Schedule</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• MCQ: 21-08 to 26-08-2023</li>
                      <li>• Open Book Test: 25-09 to 30-09-2023</li>
                      <li>• Regular internal assessments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-accent" />
                  <span>Important Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">General Guidelines</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Students attendance informed to parents during 8th week</li>
                      <li>• Parents Meeting: Every 2nd Saturday</li>
                      <li>• Principal Contact: 9686677237</li>
                      <li>• All ITI Lateral Entry students must attend tests as per calendar</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Regular Activities</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• NSS/NCC/RED CROSS activities: Every Friday 2-5 PM</li>
                      <li>• Innovation Club activities</li>
                      <li>• Technical talks and seminars</li>
                      <li>• Industrial visits as scheduled</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
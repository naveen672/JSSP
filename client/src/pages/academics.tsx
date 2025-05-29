import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Users, Calendar, GraduationCap } from "lucide-react";

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
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover our comprehensive range of undergraduate and graduate programs designed to prepare students for successful careers.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Departments</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {departments?.map((dept: any) => (
              <AccordionItem key={dept.id} value={dept.id.toString()}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-accent" />
                    <span className="text-lg font-semibold">{dept.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <GraduationCap className="h-4 w-4 text-accent" />
                            <span className="font-medium">Programs</span>
                          </div>
                          <p className="text-sm text-gray-600">Undergraduate & Graduate</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Users className="h-4 w-4 text-accent" />
                            <span className="font-medium">Faculty</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {faculty?.filter((f: any) => f.department === dept.name).length || 0} Professors
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="font-medium">Duration</span>
                          </div>
                          <p className="text-sm text-gray-600">3-4 Years</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Distinguished Faculty</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty?.slice(0, 6).map((member: any) => (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualifications}</p>
                  <div className="flex justify-center flex-wrap gap-1">
                    {member.specializations?.slice(0, 2).map((spec: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Calendar</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Fall Semester</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Registration: August 15-25</li>
                  <li>Classes Begin: September 1</li>
                  <li>Mid-term Exams: October 15-22</li>
                  <li>Final Exams: December 10-17</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Spring Semester</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Registration: January 8-18</li>
                  <li>Classes Begin: January 22</li>
                  <li>Mid-term Exams: March 15-22</li>
                  <li>Final Exams: May 10-17</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Summer Session</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Registration: May 20-30</li>
                  <li>Classes Begin: June 5</li>
                  <li>Final Exams: July 25-30</li>
                  <li>Summer Break: August 1-30</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, User, Award } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfBodyEE() {
  const events = [
    {
      id: 1,
      society: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      event: "3 Days workshop on Basic Web Design",
      date: "14-07-2022 To 16-07-2022",
      resourcePerson: "Nandan N, Lecturer/CSE Govt Polytechnic, Sorabh",
      remarks: "Organized by EE Dept For 1st Semester Students."
    },
    {
      id: 2,
      society: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      event: "One day Work shop on SCADA and PLC application",
      date: "29/7/22",
      resourcePerson: "Shashi Kiran, Vidyut Automation Mysuru",
      remarks: "Organized by EE Dept For 4th Semester Student"
    },
    {
      id: 3,
      society: "ISTE",
      member: "JSS Polytechnic, Mysuru",
      event: "National level Technical Paper Presentation",
      date: "24-05-2023",
      resourcePerson: "",
      remarks: "Organized by E & E Dept Forum, JSS Polytechnic, Mysuru"
    }
  ];

  const memberships = [
    {
      id: 1,
      society: "The Indian Institute of Engineers, Mysuru",
      member: "Prathibha D",
      memberId: "AMIE – AM137667-8"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Electrical and Electronics Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Electrical and Electronics Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Electrical and Electronics Engineering", path: "/prof-body-ee" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Electrical and Electronics Engineering
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto py-12 px-4 flex-grow">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                    <BookOpen className="h-6 w-6" />
                    Technical Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Professional Society</TableHead>
                          <TableHead>Member</TableHead>
                          <TableHead>Technical Event</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Resource Person</TableHead>
                          <TableHead>Remarks</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {events.map((event) => (
                          <TableRow key={event.id}>
                            <TableCell className="font-medium">{event.id}</TableCell>
                            <TableCell>{event.society}</TableCell>
                            <TableCell>{event.member}</TableCell>
                            <TableCell>{event.event}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.resourcePerson}</TableCell>
                            <TableCell>{event.remarks}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    Memberships in Professional Bodies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Professional Society</TableHead>
                          <TableHead>Member</TableHead>
                          <TableHead>ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {memberships.map((membership) => (
                          <TableRow key={membership.id}>
                            <TableCell className="font-medium">{membership.id}</TableCell>
                            <TableCell>{membership.society}</TableCell>
                            <TableCell>{membership.member}</TableCell>
                            <TableCell>{membership.memberId}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                    <User className="h-6 w-6" />
                    Department Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      The Department of Electrical and Electronics Engineering at JSS Polytechnic, Mysuru 
                      has organized several workshops and technical events through professional society memberships,
                      particularly with the Indian Society for Technical Education (ISTE).
                    </p>
                    <p>
                      Notable activities include workshops on Web Design, SCADA and PLC applications, 
                      and a National level Technical Paper Presentation. These events help students 
                      enhance their technical knowledge and stay updated with industry trends.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
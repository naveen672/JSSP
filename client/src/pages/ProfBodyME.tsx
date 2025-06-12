import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, User, Award } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfBodyME() {
  const isteMemberships = [
    {
      id: 1,
      name: "JSS POLYTECHNIC, MYSURU",
      membershipId: "839"
    },
    {
      id: 2,
      name: "Dr. K S BHAKTAVATSALA",
      membershipId: "LM65626"
    }
  ];

  const ieMemberships = [
    {
      id: 1,
      name: "Dr. K S BHAKTAVATSALA",
      membershipId: "M1786371"
    }
  ];

  const events = [
    {
      id: 1,
      description: "WORKSHOP (6 DAY)",
      topic: "COMPUTER AIDED MANUFACTURING USING MASTERCAM",
      coordinator: "H M RAJASHEKHARA",
      organizedBy: "JSS POLYTECHNIC, MYSURU IN ASSOCIATION WITH STEP, MYSORU",
      year: "2022-23"
    },
    {
      id: 2,
      description: "NATIONAL LEVEL PAPER PRESENTATION (2 DAYS)",
      topic: "EMERGING TECHNOLOGIES IN ENGINEERING FIELD",
      coordinator: "PRASHANTH N MALAVADE",
      organizedBy: "JSS POLYTECHNIC, MYSURU",
      year: "2023-24"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Mechanical Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Mechanical Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Mechanical Engineering", path: "/prof-body-me" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Mechanical Engineering
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
                    <Award className="h-6 w-6" />
                    Indian Society for Technical Education (ISTE) Memberships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Name of the Faculty/Institution</TableHead>
                          <TableHead>ISTE Membership ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {isteMemberships.map((membership) => (
                          <TableRow key={membership.id}>
                            <TableCell className="font-medium">{membership.id}</TableCell>
                            <TableCell>{membership.name}</TableCell>
                            <TableCell>{membership.membershipId}</TableCell>
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
                    The Institution of Engineers (India) Memberships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Name of Faculty</TableHead>
                          <TableHead>IE Membership ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ieMemberships.map((membership) => (
                          <TableRow key={membership.id}>
                            <TableCell className="font-medium">{membership.id}</TableCell>
                            <TableCell>{membership.name}</TableCell>
                            <TableCell>{membership.membershipId}</TableCell>
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
                    <BookOpen className="h-6 w-6" />
                    Technical Events Organized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Topic</TableHead>
                          <TableHead>Coordinator</TableHead>
                          <TableHead>Organized By</TableHead>
                          <TableHead>Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {events.map((event) => (
                          <TableRow key={event.id}>
                            <TableCell className="font-medium">{event.id}</TableCell>
                            <TableCell>{event.description}</TableCell>
                            <TableCell>{event.topic}</TableCell>
                            <TableCell>{event.coordinator}</TableCell>
                            <TableCell>{event.organizedBy}</TableCell>
                            <TableCell>{event.year}</TableCell>
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
                    Department Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      The Department of Mechanical Engineering at JSS Polytechnic, Mysuru has active 
                      memberships in prestigious professional bodies including the Indian Society for 
                      Technical Education (ISTE) and The Institution of Engineers (India).
                    </p>
                    <p>
                      JSS Polytechnic, Mysore has an institutional membership with ISTE (ID: 839). 
                      Through these professional society affiliations, the Mechanical Engineering department 
                      has organized several activities including faculty development programs, technical talks, 
                      workshops, and competitions.
                    </p>
                    <p>
                      Recent notable events include a six-day workshop on Computer Aided Manufacturing using 
                      MasterCAM and a National Level Paper Presentation on Emerging Technologies in Engineering Field.
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
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Calendar, User } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfBodyCS() {
  const events = [
    {
      id: 1,
      name: "2 days workshop on \"Interview skills\"",
      date: "26/06/2022 & 30/06/2022",
      coordinator: "Sowmyashree HG",
      resourcePerson: "Saifsol, Mysuru",
      year: "2021-22"
    },
    {
      id: 2,
      name: "One week Student Development program on \"Laptop service and maintenance\"",
      date: "05/04/2023 & 12/04/2023",
      coordinator: "Somaprabha S",
      resourcePerson: "RadhaKrishan R & Madhu Kumar R, Delibir Foundation Mysuru",
      year: "2022-23"
    },
    {
      id: 3,
      name: "Natational level paper presentation",
      date: "24/05/2023",
      coordinator: "Somaprabha S",
      resourcePerson: "10 Student Present the papers from various polytechnic",
      year: "2022-23"
    },
    {
      id: 4,
      name: "State Level Faculty development program on \"Full Stock Development\"",
      date: "14/08/2023 & 19/08/2023",
      coordinator: "Lokesha KR, Sowmyashree HG",
      resourcePerson: "28 Faculties From government Aided and private polytechnic are participated",
      year: "2023-24"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Computer Science & Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Computer Science & Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Computer Science & Engineering", path: "/prof-body-cs" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Computer Science & Engineering
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
                    ISTE Approved Technical Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Technical Event</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Coordinator</TableHead>
                          <TableHead>Resource Person / Remarks</TableHead>
                          <TableHead>Academic Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {events.map((event) => (
                          <TableRow key={event.id}>
                            <TableCell className="font-medium">{event.id}</TableCell>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.coordinator}</TableCell>
                            <TableCell>{event.resourcePerson}</TableCell>
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
                    Department Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      The Department of Computer Science & Engineering at JSS Polytechnic, Mysuru 
                      has organized various technical events, workshops, and faculty development 
                      programs to enhance the technical skills of students and faculty. 
                    </p>
                    <p>
                      Notable achievements include:
                    </p>
                    <ul>
                      <li>Successfully conducted State Level Faculty Development Program on "Full Stack Development"</li>
                      <li>Organized National level paper presentation with participation from various polytechnics</li>
                      <li>Conducted workshops on industry-relevant skills like interview preparation and laptop service & maintenance</li>
                    </ul>
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
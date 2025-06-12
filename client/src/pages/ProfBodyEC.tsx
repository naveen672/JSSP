import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfBodyEC() {
  const workshops = [
    {
      id: 1,
      name: "PCB Design & Fabrication",
      sanctionDate: "April – 23",
      conductionDate: "13-5-2023",
      resourcePerson: "Vinay Y N, Florence Technologies, Mysuru",
      semester: "IV",
      organizedBy: "Sri B Parashiva Murthy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Electronics and Communication Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Electronics and Communication Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Electronics and Communication Engineering", path: "/prof-body-ec" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Electronics and Communication Engineering
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
                    ISTE Approved Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">SL No</TableHead>
                          <TableHead>Workshop</TableHead>
                          <TableHead>Date of Sanction from ISTE</TableHead>
                          <TableHead>Date of Conduction</TableHead>
                          <TableHead>Resource Person</TableHead>
                          <TableHead>Semester</TableHead>
                          <TableHead>Organized By</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {workshops.map((workshop) => (
                          <TableRow key={workshop.id}>
                            <TableCell className="font-medium">{workshop.id}</TableCell>
                            <TableCell>{workshop.name}</TableCell>
                            <TableCell>{workshop.sanctionDate}</TableCell>
                            <TableCell>{workshop.conductionDate}</TableCell>
                            <TableCell>{workshop.resourcePerson}</TableCell>
                            <TableCell>{workshop.semester}</TableCell>
                            <TableCell>{workshop.organizedBy}</TableCell>
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
                    <Calendar className="h-6 w-6" />
                    Department Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      The Department of Electronics and Communication Engineering at JSS Polytechnic, Mysuru 
                      has been actively organizing technical workshops and training programs to enhance 
                      the practical skills of students. 
                    </p>
                    <p>
                      The PCB Design & Fabrication workshop conducted in May 2023 provided students with 
                      hands-on experience in designing and manufacturing printed circuit boards, 
                      which is an essential skill for electronics engineers.
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
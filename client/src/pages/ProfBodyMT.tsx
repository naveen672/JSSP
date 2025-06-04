import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfBodyMT() {
  const events2023_24 = [
    {
      id: 1,
      date: "03/10/2023 TO 04/10/2023",
      event: "Workshop on Basic of Industrial Automation PLC, SCADA, HMI, VFD, PID controller, Temperature controller",
      resourcePerson: "Mr. Shashi Kiran M, Director, Vidyut Automation, Dattagalli, Mysuru-22",
      semester: "V sem MC and EC 59"
    },
    {
      id: 2,
      date: "13/09/2023 To 15/09/2023",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "III sem MC 27"
    },
    {
      id: 3,
      date: "19/09/2023 To 21/09/2023",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "III sem MC, EE, EC, CS 14"
    }
  ];

  const events2022_23 = [
    {
      id: 1,
      date: "30/5/2022 to 1/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "IV sem MC & EC 22"
    },
    {
      id: 2,
      date: "2/6/2022 to 4/6/2022",
      event: "National Conference on Emerging Technologies in Engineering Field-2023",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "National Level 3"
    }
  ];

  const events2021_22 = [
    {
      id: 1,
      date: "30/5/2022 to 1/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "IV sem MC & EC 22"
    },
    {
      id: 2,
      date: "2/6/2022 to 4/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "IV sem MC, IS, CS 21"
    },
    {
      id: 3,
      date: "15/6/2022 to 16/6/2022",
      event: "Arduino Workshop",
      resourcePerson: "Manjula M, HOD, Department of Mechatronics, J S S polytechnic, Mysuru",
      semester: "1V sem EC JSSPW MYSURU 21"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Mechatronics Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Mechatronics Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Mechatronics Engineering", path: "/prof-body-mt" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Mechatronics Engineering
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
                    <Calendar className="h-6 w-6" />
                    Academic Events by Year
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="2023-24">
                    <TabsList className="grid w-full md:w-fit grid-cols-3">
                      <TabsTrigger value="2023-24">2023-24</TabsTrigger>
                      <TabsTrigger value="2022-23">2022-23</TabsTrigger>
                      <TabsTrigger value="2021-22">2021-22</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="2023-24" className="mt-4">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">SL No</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Name of the Event</TableHead>
                              <TableHead>Name of the Resource Person</TableHead>
                              <TableHead>Semester</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {events2023_24.map((event) => (
                              <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.id}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.event}</TableCell>
                                <TableCell>{event.resourcePerson}</TableCell>
                                <TableCell>{event.semester}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="2022-23" className="mt-4">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">SL No</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Name of the Event</TableHead>
                              <TableHead>Name of the Resource Person</TableHead>
                              <TableHead>Semester</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {events2022_23.map((event) => (
                              <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.id}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.event}</TableCell>
                                <TableCell>{event.resourcePerson}</TableCell>
                                <TableCell>{event.semester}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="2021-22" className="mt-4">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">SL No</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Name of the Event</TableHead>
                              <TableHead>Name of the Resource Person</TableHead>
                              <TableHead>Semester</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {events2021_22.map((event) => (
                              <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.id}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.event}</TableCell>
                                <TableCell>{event.resourcePerson}</TableCell>
                                <TableCell>{event.semester}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                    <BookOpen className="h-6 w-6" />
                    Department Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>
                      The Department of Mechatronics Engineering at JSS Polytechnic, Mysuru has been 
                      actively organizing a variety of technical events and workshops focused on 
                      enhancing the practical skills of students across multiple departments.
                    </p>
                    <p>
                      Key focus areas include:
                    </p>
                    <ul>
                      <li>Arduino programming and applications</li>
                      <li>Industrial Automation technologies (PLC, SCADA, HMI)</li>
                      <li>Interdisciplinary workshops involving students from multiple departments (MC, EC, CS, EE)</li>
                      <li>National-level technical conferences</li>
                    </ul>
                    <p>
                      The department has conducted multiple Arduino workshops across three academic years, 
                      benefiting students from Mechatronics, Electronics & Communication, Computer Science, 
                      Information Science, and Electrical & Electronics departments, demonstrating a 
                      commitment to interdisciplinary technical education.
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
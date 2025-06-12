import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, User, Award } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfBodyCE() {
  const societies = [
    {
      id: 1,
      name: "The Institute of Engineering Kolkata",
      members: "Roopesh Kumar B",
      events: "–"
    },
    {
      id: 2,
      name: "Indian Society of Technical Education",
      members: "JSS Polytechnic, Mysuru",
      events: "National Seminar on Emerging Technologies in Engineering Field"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Bodies - Civil Engineering - JSS Polytechnic</title>
        <meta name="description" content="Professional Bodies and technical events organized by the Department of Civil Engineering at JSS Polytechnic, Mysuru." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Academics", path: "/academics" },
            { label: "Professional Bodies", path: "/academics#professional-bodies" },
            { label: "Civil Engineering", path: "/prof-body-ce" }
          ]} 
        />

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Professional Bodies - Civil Engineering
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
                    Professional Societies Registered
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
                          <TableHead>Events</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {societies.map((society) => (
                          <TableRow key={society.id}>
                            <TableCell className="font-medium">{society.id}</TableCell>
                            <TableCell>{society.name}</TableCell>
                            <TableCell>{society.members}</TableCell>
                            <TableCell>{society.events}</TableCell>
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
                      The Department of Civil Engineering at JSS Polytechnic, Mysuru has memberships 
                      in prestigious professional bodies including The Institute of Engineering Kolkata 
                      and the Indian Society of Technical Education (ISTE).
                    </p>
                    <p>
                      Through the ISTE membership, the department has organized a National Seminar 
                      on Emerging Technologies in Engineering Field, providing students and faculty 
                      with opportunities to engage with the latest developments in civil engineering.
                    </p>
                    <p>
                      The department continues to strengthen its professional networks through these 
                      memberships, benefiting students with exposure to industry standards, technical 
                      seminars, and knowledge-sharing opportunities.
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
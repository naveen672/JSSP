import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Building2, Monitor, Wrench, Zap, Cpu, Users } from "lucide-react";

export default function Infrastructure() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Infrastructure</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            State-of-the-art facilities and modern infrastructure supporting academic excellence across all departments.
          </p>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Modern Classrooms</h3>
                <p className="text-sm text-gray-600">Well-equipped classrooms with multimedia facilities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Monitor className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Advanced Laboratories</h3>
                <p className="text-sm text-gray-600">Specialized labs with modern equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Safety Standards</h3>
                <p className="text-sm text-gray-600">Comprehensive safety measures in all facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Infrastructure */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Department Infrastructure</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {/* Computer Science Department */}
            <AccordionItem value="cs-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Computer Science Department Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 213 (3rd Year)</div>
                            <div className="text-gray-600">Area: 63.8 sq.m</div>
                            <div className="text-gray-600">Equipped with: Desktop, Multimedia Projector, CCTV, Green Board, Desks, Lights, Fans</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 207 (2nd Year)</div>
                            <div className="text-gray-600">Area: 54.75 sq.m</div>
                            <div className="text-gray-600">Equipped with: Desktop, Multimedia Projector, CCTV, Green Board, Desks, Lights, Fans</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room CS-P104 (1st Year)</div>
                            <div className="text-gray-600">Area: 91.2 sq.m</div>
                            <div className="text-gray-600">Equipped with: Green Board, Desks, Lights, Fans</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Seminar Hall 201</div>
                            <div className="text-gray-600">Area: 147 sq.m (All Departments)</div>
                            <div className="text-gray-600">Equipped with: I/O Point with internet, Desktop, Multimedia Projector, CCTV, Green Board</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Laboratory Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Well-established laboratories with sufficient computers</li>
                          <li>• 1:1 computer to student ratio</li>
                          <li>• Batch size: around 20 students</li>
                          <li>• Available during free time for project work</li>
                          <li>• Essential hardware and software installed</li>
                          <li>• One faculty and one technical staff per session</li>
                          <li>• Lab manuals shared with all students</li>
                          <li>• Clean and hygienic environment</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Mechanical Engineering Department */}
            <AccordionItem value="me-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Mechanical Engineering Department Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms & Facilities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 201A</div>
                            <div className="text-gray-600">Area: 73.5 sq.m | Capacity: 60</div>
                            <div className="text-gray-600">Equipment: CCTV, Multimedia Projector</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 216</div>
                            <div className="text-gray-600">Area: 112.42 sq.m | Capacity: 60</div>
                            <div className="text-gray-600">Equipment: CCTV</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room P003</div>
                            <div className="text-gray-600">Area: 91.2 sq.m | Capacity: 60</div>
                            <div className="text-gray-600">Equipment: CCTV</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Laboratories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Computer Lab:</span>
                            <span>144 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fluid Power Engineering Lab:</span>
                            <span>30.8 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3D Printing Lab:</span>
                            <span>31.8 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Machine Shop:</span>
                            <span>170 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Workshop:</span>
                            <span>200 sq.m</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-accent/10 rounded">
                          <p className="text-xs">Batch size: 21 students | Equipment: Lathes, shapers, milling machines, 3D printer</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Safety Measures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-1">
                          <li>• Safety charts displayed in all labs</li>
                          <li>• Electrical wires protected by MCB and fuses</li>
                          <li>• First aid kit available</li>
                          <li>• Fire extinguisher installed</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Safety gloves provided</li>
                          <li>• Welding apron and goggles</li>
                          <li>• Proper earthing system</li>
                          <li>• CCTV cameras for monitoring</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Electrical & Electronics Engineering */}
            <AccordionItem value="ee-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Electrical & Electronics Engineering Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 006 (3rd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m | Equipment: Green Board</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 210 (2nd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m | Equipment: Green Board/Projector</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room CS-P001 (1st Year)</div>
                            <div className="text-gray-600">Area: 91.6 sq.m | Equipment: Projector and Black Board</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Specialized Laboratories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Electrical Machines Lab:</span>
                            <span>41.8 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Switch Gear & Protection Lab:</span>
                            <span>41.8 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Electronics Lab:</span>
                            <span>41.8 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Computer Lab:</span>
                            <span>55.48 sq.m</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-accent/10 rounded">
                          <p className="text-xs">Batch size: 20 students | Well equipped with electrical and electronics equipment</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Electronics & Communication */}
            <AccordionItem value="ec-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <Cpu className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Electronics & Communication Department Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Main Block 206 (1st Year)</div>
                            <div className="text-gray-600">Area: 54.75 sq.m | Capacity: 60</div>
                            <div className="text-gray-600">Equipment: Black board, Desk, Podium, Notice board, CCTV</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Main Block 211 (2nd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m | Capacity: 40</div>
                            <div className="text-gray-600">Equipment: Black board, Desk, Podium, Notice board, CCTV</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Block 2 P105 (3rd Year)</div>
                            <div className="text-gray-600">Area: 91.2 sq.m | Capacity: 60</div>
                            <div className="text-gray-600">Equipment: Black board, Desk, Podium, Notice board</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Laboratories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Electronics Lab (101):</span>
                            <span>91.98 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Computer Lab (102):</span>
                            <span>38.69 sq.m</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Digital Lab (103):</span>
                            <span>55.48 sq.m</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-accent/10 rounded">
                          <p className="text-xs">Batch size: 20 students | Student-Computer ratio: 1:1</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Mechatronics Department */}
            <AccordionItem value="mc-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Mechatronics Department Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 208 (3rd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m</div>
                            <div className="text-gray-600">Equipment: Green Board, Podium, Benches, Fans, Lights, CCTV</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 214 (2nd Year)</div>
                            <div className="text-gray-600">Area: 31.35 sq.m</div>
                            <div className="text-gray-600">Equipment: LCD Projector, Computer, LAN, Speakers, Green Board, CCTV</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room P004 (1st Year)</div>
                            <div className="text-gray-600">Area: 91.2 sq.m</div>
                            <div className="text-gray-600">Equipment: Black Board, Chalk, Duster, Notice Board</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room 201 (All Departments)</div>
                            <div className="text-gray-600">Area: 147 sq.m</div>
                            <div className="text-gray-600">Equipment: LCD Projector, LAN, Speakers, Green/White Board, CCTV</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Laboratories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Computer Applications Lab (112)</div>
                            <div className="text-gray-600">Area: 102.25 sq.m</div>
                            <div className="text-gray-600">1:1 computer ratio | 15 students/batch | UPS: 7.5 KVA x 2</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Analog Electronics Lab (113)</div>
                            <div className="text-gray-600">Area: 102.24 sq.m</div>
                            <div className="text-gray-600">3:1 setup ratio | 15 students/batch</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Civil Engineering Department */}
            <AccordionItem value="ce-infrastructure">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">Civil Engineering Department Infrastructure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Classrooms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room CE-211 (3rd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m</div>
                            <div className="text-gray-600">Equipment: Black Board, Chalk, Duster, Notice Board</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room CE-007 (2nd Year)</div>
                            <div className="text-gray-600">Area: 41.8 sq.m</div>
                            <div className="text-gray-600">Equipment: Black Board, Chalk, Duster, Notice Board</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="font-medium">Room CE-P101 (1st Year)</div>
                            <div className="text-gray-600">Area: 91.6 sq.m</div>
                            <div className="text-gray-600">Equipment: Black Board, Chalk, Duster, Notice Board</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Specialized Laboratories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Survey Lab</li>
                          <li>• Material Testing Lab</li>
                          <li>• Computer Lab</li>
                          <li>• Construction Lab</li>
                        </ul>
                        <div className="mt-4 p-3 bg-accent/10 rounded">
                          <p className="text-xs">Batch size: 21 students | 1:1 computer ratio | Well-equipped with civil engineering equipment</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Common Safety Measures */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Common Safety Measures (All Departments)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <ul className="space-y-1">
                  <li>• Safety charts displayed</li>
                  <li>• MCB and fuse protection</li>
                  <li>• First-aid kits available</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Fire extinguishers installed</li>
                  <li>• Proper earthing systems</li>
                  <li>• CCTV monitoring</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Clean and hygienic environment</li>
                  <li>• Wide doors and adequate ventilation</li>
                  <li>• Regular maintenance schedules</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
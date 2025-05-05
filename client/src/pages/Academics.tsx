import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { newsItems, programs } from '@/data/collegeData';
import { BookOpen, Clock, Calendar, User, CheckCircle, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

export default function Academics() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white drop-shadow-lg">Academic Programs</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover our industry-focused diploma programs designed to prepare you for a successful career
          </p>
        </div>
      </div>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <BookOpen className="text-primary mr-3" size={32} />
            <h2 className="text-3xl font-heading font-bold text-primary">Our Programs</h2>
          </div>
          <div className="w-24 h-1 bg-secondary mb-8"></div>
          
          <div className="grid grid-cols-1 gap-16">
            {programs.map((program) => (
              <div 
                key={program.id} 
                id={`program-${program.id}`}
                className="scroll-mt-20 bg-neutral rounded-lg overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div 
                    className="md:col-span-2 h-full min-h-[250px] bg-cover bg-center"
                    style={{ backgroundImage: `url('${program.image}')` }}
                  ></div>
                  <div className="p-8 md:col-span-3">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4">{program.title}</h3>
                    <p className="text-neutral-gray mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="text-primary mr-2" size={20} />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="text-primary mr-2" size={20} />
                        <span>Intake: 60 Students</span>
                      </div>
                      <div className="flex items-center">
                        <User className="text-primary mr-2" size={20} />
                        <span>Eligibility: 10th Pass</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="text-primary mr-2" size={20} />
                        <span>Mode: {program.type}</span>
                      </div>
                    </div>
                    
                    <Tabs defaultValue="curriculum">
                      <TabsList className="mb-6">
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        <TabsTrigger value="career">Career Prospects</TabsTrigger>
                        <TabsTrigger value="faculty">Faculty</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="curriculum">
                        <h4 className="font-heading font-semibold text-lg mb-4">Program Curriculum</h4>
                        <Accordion type="single" collapsible className="mb-6">
                          <AccordionItem value="year1">
                            <AccordionTrigger>First Year</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Engineering Mathematics</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Engineering Physics</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Engineering Chemistry</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Basic Electronics</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Communication Skills</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="year2">
                            <AccordionTrigger>Second Year</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Advanced Mathematics</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Program-specific core courses</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Technical Drawing</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Workshop Practice</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="year3">
                            <AccordionTrigger>Third Year</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Advanced program-specific courses</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Industrial Training</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Project Work</span>
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="text-primary mr-2" size={16} />
                                  <span>Professional Ethics</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        
                        <Button variant="outline" className="flex items-center">
                          <Download className="mr-2" size={16} />
                          Download Detailed Syllabus
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="career">
                        <h4 className="font-heading font-semibold text-lg mb-4">Career Opportunities</h4>
                        <p className="mb-4">Graduates of this program can pursue careers in:</p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center">
                            <CheckCircle className="text-primary mr-2" size={16} />
                            <span>Manufacturing industries</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="text-primary mr-2" size={16} />
                            <span>Design and development firms</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="text-primary mr-2" size={16} />
                            <span>Government organizations</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="text-primary mr-2" size={16} />
                            <span>Further studies in engineering</span>
                          </li>
                        </ul>
                        <p className="text-sm italic">* Our placement cell assists students in finding suitable employment opportunities.</p>
                      </TabsContent>
                      
                      <TabsContent value="faculty">
                        <h4 className="font-heading font-semibold text-lg mb-4">Program Faculty</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center p-4 bg-white rounded-lg shadow">
                            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                              <User className="text-white" size={24} />
                            </div>
                            <div>
                              <h5 className="font-semibold">Prof. Rajesh Kumar</h5>
                              <p className="text-sm text-neutral-gray">Department Head, 15+ years experience</p>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-white rounded-lg shadow">
                            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                              <User className="text-white" size={24} />
                            </div>
                            <div>
                              <h5 className="font-semibold">Dr. Priya Sharma</h5>
                              <p className="text-sm text-neutral-gray">Senior Faculty, PhD in Engineering</p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Academic Resources</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              We provide various resources to support your academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary text-center mb-4">Digital Library</h3>
              <p className="text-neutral-gray text-center mb-6">
                Access thousands of e-books, journals, and research papers to enhance your learning experience.
              </p>
              <div className="text-center">
                <Button variant="outline" className="text-primary">Learn More</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary text-center mb-4">Learning Management System</h3>
              <p className="text-neutral-gray text-center mb-6">
                Our state-of-the-art LMS provides access to course materials, assignments, and online assessments.
              </p>
              <div className="text-center">
                <Button variant="outline" className="text-primary">Learn More</Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="5" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                  <path d="M8 10h8"></path>
                  <path d="M8 14h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary text-center mb-4">Academic Counseling</h3>
              <p className="text-neutral-gray text-center mb-6">
                Our experienced faculty provides counseling and guidance to help you excel in your academic journey.
              </p>
              <div className="text-center">
                <Button variant="outline" className="text-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

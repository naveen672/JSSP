import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/collegeData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { 
  CalendarDays, 
  FileText, 
  GraduationCap, 
  Users, 
  HelpCircle, 
  Download,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Admissions() {
  const admissionSteps = [
    {
      title: "Application Submission",
      description: "Complete the online application form and pay the application fee.",
      icon: <FileText className="h-8 w-8 text-primary" />
    },
    {
      title: "Document Verification",
      description: "Submit required documents for verification at the admission office.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />
    },
    {
      title: "Entrance Test",
      description: "Appear for the entrance test (if applicable for your chosen program).",
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Interview",
      description: "Attend a personal interview with the department faculty.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Admission Confirmation",
      description: "Pay the first semester fee to confirm your admission.",
      icon: <CalendarDays className="h-8 w-8 text-primary" />
    }
  ];

  const faqs = [
    {
      question: "What are the eligibility criteria for admission?",
      answer: "For most diploma programs, you need to have passed 10th standard (SSC) with minimum 35% marks in Science and Mathematics. Specific programs may have additional requirements."
    },
    {
      question: "Is there an entrance examination?",
      answer: "Yes, we conduct an entrance examination for all diploma programs to assess the aptitude and basic knowledge of applicants in subjects like Mathematics, Science, and General Knowledge."
    },
    {
      question: "What is the fee structure?",
      answer: "The fee structure varies by program. Generally, it ranges from ₹30,000 to ₹45,000 per year. Detailed fee structure is available in the admission brochure."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit-based scholarships to deserving students. Additionally, government scholarships for SC/ST/OBC students are facilitated through our scholarship cell."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: 10th mark sheet and passing certificate, Transfer certificate, Character certificate, Caste certificate (if applicable), 4 passport size photographs, and Aadhar card."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Admissions</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Begin your journey towards a successful technical career at JSS Polytechnic
          </p>
        </div>
      </div>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Admission Process</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              Follow these simple steps to secure your admission at JSS Polytechnic
            </p>
          </div>
          
          <div className="relative">
            {/* Connected line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light top-0 hidden md:block"></div>
            
            <div className="space-y-12">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-6 flex justify-center">
                      <div className="bg-neutral p-8 rounded-lg shadow-md max-w-md">
                        <div className="flex items-center mb-4">
                          {step.icon}
                          <h3 className="text-xl font-heading font-bold text-primary ml-3">
                            Step {index + 1}: {step.title}
                          </h3>
                        </div>
                        <p className="text-neutral-gray">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white"
              asChild
            >
              <a href="#application-form">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Important Dates</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="p-4 text-left">Event</th>
                        <th className="p-4 text-left">Start Date</th>
                        <th className="p-4 text-left">End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Application Submission</td>
                        <td className="p-4">April 1, 2024</td>
                        <td className="p-4">May 31, 2024</td>
                      </tr>
                      <tr className="border-b bg-neutral">
                        <td className="p-4">Entrance Examination</td>
                        <td className="p-4">June 15, 2024</td>
                        <td className="p-4">June 15, 2024</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Result Declaration</td>
                        <td className="p-4">June 30, 2024</td>
                        <td className="p-4">June 30, 2024</td>
                      </tr>
                      <tr className="border-b bg-neutral">
                        <td className="p-4">Document Verification</td>
                        <td className="p-4">July 5, 2024</td>
                        <td className="p-4">July 15, 2024</td>
                      </tr>
                      <tr>
                        <td className="p-4">Commencement of Classes</td>
                        <td className="p-4">August 1, 2024</td>
                        <td className="p-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center">
                <Download className="mr-2" size={16} />
                Download Academic Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Application Form</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              You can apply online or download the application form
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Button 
              className="bg-primary hover:bg-primary-dark text-white w-full md:w-auto"
              size="lg"
            >
              Apply Online
            </Button>
            <span className="text-neutral-gray">OR</span>
            <Button 
              variant="outline"
              className="flex items-center w-full md:w-auto"
              size="lg"
            >
              <Download className="mr-2" size={18} />
              Download Application Form
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="text-primary mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <div className="w-24 h-1 bg-secondary mx-auto mt-2 mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 p-4 bg-primary-light rounded-lg">
              <p className="text-center">
                Still have questions? Contact our admission cell at <a href="mailto:admissions@jsspolytechnic.edu.in" className="text-primary font-semibold">admissions@jsspolytechnic.edu.in</a> or call <a href="tel:+918765432100" className="text-primary font-semibold">+91 8765432100</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

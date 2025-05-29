import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, FileText, FileDown, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CalendarOfEvents() {
  const calendarDocuments = [
    {
      title: 'Calendar of Events 2024-25 (I Semester)',
      file: '/documents/calender-of-events.doc-24-25-Ist-Sem.pdf',
      description: 'Academic calendar for 2024-25 I Semester with important dates including test schedules, holidays, and other academic activities.',
      date: 'June 2024 to October 2024',
      color: 'primary'
    },
    {
      title: 'Calendar of Events 2023-24 (Odd Semester)',
      file: '/documents/Dept-calender-of-events-2023-24-odd-sem-1.pdf',
      description: 'Academic calendar for 2023-24 Odd Semester (I, III & V Semester) with test schedules and important events for Department of Mechatronics Engineering.',
      date: 'July 2023 to November 2023',
      color: 'secondary'
    },
    {
      title: 'Calendar of Events 2023-24 (Even Semester)',
      file: '/documents/calender-of-events.doc-2023-24-even1.pdf',
      description: 'Academic calendar for 2023-24 Even Semester (II, IV & VI Semester) including important dates, test schedules, and holidays.',
      date: 'January 2024 to April 2024',
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Calendar of Events</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="text-white/50">•</span>
            <span className="font-medium">Calendar of Events</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mb-4 shadow-sm">
              <Calendar className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a2542] mb-4">
              Academic Calendar
            </h2>
            <p className="text-lg text-[#1a2542]/80 max-w-2xl mx-auto">
              Access our academic calendar documents containing important dates, test schedules, holidays, and other academic activities for each semester.
            </p>
          </div>
          
          <div className="grid gap-6">
            {calendarDocuments.map((doc, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 h-full">
                    <div className={`bg-gradient-to-br from-${doc.color} to-${doc.color}/80 text-white p-6 flex flex-col justify-center items-center md:items-start md:col-span-1`}>
                      <FileText className="h-10 w-10 mb-3" />
                      <Badge variant="outline" className="bg-white/10 text-white border-0 backdrop-blur-sm">
                        PDF Document
                      </Badge>
                    </div>
                    <div className="p-6 md:col-span-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#1a2542] mb-2">{doc.title}</h3>
                        <div className="mb-3 flex items-center text-[#1a2542]/70 text-sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{doc.date}</span>
                        </div>
                        <p className="text-[#1a2542]/80">{doc.description}</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <Button 
                          asChild 
                          variant="outline" 
                          className="gap-2 hover:bg-primary/10 transition-colors"
                        >
                          <a 
                            href={doc.file} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            View Calendar <FileDown className="h-4 w-4 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-l-4 border-primary shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a2542] mb-2">Important Notes</h3>
                <ul className="space-y-2 text-[#1a2542]/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Students are advised to regularly check the calendar for any updates regarding test schedules and holidays.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>The dates for skill tests, MCQs, and open book tests are highlighted in the calendar documents.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>For any clarifications regarding the calendar, please contact the academic section.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
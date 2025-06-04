import { Link } from 'wouter';
import { ArrowRight, Clock, School, GraduationCap, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  type: string;
  departmentLink?: string;
}

interface ProgramsSectionProps {
  programs: Program[];
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 px-4">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
            <GraduationCap className="text-secondary" size={24} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">Our Programs</h2>
          </div>
          <div className="w-20 md:w-24 h-1 bg-secondary mx-auto mt-3 md:mt-4 mb-4 md:mb-6"></div>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our industry-aligned diploma programs designed to give you 
            practical skills and knowledge for a successful career in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.id}
              className="bg-neutral rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: typeof program.image === 'string' && program.image.startsWith('http') 
                  ? `url(${program.image})` 
                  : `url('${program.image}')`
                }}
              ></div>
              <CardContent className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base font-medium leading-relaxed">{program.description}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 mb-3 flex-wrap">
                  <Clock className="text-primary text-base mr-1 sm:mr-2" size={16} />
                  <span>{program.duration}</span>
                  <span className="mx-2">|</span>
                  <School className="text-primary text-base mr-1 sm:mr-2" size={16} />
                  <span>{program.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    href={program.departmentLink || `/academics#program-${program.id}`} 
                    className="text-secondary text-sm sm:text-base font-medium hover:underline flex items-center"
                  >
                    Learn more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md bg-gray-100 border border-gray-200 text-gray-800 px-1.5 sm:px-2 py-1 text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
                      Options <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {program.departmentLink && (
                        <DropdownMenuItem asChild>
                          <Link href={program.departmentLink} className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Department Page</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('cs') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-cs" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('ec') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-ec" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('ee') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-ee" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('me') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-me" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('mt') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-mt" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('ce') && (
                        <DropdownMenuItem asChild>
                          <Link href="/prof-body-ce" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Professional Body</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      {program.departmentLink && program.departmentLink.includes('is') && (
                        <DropdownMenuItem asChild>
                          <Link href="/academics" className="cursor-pointer flex items-center text-xs sm:text-sm">
                            <School className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Program Details</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/academics"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

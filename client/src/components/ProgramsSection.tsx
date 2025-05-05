import { Link } from 'wouter';
import { ArrowRight, Clock, School } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  type: string;
}

interface ProgramsSectionProps {
  programs: Program[];
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Programs</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Discover our industry-aligned diploma programs designed to give you 
            practical skills and knowledge for a successful career.
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
                style={{ backgroundImage: `url('${program.image}')` }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-neutral-gray mb-4 text-base">{program.description}</p>
                <div className="flex items-center text-sm text-neutral-gray mb-4">
                  <Clock className="text-primary text-base mr-2" size={18} />
                  <span>{program.duration}</span>
                  <span className="mx-2">|</span>
                  <School className="text-primary text-base mr-2" size={18} />
                  <span>{program.type}</span>
                </div>
                <Link href={`/academics#program-${program.id}`} className="inline-block text-secondary font-medium hover:underline flex items-center">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
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

import { Link } from 'wouter';
import { Building } from 'lucide-react';

interface Facility {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Building className="text-secondary" size={28} />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Campus Facilities</h2>
          </div>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-base font-medium text-white/90 leading-relaxed">
            Our campus features modern facilities designed to provide students with the best learning environment and resources for their academic and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-primary-light rounded-lg p-6 text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{facility.title}</h3>
              <p className="text-white/90 text-base font-medium leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/campus-life"
            className="inline-block bg-white text-primary hover:bg-neutral hover:text-primary-dark font-medium px-6 py-3 rounded-md transition duration-300"
          >
            View All Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}

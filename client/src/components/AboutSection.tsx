import { Link } from 'wouter';
import { CheckCircle, Info, CalendarDays, Users, Landmark } from 'lucide-react';

interface AboutSectionProps {
  description: string[];
  features: string[];
  stats: {
    value: string;
    label: string;
  };
  imageUrl: string;
  logoUrl?: string;
}

export default function AboutSection({ description, features, stats, imageUrl, logoUrl }: AboutSectionProps) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 flex items-center gap-6">
              <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-md transform transition-transform duration-300 hover:scale-105 bg-white">
                <img src="/images/jssmvp.png" alt="JSS Mahavidyapeetha" className="h-16 w-16 rounded-full object-contain" />
              </div>
              <div className="rounded-full overflow-hidden border-2 border-primary p-1 shadow-md transform transition-transform duration-300 hover:scale-105 bg-white">
                <img src="/images/jsspoly.png" alt="JSS Polytechnic" className="h-16 w-16 rounded-full object-contain" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-secondary" size={28} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">About JSS Polytechnic</h2>
            </div>
            <div className="w-24 h-1 bg-secondary mb-6"></div>
            
            {description.map((paragraph, index) => (
              index === 0 ? (
                <p key={index} className="lead text-lg mb-6 font-semibold text-[#1a2542] border-l-4 pl-4 py-1 border-primary/30 bg-primary/5 rounded-r-md">{paragraph}</p>
              ) : (
                <p key={index} className="mb-4 text-[#1a2542] font-medium leading-relaxed">{paragraph}</p>
              )
            ))}
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-2" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Link 
              href="/about"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Discover Our Story
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src={imageUrl}
              alt="JSS Polytechnic Campus" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg md:w-48 hidden md:block">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{stats.value}</div>
                  <div className="text-sm text-neutral-gray">{stats.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

export default function CtaSection({ title, description, primaryButton, secondaryButton }: CtaSectionProps) {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{title}</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg font-medium text-white/90 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg"
            className="bg-white text-secondary hover:bg-neutral hover:text-secondary-dark font-medium px-8 py-4 rounded-md transition duration-300 text-lg" 
            asChild
          >
            <Link href={primaryButton.url} className="flex items-center justify-center gap-2">
              {primaryButton.text}
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button 
            size="lg"
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-secondary font-medium px-8 py-4 rounded-md transition duration-300 text-lg"
            asChild
          >
            <Link href={secondaryButton.url} className="flex items-center justify-center gap-2">
              {secondaryButton.text}
              <Send size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

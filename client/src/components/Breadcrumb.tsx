import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 py-2 px-4 border-b border-gray-200">
      <div className="container mx-auto">
        <nav className="flex text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                {index === items.length - 1 ? (
                  <span className="text-primary font-medium">{item.label}</span>
                ) : (
                  <Link 
                    href={item.path} 
                    className="inline-flex items-center text-gray-700 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
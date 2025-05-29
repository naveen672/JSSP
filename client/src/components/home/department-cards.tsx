import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Computer, 
  Zap, 
  Cpu, 
  Database, 
  Building,
  ArrowRight 
} from "lucide-react";

const departmentIcons = {
  "Diploma in Mechanical Engineering": Wrench,
  "Diploma in Computer Science": Computer,
  "Diploma in Electrical Engineering": Zap,
  "Diploma in Electronics & Communication": Cpu,
  "Diploma in Information Science": Database,
  "Diploma in Civil Engineering": Building,
};

const defaultDepartments = [
  {
    id: 1,
    name: "Diploma in Mechanical Engineering",
    description: "Learn design, manufacturing, and maintenance of mechanical systems",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 2,
    name: "Diploma in Computer Science", 
    description: "Master programming, database management, and software development",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 3,
    name: "Diploma in Electrical Engineering",
    description: "Study power systems, electrical machines, and control systems",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 4,
    name: "Diploma in Electronics & Communication",
    description: "Explore electronic circuits, communication systems, and signal processing",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 5,
    name: "Diploma in Information Science",
    description: "Study information systems, data management, and computing technologies",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 6,
    name: "Diploma in Civil Engineering",
    description: "Learn structural design, construction management, and infrastructure development",
    duration: "3 Years",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
  },
];

export default function DepartmentCards() {
  const { data: departments, isLoading } = useQuery({
    queryKey: ["/api/departments"],
  });

  const displayDepartments = departments && Array.isArray(departments) ? departments : defaultDepartments;

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Academic Programs
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our comprehensive diploma programs designed to provide hands-on technical education and prepare students for successful careers in engineering and technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDepartments.slice(0, 6).map((dept: any, index: number) => {
            const IconComponent = departmentIcons[dept.name as keyof typeof departmentIcons] || Wrench;
            
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dept.imageUrl} 
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <IconComponent className="h-6 w-6 text-accent mr-3" />
                        <h3 className="text-xl font-semibold text-primary">{dept.name}</h3>
                      </div>
                      {dept.duration && (
                        <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                          {dept.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                    <Button variant="ghost" className="text-primary hover:text-accent transition-colors p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

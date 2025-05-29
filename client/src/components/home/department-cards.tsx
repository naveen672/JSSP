import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { 
  FlaskRound, 
  TrendingUp, 
  Cog, 
  Palette, 
  Heart, 
  Scale,
  ArrowRight 
} from "lucide-react";

const departmentIcons = {
  "Science & Technology": FlaskRound,
  "Business Administration": TrendingUp,
  "Engineering": Cog,
  "Arts & Humanities": Palette,
  "Health Sciences": Heart,
  "Law & Legal Studies": Scale,
};

const defaultDepartments = [
  {
    id: 1,
    name: "Science & Technology",
    description: "Cutting-edge research facilities and comprehensive programs in Physics, Chemistry, Biology, and Computer Science.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 2,
    name: "Business Administration", 
    description: "Comprehensive business education with focus on leadership, entrepreneurship, and global business practices.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 3,
    name: "Engineering",
    description: "State-of-the-art engineering programs in Mechanical, Electrical, Civil, and Software Engineering.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 4,
    name: "Arts & Humanities",
    description: "Creative programs in Fine Arts, Literature, History, and Philosophy fostering critical thinking and creativity.",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 5,
    name: "Health Sciences",
    description: "Comprehensive health education programs including Medicine, Nursing, Pharmacy, and Public Health.",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    id: 6,
    name: "Law & Legal Studies",
    description: "Rigorous legal education with practical training in litigation, corporate law, and legal research.",
    imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
];

export default function DepartmentCards() {
  const { data: departments, isLoading } = useQuery({
    queryKey: ["/api/departments"],
  });

  const displayDepartments = departments || defaultDepartments;

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
            Academic Excellence
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of undergraduate and graduate programs designed to prepare students for successful careers in their chosen fields.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDepartments.slice(0, 6).map((dept: any, index: number) => {
            const IconComponent = departmentIcons[dept.name as keyof typeof departmentIcons] || FlaskRound;
            
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
                    <div className="flex items-center mb-3">
                      <IconComponent className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-semibold text-primary">{dept.name}</h3>
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

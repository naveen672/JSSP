import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, Star } from "lucide-react";

const defaultFaculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Dean of Engineering",
    department: "Engineering",
    qualifications: "Ph.D. MIT, 25+ years experience",
    specializations: ["Robotics", "AI"],
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Professor of Chemistry",
    department: "Science & Technology",
    qualifications: "Ph.D. Stanford, Research Excellence Award",
    specializations: ["Biochemistry", "Research"],
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Director of Business School",
    department: "Business Administration",
    qualifications: "MBA Harvard, Former Fortune 500 Executive",
    specializations: ["Strategy", "Leadership"],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Professor of Literature",
    department: "Arts & Humanities",
    qualifications: "Ph.D. Oxford, Published Author",
    specializations: ["Literature", "Writing"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
];

export default function FacultyHighlights() {
  const { data: faculty, isLoading } = useQuery({
    queryKey: ["/api/faculty"],
  });

  const displayFaculty = faculty || defaultFaculty;

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Distinguished Faculty
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Learn from world-class educators and researchers who are leaders in their fields and dedicated to student success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(displayFaculty) ? displayFaculty.slice(0, 4).map((member: any, index: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 card-hover">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    {member.imageUrl ? (
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Users className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-4 w-4 text-accent mr-1" />
                    <p className="text-accent font-medium">{member.title}</p>
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <BookOpen className="h-4 w-4 text-gray-500 mr-1" />
                    <p className="text-sm text-gray-600">{member.qualifications}</p>
                  </div>
                  <div className="flex justify-center flex-wrap gap-1">
                    {member.specializations?.slice(0, 2).map((spec: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )) : []}
        </div>
      </div>
    </section>
  );
}

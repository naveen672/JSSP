import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Book, Microscope, Dumbbell, Home, Utensils, Monitor } from "lucide-react";

export default function FacilitiesShowcase() {
  const facilities = [
    {
      icon: Book,
      title: "Central Library",
      description: "24/7 access to over 500,000 books, digital resources, and collaborative study spaces with modern technology integration.",
    },
    {
      icon: Microscope,
      title: "Research Laboratories",
      description: "Cutting-edge research facilities equipped with the latest instruments for scientific discovery and innovation.",
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Olympic-standard sports facilities including swimming pool, tennis courts, and fitness center for holistic development.",
    },
  ];

  const additionalFacilities = [
    {
      icon: Home,
      title: "Student Housing",
      description: "Comfortable dormitories with modern amenities, Wi-Fi, and 24/7 security for a safe learning environment.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description: "Multiple dining options featuring healthy, diverse cuisines catering to various dietary preferences and needs.",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description: "Technology-enhanced learning spaces with interactive displays, video conferencing, and collaborative tools.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    },
  ];

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
            World-Class Facilities
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience education in state-of-the-art facilities designed to enhance learning, research, and personal development.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern university library" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          <div className="space-y-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <facility.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalFacilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <facility.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-primary">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

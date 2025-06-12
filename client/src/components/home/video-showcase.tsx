import { Card, CardContent } from "@/components/ui/card";
import { Play, Award, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  const videoId = "2Rdhhu7Q0ys"; // Extract video ID from YouTube URL
  
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover JSS Polytechnic
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience our institution through this comprehensive overview of our facilities, 
            academic excellence, and vibrant campus life.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
                    title="JSS Polytechnic Official Video"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Highlights */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="space-y-3">
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Building className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">Modern Infrastructure</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    State-of-the-art laboratories and well-equipped classrooms
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="space-y-3">
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">Expert Faculty</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    Experienced educators dedicated to student success
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="space-y-3">
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">Excellence Legacy</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    39 years of academic excellence and industry recognition
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
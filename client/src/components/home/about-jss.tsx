import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import jssMainBuilding from "@assets/b1.jpg";

export default function AboutJSS() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
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
            About JSS Polytechnic
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            One of the premier and oldest Polytechnics under JSS Mahavidyapeetha, established in 1954. 
            We are committed to excellence in technical education with over 300 educational institutions 
            across the country, serving more than 1,00,000 students from kindergarten to post-doctoral courses.
          </motion.p>
        </motion.div>

        {/* JSS Mahavidyapeetha Background */}
        <motion.div 
          className="mb-12 bg-white rounded-lg p-8 shadow-sm"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">JSS Mahavidyapeetha Heritage</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Institutional Legacy</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jagadguru Sri Shivarathreeshwara Mahavidyapeetha (JSSMVP) was established in 1954 by 
                His Holiness Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji. Registered under the 
                Societies Registration Act 1960, it has witnessed enormous growth in education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Mahavidyapeetha continues to play a vital role in expanding educational activities 
                across several branches of knowledge, welfare, and culture, spanning from crèches for 
                toddlers to advanced research centers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Suttur Math Connection</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suttur Math, a pilgrim center with over a thousand years of history, is situated on the 
                banks of River Kapila in Nanjangud Taluk, Mysuru District. Located 170 km from Bengaluru 
                and 28 km south of Mysuru, it houses the holy shrine of Adi Jagadguru Sri Shivarathreeshwara Shivayogiji.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Math has grown over centuries as a multi-dimensional religious, social, cultural, and 
                educational movement, contributing immensely to societal advancement.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Campus Image */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src={jssMainBuilding} 
              alt="JSS Polytechnic Main Building" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">JSS Polytechnic Campus</h4>
                <p className="text-sm opacity-90">Modern Infrastructure for Quality Education</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Award, title: "Excellence", description: "70+ years of educational excellence", color: "text-yellow-600" },
            { icon: Users, title: "Community", description: "1,00,000+ students across institutions", color: "text-blue-600" },
            { icon: Globe, title: "Reach", description: "300+ educational institutions", color: "text-green-600" },
            { icon: BookOpen, title: "Programs", description: "Kindergarten to post-doctoral courses", color: "text-purple-600" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="space-y-4">
                  <motion.div 
                    className={`w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color} transition-transform duration-300 group-hover:scale-110`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary">{feature.title}</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const defaultNews: any[] = [];

const categoryColors = {
  "Achievements": "bg-green-100 text-green-800",
  "Research": "bg-blue-100 text-blue-800",
  "Global": "bg-purple-100 text-purple-800",
  "Events": "bg-orange-100 text-orange-800",
  "Academic": "bg-indigo-100 text-indigo-800",
  "Announcements": "bg-yellow-100 text-yellow-800",
};

export default function NewsSection() {
  const { data: news, isLoading, error } = useQuery<any[]>({
    queryKey: ["/api/news"],
  });

  // Use only real news data from admin dashboard
  const displayNews = news || [];

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Latest News & Updates
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay informed about campus events, academic achievements, and institutional developments.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="mt-4 lg:mt-0 bg-primary hover:bg-primary/90">
              View All News
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Array.isArray(displayNews) ? displayNews : []).slice(0, 3).map((article: any, index: number) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => {
                if (article.link) {
                  window.open(article.link, '_blank');
                } else {
                  window.open('#', '_blank');
                }
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full card-hover hover:scale-105 hover:border-primary"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      className={categoryColors[article.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"}
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.publishedAt || article.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt || article.content?.substring(0, 150) + "..."}
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-accent transition-colors p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

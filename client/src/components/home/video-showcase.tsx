import { Card, CardContent } from "@/components/ui/card";
import { Play, Award, Users, Building } from "lucide-react";

export default function VideoShowcase() {
  const videoId = "2Rdhhu7Q0ys"; // Extract video ID from YouTube URL
  
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Discover JSS Polytechnic
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience our institution through this comprehensive overview of our facilities, 
            academic excellence, and vibrant campus life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
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

          {/* Video Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Modern Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art laboratories and well-equipped classrooms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">
                  Experienced educators dedicated to student success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Excellence Legacy</h3>
                <p className="text-gray-600 text-sm">
                  39 years of academic excellence and industry recognition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Wrench, BookOpen } from "lucide-react";

interface StudentProjectsGalleryProps {
  title?: string;
  subtitle?: string;
  showDepartmentFilter?: boolean;
}

export default function StudentProjectsGallery({ 
  title = "Student Projects & Laboratory Activities",
  subtitle = "Hands-on learning through practical experiments and innovative projects",
  showDepartmentFilter = false 
}: StudentProjectsGalleryProps) {
  
  const projectVideos = [
    {
      id: 1,
      title: "Advanced Engineering Experiments",
      department: "General Engineering",
      description: "Students conducting advanced laboratory experiments",
      videoPath: "WhatsApp Video 2025-06-06 at 10.33.10_5867aa06_1749575036616.mp4",
      category: "Laboratory Work"
    },
    {
      id: 2,
      title: "Practical Engineering Solutions",
      department: "Applied Engineering",
      description: "Innovative project development and testing",
      videoPath: "WhatsApp Video 2025-06-06 at 10.33.23_dd5f2f0b_1749575047727.mp4",
      category: "Project Development"
    },
    {
      id: 3,
      title: "Technical Skills Development",
      department: "Engineering Technology",
      description: "Students mastering technical skills through practice",
      videoPath: "WhatsApp Video 2025-06-06 at 10.33.23_b8153a15_1749575057854.mp4",
      category: "Skill Building"
    },
    {
      id: 4,
      title: "Research & Innovation",
      department: "Research Division",
      description: "Student-led research and innovation projects",
      videoPath: "WhatsApp Video 2025-06-06 at 10.33.23_6d19bc0d_1749575070874.mp4",
      category: "Research"
    },
    {
      id: 5,
      title: "Engineering Applications",
      department: "Applied Sciences",
      description: "Real-world engineering applications in action",
      videoPath: "WhatsApp Video 2025-06-06 at 10.36.17_34ba724e_1749575083580.mp4",
      category: "Applications"
    },
    {
      id: 6,
      title: "Collaborative Learning",
      department: "Team Projects",
      description: "Students working together on complex engineering challenges",
      videoPath: "WhatsApp Video 2025-06-06 at 10.36.17_009995ca_1749575106009.mp4",
      category: "Team Work"
    },
    {
      id: 7,
      title: "Advanced Methodology",
      department: "Advanced Engineering",
      description: "Implementation of advanced engineering methodologies",
      videoPath: "WhatsApp Video 2025-06-06 at 10.36.17_8594f643_1749575120679.mp4",
      category: "Advanced Studies"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Category Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-4 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">Laboratory Work</h3>
              <p className="text-xs text-gray-600">Practical experiments</p>
            </CardContent>
          </Card>

          <Card className="text-center p-4 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm">Project Development</h3>
              <p className="text-xs text-gray-600">Innovation projects</p>
            </CardContent>
          </Card>

          <Card className="text-center p-4 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">Team Projects</h3>
              <p className="text-xs text-gray-600">Collaborative learning</p>
            </CardContent>
          </Card>

          <Card className="text-center p-4 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-2">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Play className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm">Research Work</h3>
              <p className="text-xs text-gray-600">Advanced studies</p>
            </CardContent>
          </Card>
        </div>

        {/* Video Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={`/@assets/attached_assets/${video.videoPath}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {video.title}
                  </CardTitle>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {video.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{video.department}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Experience Practical Learning at JSS Polytechnic
            </h3>
            <p className="text-gray-600 mb-6">
              Our students engage in hands-on projects and experiments that prepare them for real-world engineering challenges. 
              Join us to be part of innovative learning experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                State-of-the-art Labs
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                Industry-Standard Equipment
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">
                Expert Guidance
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Users, MapPin, Calendar, Target, ChevronLeft, ChevronRight, Computer, Briefcase } from "lucide-react";
import { useState } from "react";

// Import industrial visit images
import visitImage1 from "@assets/WhatsApp Image 2024-06-07 at 3.11.28 PM (1)_1749581410979.jpeg";
import visitImage2 from "@assets/WhatsApp Image 2024-06-07 at 3.11.28 PM_1749581414683.jpeg";
import visitImage3 from "@assets/WhatsApp Image 2024-06-07 at 3.11.27 PM_1749581416722.jpeg";
import visitImage4 from "@assets/WhatsApp Image 2024-06-07 at 3.11.26 PM_1749581418764.jpeg";
import visitImage5 from "@assets/WhatsApp Image 2024-06-07 at 3.11.25 PM_1749581420584.jpeg";
import visitImage6 from "@assets/WhatsApp Image 2024-06-07 at 3.11.19 PM_1749581422365.jpeg";
import visitImage7 from "@assets/WhatsApp Image 2024-06-07 at 3.07.53 PM_1749581424005.jpeg";
import visitImage8 from "@assets/WhatsApp Image 2024-06-07 at 3.07.52 PM_1749581425571.jpeg";
import visitImage9 from "@assets/WhatsApp Image 2024-06-07 at 3.07.51 PM (1)_1749581426971.jpeg";
import visitImage10 from "@assets/WhatsApp Image 2024-06-07 at 3.07.51 PM_1749581428559.jpeg";
import visitImage11 from "@assets/WhatsApp Image 2024-06-07 at 3.07.50 PM (1)_1749581430187.jpeg";
import visitImage12 from "@assets/WhatsApp Image 2024-06-07 at 3.07.50 PM_1749581431798.jpeg";
import visitImage13 from "@assets/WhatsApp Image 2024-06-07 at 3.07.49 PM (1)_1749581433459.jpeg";
import visitImage14 from "@assets/WhatsApp Image 2024-06-07 at 3.07.49 PM_1749581435096.jpeg";
import visitImage15 from "@assets/WhatsApp Image 2024-06-07 at 3.07.48 PM (1)_1749581437446.jpeg";
import visitImage16 from "@assets/WhatsApp Image 2024-06-07 at 3.07.48 PM_1749581439045.jpeg";

export default function IndustrialVisitCS() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const visitImages = [
    visitImage1, visitImage2, visitImage3, visitImage4, visitImage5, visitImage6,
    visitImage7, visitImage8, visitImage9, visitImage10, visitImage11, visitImage12,
    visitImage13, visitImage14, visitImage15, visitImage16
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % visitImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + visitImages.length) % visitImages.length);
  };

  const visitObjectives = [
    {
      icon: Target,
      title: "Industry Exposure",
      description: "Gain firsthand experience of real-world software development environments"
    },
    {
      icon: Computer,
      title: "Technology Insights",
      description: "Understand latest technologies, tools, and methodologies used in the industry"
    },
    {
      icon: Users,
      title: "Professional Interaction",
      description: "Interact with industry professionals and understand career opportunities"
    },
    {
      icon: Building,
      title: "Work Culture",
      description: "Experience corporate work culture and professional development practices"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Get insights into career paths, skill requirements, and industry expectations"
    },
    {
      icon: MapPin,
      title: "Network Building",
      description: "Build professional networks and establish industry connections"
    }
  ];

  const visitHighlights = [
    "Interactive sessions with senior software engineers and project managers",
    "Live demonstration of software development lifecycle and project execution",
    "Exposure to cutting-edge technologies like AI, Machine Learning, and Cloud Computing",
    "Understanding of agile development methodologies and DevOps practices",
    "Insights into quality assurance, testing, and deployment processes",
    "Career guidance sessions with HR professionals and technical leads",
    "Networking opportunities with alumni working in the industry",
    "Understanding of industry standards and best practices"
  ];

  const learningOutcomes = [
    {
      category: "Technical Skills",
      outcomes: [
        "Understanding of modern software development tools and frameworks",
        "Knowledge of version control systems and collaborative development",
        "Exposure to database management and system architecture",
        "Insights into cybersecurity and data protection practices"
      ]
    },
    {
      category: "Professional Skills",
      outcomes: [
        "Communication skills in technical and business contexts",
        "Project management and team collaboration techniques",
        "Problem-solving approaches used in industry settings",
        "Understanding of client requirements and business analysis"
      ]
    },
    {
      category: "Career Preparation",
      outcomes: [
        "Knowledge of industry hiring processes and skill requirements",
        "Understanding of career progression paths in IT sector",
        "Insights into entrepreneurship and startup ecosystem",
        "Awareness of continuing education and certification importance"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industrial Visit - Computer Science</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Bridging the gap between academic learning and industry practices through comprehensive industrial exposure for Computer Science students.
          </p>
          <div className="mt-8">
            <Badge className="bg-white text-primary text-lg px-6 py-2">
              June 2024 • Industry Exposure Program
            </Badge>
          </div>
        </div>
      </section>

      {/* Visit Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About the Industrial Visit</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Computer Science department organized a comprehensive industrial visit to provide students with 
              real-world exposure to software development practices, emerging technologies, and corporate work environments. 
              This educational initiative aims to bridge the gap between theoretical knowledge and practical application 
              in the IT industry.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">120+</div>
                <div className="text-gray-600">Students Participated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-gray-600">Days Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Technical Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Gallery</h2>
          
          {/* Main Image Slider */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="relative">
              <img 
                src={visitImages[currentImageIndex]} 
                alt={`Industrial Visit CS - Image ${currentImageIndex + 1}`}
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
              />
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {visitImages.length}
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 max-w-6xl mx-auto">
            {visitImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-lg aspect-square ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`Visit thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Objectives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visitObjectives.map((objective, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <objective.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{objective.title}</h3>
                  <p className="text-gray-600 text-sm">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Building className="h-6 w-6" />
                  Key Activities & Experiences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {visitHighlights.slice(0, 4).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 text-xs">{index + 1}</Badge>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {visitHighlights.slice(4).map((highlight, index) => (
                      <li key={index + 4} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 text-xs">{index + 5}</Badge>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Outcomes</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningOutcomes.map((category, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Target className="h-6 w-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 text-xs">{outcomeIndex + 1}</Badge>
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Feedback */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Student Feedback & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Users className="h-6 w-6" />
                    Student Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "The industrial visit gave me a clear understanding of how classroom theories 
                        are applied in real-world projects. It motivated me to focus more on practical skills."
                      </p>
                      <p className="text-xs text-blue-600 mt-2">- 3rd Year CS Student</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "Interacting with industry professionals helped me understand the importance 
                        of soft skills alongside technical knowledge."
                      </p>
                      <p className="text-xs text-green-600 mt-2">- 2nd Year CS Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Target className="h-6 w-6" />
                    Program Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700 text-sm">Student Satisfaction</span>
                      <span className="font-semibold text-blue-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700 text-sm">Career Clarity Gained</span>
                      <span className="font-semibold text-blue-600">88%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700 text-sm">Industry Interest Increased</span>
                      <span className="font-semibold text-blue-600">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">Would Recommend</span>
                      <span className="font-semibold text-blue-600">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Future Industrial Visits</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Building on the success of this industrial visit, the Computer Science department 
                  plans to expand and enhance future industry exposure programs to provide students 
                  with even more comprehensive learning experiences.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-900 mb-3">Upcoming Initiatives</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Extended internship programs with partner companies</li>
                      <li>• Virtual industry tours and online technical sessions</li>
                      <li>• Industry mentorship programs for final year students</li>
                      <li>• Startup incubation center visits and entrepreneur interactions</li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-900 mb-3">Partnership Goals</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Establish MoUs with leading IT companies</li>
                      <li>• Create industry advisory board for curriculum development</li>
                      <li>• Develop joint research projects with industry partners</li>
                      <li>• Facilitate direct placement opportunities through visits</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Explore Computer Science Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
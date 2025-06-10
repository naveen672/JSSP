import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Award, BookOpen, Target, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";

// Import induction program images
import inductionImage1 from "@assets/WhatsApp Image 2024-06-20 at 11.59.14 AM (1)_1749581183481.jpeg";
import inductionImage2 from "@assets/WhatsApp Image 2024-06-20 at 11.59.14 AM_1749581187724.jpeg";
import inductionImage3 from "@assets/WhatsApp Image 2024-06-20 at 11.59.13 AM (3)_1749581190497.jpeg";
import inductionImage4 from "@assets/WhatsApp Image 2024-06-20 at 11.59.13 AM (2)_1749581195899.jpeg";
import inductionImage5 from "@assets/WhatsApp Image 2024-06-20 at 11.59.13 AM (1)_1749581198391.jpeg";
import inductionImage6 from "@assets/WhatsApp Image 2024-06-20 at 11.59.13 AM_1749581201013.jpeg";
import inductionImage7 from "@assets/WhatsApp Image 2024-06-20 at 11.59.12 AM (2)_1749581203850.jpeg";
import inductionImage8 from "@assets/WhatsApp Image 2024-06-20 at 11.59.12 AM (1)_1749581206321.jpeg";
import inductionImage9 from "@assets/WhatsApp Image 2024-06-20 at 11.59.12 AM_1749581208628.jpeg";
import inductionImage10 from "@assets/WhatsApp Image 2024-06-20 at 11.59.11 AM (1)_1749581210805.jpeg";
import inductionImage11 from "@assets/WhatsApp Image 2024-06-20 at 11.59.11 AM_1749581212852.jpeg";
import inductionImage12 from "@assets/WhatsApp Image 2024-06-20 at 11.39.47 AM_1749581215077.jpeg";
import inductionImage13 from "@assets/WhatsApp Image 2024-06-20 at 11.39.46 AM (1)_1749581217338.jpeg";
import inductionImage14 from "@assets/WhatsApp Image 2024-06-20 at 11.39.46 AM_1749581219596.jpeg";
import inductionImage15 from "@assets/WhatsApp Image 2024-06-20 at 11.39.44 AM_1749581224682.jpeg";

export default function InductionProgram() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const inductionImages = [
    inductionImage1, inductionImage2, inductionImage3, inductionImage4, inductionImage5,
    inductionImage6, inductionImage7, inductionImage8, inductionImage9, inductionImage10,
    inductionImage11, inductionImage12, inductionImage13, inductionImage14, inductionImage15
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % inductionImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + inductionImages.length) % inductionImages.length);
  };

  const programHighlights = [
    {
      icon: Users,
      title: "Welcome Sessions",
      description: "Interactive sessions to introduce new students to college culture and values"
    },
    {
      icon: BookOpen,
      title: "Academic Orientation",
      description: "Comprehensive overview of curriculum, academic policies, and learning resources"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Workshops to help students set academic and career objectives"
    },
    {
      icon: Award,
      title: "Campus Tour",
      description: "Guided tours of facilities, laboratories, and campus amenities"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Activities designed to foster collaboration and friendship among students"
    },
    {
      icon: GraduationCap,
      title: "Mentorship Program",
      description: "Introduction to faculty mentors and senior student support systems"
    }
  ];

  const programSchedule = [
    {
      day: "Day 1",
      title: "Welcome & Registration",
      activities: [
        "Student registration and document verification",
        "Welcome address by Principal and faculty",
        "Campus tour and facility overview",
        "Ice-breaking sessions among students"
      ]
    },
    {
      day: "Day 2",
      title: "Academic Orientation",
      activities: [
        "Introduction to academic programs and curriculum",
        "Library and laboratory demonstrations",
        "Academic policies and examination system",
        "Student support services overview"
      ]
    },
    {
      day: "Day 3",
      title: "Skills & Development",
      activities: [
        "Communication skills workshops",
        "Time management and study techniques",
        "Career guidance and placement opportunities",
        "Extracurricular activities introduction"
      ]
    },
    {
      day: "Day 4",
      title: "Cultural Integration",
      activities: [
        "Cultural program and talent showcase",
        "Team building exercises",
        "Student committee introductions",
        "Feedback session and program conclusion"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Induction Program 2024</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            A comprehensive orientation program designed to welcome new students and help them transition smoothly into college life.
          </p>
          <div className="mt-8">
            <Badge className="bg-white text-primary text-lg px-6 py-2">
              June 2024 • New Student Orientation
            </Badge>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About the Induction Program</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Induction Program 2024 was designed to provide new students with a comprehensive introduction to 
              JSS Polytechnic's academic environment, campus culture, and support systems. Over four intensive days, 
              students participated in various activities aimed at building confidence, fostering relationships, 
              and preparing them for academic success.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600">Days Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">New Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Faculty Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Gallery</h2>
          
          {/* Main Image Slider */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="relative">
              <img 
                src={inductionImages[currentImageIndex]} 
                alt={`Induction Program 2024 - Image ${currentImageIndex + 1}`}
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
                {currentImageIndex + 1} / {inductionImages.length}
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-2 max-w-6xl mx-auto">
            {inductionImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-lg aspect-square ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`Induction thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programHighlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Schedule</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {programSchedule.map((day, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Calendar className="h-6 w-6" />
                      {day.day}: {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5 text-xs">{actIndex + 1}</Badge>
                          <span className="text-sm text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Program Outcomes</h2>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Target className="h-6 w-6" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-4">Student Benefits</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Enhanced confidence and readiness for academic challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Strong peer relationships and support networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Clear understanding of academic expectations and resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Improved communication and interpersonal skills</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-4">Institutional Impact</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Reduced dropout rates and improved student retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Enhanced student engagement in academic activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Stronger student-faculty relationships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">Positive campus culture and community spirit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Success Rate:</strong> 98% of students who participated in the induction program 
                    reported feeling well-prepared for their academic journey and expressed high satisfaction 
                    with the orientation experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Programs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Future Induction Programs</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Building on the success of the 2024 Induction Program, JSS Polytechnic continues to 
                  enhance and expand orientation activities to better serve incoming students and support 
                  their transition to college life.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-900 mb-3">Upcoming Enhancements</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Extended mentorship programs throughout first year</li>
                      <li>• Digital learning platform orientation</li>
                      <li>• Industry expert guest sessions</li>
                      <li>• Alumni interaction programs</li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-900 mb-3">Program Goals</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 100% student participation and engagement</li>
                      <li>• Comprehensive skill development focus</li>
                      <li>• Enhanced parent involvement initiatives</li>
                      <li>• Continuous feedback and improvement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Learn More About Admissions
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
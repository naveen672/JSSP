import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, Calendar, Award, Camera, Music } from "lucide-react";
import culturalImage1 from "@assets/image_1748553010416.png";
import culturalImage2 from "@assets/image_1748553016108.png";
import culturalImage3 from "@assets/image_1748553023577.png";

export default function CulturalActivities() {
  const culturalEvents = [
    {
      title: "Public Speaking & Presentation",
      description: "Students participate in public speaking events to develop communication skills and confidence",
      image: culturalImage1,
      venue: "SJCE Campus, Manasa Gangothri",
      date: "18/04/24"
    },
    {
      title: "Rangoli Competition",
      description: "Traditional art competition showcasing creativity and cultural heritage through colorful rangoli designs",
      image: culturalImage2,
      venue: "SJCE Campus, Manasa Gangothri",
      date: "18/04/24"
    },
    {
      title: "Cultural Arts & Crafts",
      description: "Students engage in various artistic activities promoting traditional and contemporary art forms",
      image: culturalImage3,
      venue: "University Of Mysore Campus",
      date: "18/04/24"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-purple-900 font-semibold text-lg px-4 py-2">
                Cultural Excellence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Activities
            </h1>
            <p className="text-xl text-purple-100 mb-6 max-w-4xl mx-auto">
              Celebrating creativity, tradition, and artistic expression through diverse cultural programs that nurture student talents and preserve our rich heritage.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Music className="h-8 w-8" />
              Cultural Program Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              JSS Polytechnic encourages students to participate in various cultural activities that help develop their creative abilities, build confidence, and showcase their talents. Our cultural programs include traditional art forms, modern expressions, public speaking, and community engagement activities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Palette className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800 mb-2">Art & Craft</h3>
                <p className="text-gray-700">Traditional and modern artistic expressions</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <h3 className="text-2xl font-bold text-pink-800 mb-2">Public Speaking</h3>
                <p className="text-gray-700">Communication and presentation skills</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <Award className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Competitions</h3>
                <p className="text-gray-700">Inter-departmental cultural events</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Events Gallery */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Camera className="h-8 w-8" />
              Cultural Events Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {culturalEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full rounded-lg shadow-lg border border-gray-200"
                      />
                    </div>
                    <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                      <h3 className="text-2xl font-bold text-purple-800 mb-4">{event.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Date: {event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>Venue: {event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cultural Activities Benefits */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Award className="h-8 w-8" />
              Benefits of Cultural Participation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-purple-600 mb-4 text-lg">Personal Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Enhanced creativity and artistic expression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Improved public speaking and communication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Boosted self-confidence and stage presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                    <span>Cultural awareness and heritage appreciation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-pink-600 mb-4 text-lg">Academic & Career Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                    <span>Leadership and teamwork development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                    <span>Stress relief and emotional well-being</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                    <span>Enhanced portfolio for higher education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                    <span>Networking and social connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Palette className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p>Annual Cultural Events</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p>Student Participants</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p>Awards & Recognition</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-violet-500 to-violet-600 text-white">
            <Music className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">7</h3>
            <p>Department Teams</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
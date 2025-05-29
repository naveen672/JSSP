import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  Utensils, 
  Dumbbell, 
  Book, 
  Music, 
  Camera, 
  Heart,
  Users,
  MapPin,
  Clock
} from "lucide-react";

export default function CampusLife() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Campus Life</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Experience a vibrant campus community that nurtures personal growth, friendships, and unforgettable memories
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Life at Excellence University</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Student Housing</h3>
                <p className="text-sm text-gray-600">Modern dormitories with all amenities for comfortable living</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Utensils className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Dining Services</h3>
                <p className="text-sm text-gray-600">Diverse culinary options catering to all dietary preferences</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Dumbbell className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Sports Complex</h3>
                <p className="text-sm text-gray-600">Olympic-standard facilities for fitness and recreation</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <Book className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Library</h3>
                <p className="text-sm text-gray-600">24/7 access to extensive collections and study spaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Organizations & Activities</h2>
          
          <Tabs defaultValue="clubs" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="clubs">Student Clubs</TabsTrigger>
              <TabsTrigger value="sports">Sports & Recreation</TabsTrigger>
              <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
              <TabsTrigger value="service">Community Service</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clubs" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Academic Societies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Engineering Society</li>
                      <li>• Business Students Association</li>
                      <li>• Science Research Club</li>
                      <li>• Literature Society</li>
                      <li>• Mathematics Club</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Professional Organizations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Entrepreneurship Club</li>
                      <li>• Debate Society</li>
                      <li>• Model United Nations</li>
                      <li>• Investment Club</li>
                      <li>• Tech Innovation Group</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Special Interest Groups</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Environmental Club</li>
                      <li>• International Students Association</li>
                      <li>• Gaming Society</li>
                      <li>• Cooking Club</li>
                      <li>• Photography Club</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sports" className="space-y-6">
              {/* Sports Overview */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-3">Sports at JSS Polytechnic, Mysuru</h3>
                <p className="text-gray-700 leading-relaxed">
                  JSS Polytechnic, Mysuru has been giving equal importance to both Curricular, Co-curricular and extracurricular activities. 
                  To encourage the students to participate in sports activities, the institute has created all the necessary sports facilities. 
                  Our college Sports department has been organizing many sports events.
                </p>
              </div>

              {/* Sports Facilities Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="@assets/image_1748525684931.png" 
                      alt="JSS Polytechnic Sports Ground"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary">Sports Ground</h4>
                    <p className="text-sm text-gray-600">Spacious outdoor sports facility for various activities</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="@assets/image_1748525698149.png" 
                      alt="Volleyball Tournament"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary">Volleyball Courts</h4>
                    <p className="text-sm text-gray-600">Active volleyball tournaments and training sessions</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="@assets/image_1748525704187.png" 
                      alt="District Level Volleyball Competition"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary">Competitive Events</h4>
                    <p className="text-sm text-gray-600">District level volleyball and throwball competitions</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sports Achievements */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Dumbbell className="h-5 w-5 text-accent" />
                      <span>Recent Achievements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="@assets/image_1748525709166.png" 
                          alt="Volleyball Champions"
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-primary">Volleyball Championship</h5>
                          <p className="text-sm text-gray-600">District level volleyball winners 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src="@assets/image_1748525749249.png" 
                          alt="Women's Volleyball Team"
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-primary">Women's Volleyball</h5>
                          <p className="text-sm text-gray-600">Excellence in women's sports competitions</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-accent" />
                      <span>Sports Events</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-primary/10 text-primary">Volleyball</Badge>
                        <span className="text-sm">District level competitions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-primary/10 text-primary">Throwball</Badge>
                        <span className="text-sm">Inter-polytechnic tournaments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-primary/10 text-primary">Athletics</Badge>
                        <span className="text-sm">Track and field events</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-primary/10 text-primary">Team Sports</Badge>
                        <span className="text-sm">Various competitive activities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sports Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle>Sports Events Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img 
                      src="@assets/image_1748525692491.png" 
                      alt="Sports Event Opening Ceremony"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="@assets/image_1748525754447.png" 
                      alt="Male Athletes with Certificates"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="@assets/image_1748525760048.png" 
                      alt="Women's Team Award Ceremony"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="@assets/image_1748525764816.png" 
                      alt="Group Photo Sports Event"
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>2024 District Level Volleyball & Throwball Meet:</strong> JSS Polytechnic hosted a successful 
                      district-level competition showcasing talent from various polytechnics across the region.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="arts" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Music className="h-5 w-5 text-accent" />
                      <span>Music & Performing Arts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• University Orchestra</li>
                      <li>• Choir & Vocal Groups</li>
                      <li>• Drama Club</li>
                      <li>• Dance Society</li>
                      <li>• Jazz Ensemble</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-accent" />
                      <span>Visual Arts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Art Club</li>
                      <li>• Photography Society</li>
                      <li>• Film Making Club</li>
                      <li>• Digital Arts Group</li>
                      <li>• Sculpture Workshop</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Book className="h-5 w-5 text-accent" />
                      <span>Literary & Media</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• University Newspaper</li>
                      <li>• Literary Magazine</li>
                      <li>• Creative Writing Club</li>
                      <li>• Student Radio Station</li>
                      <li>• Podcast Production</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="service" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Outreach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Local Partnerships</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Tutoring programs for local schools</li>
                          <li>• Community health initiatives</li>
                          <li>• Environmental cleanup projects</li>
                          <li>• Senior citizen support programs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Service Learning</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Habitat for Humanity</li>
                          <li>• Food bank assistance</li>
                          <li>• Hospital volunteer programs</li>
                          <li>• Disaster relief initiatives</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Facilities</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Home className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Student Housing</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Modern residence halls with single and double occupancy rooms, common areas, study lounges, and 24/7 security.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Air Conditioning</Badge>
                        <Badge variant="outline" className="text-xs">High-Speed WiFi</Badge>
                        <Badge variant="outline" className="text-xs">Laundry Facilities</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Utensils className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Dining Services</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Multiple dining options including main cafeteria, specialty restaurants, and grab-and-go stations.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Vegetarian Options</Badge>
                        <Badge variant="outline" className="text-xs">International Cuisine</Badge>
                        <Badge variant="outline" className="text-xs">Healthy Choices</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Health & Wellness</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive health services including medical clinic, counseling center, and wellness programs.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Medical Care</Badge>
                        <Badge variant="outline" className="text-xs">Mental Health</Badge>
                        <Badge variant="outline" className="text-xs">Emergency Services</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="h-24 w-24 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-4">Campus Map & Tours</h3>
              <p className="text-gray-600 mb-6">
                Explore our beautiful 200-acre campus with guided tours available daily. 
                Our interactive campus map helps you navigate to all facilities and services.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm">Daily Tours: 10 AM, 2 PM, 4 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm">Starting Point: Visitor Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Traditions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Events & Traditions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Annual Festival</h3>
                <p className="text-sm text-gray-600">
                  Three-day cultural extravaganza featuring music, dance, drama, and culinary celebrations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Homecoming Week</h3>
                <p className="text-sm text-gray-600">
                  Alumni reunion with sports events, academic showcases, and networking opportunities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Research Symposium</h3>
                <p className="text-sm text-gray-600">
                  Annual showcase of student and faculty research projects across all disciplines
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Sports Day</h3>
                <p className="text-sm text-gray-600">
                  Inter-departmental competitions and athletic events promoting fitness and teamwork
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Community Service Day</h3>
                <p className="text-sm text-gray-600">
                  Campus-wide volunteer initiatives supporting local community organizations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Graduation Ceremony</h3>
                <p className="text-sm text-gray-600">
                  Celebration of academic achievement with distinguished speakers and family gatherings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

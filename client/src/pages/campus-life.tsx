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

// Sports images
import sportsGround from "@assets/image_1748525684931.png";
import volleyballEvent from "@assets/image_1748525692491.png";
import volleyballTournament from "@assets/image_1748525698149.png";
import volleyballCompetition from "@assets/image_1748525704187.png";
import volleyballChampions from "@assets/image_1748525709166.png";
import womenVolleyball from "@assets/image_1748525749249.png";
import maleAthletes from "@assets/image_1748525754447.png";
import womenTeamAward from "@assets/image_1748525760048.png";
import groupPhotoSports from "@assets/image_1748525764816.png";
import sportsAudience from "@assets/image_1748525773925.png";

// Hostel image
import hostelBuilding from "@assets/image_1748544237646.png";

// Library image
import libraryInterior from "@assets/image_1748544359934.png";

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
          <h2 className="text-3xl font-bold text-center mb-12">Life at JSS Polytechnic</h2>
          
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
                <h3 className="text-lg font-semibold text-primary mb-2">Library & Information Centre</h3>
                <p className="text-sm text-gray-600">Resource centre with 13,500 volumes and digital collections</p>
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
                      src={sportsGround} 
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
                      src={volleyballTournament} 
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
                      src={volleyballCompetition} 
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
                          src={volleyballChampions} 
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
                          src={womenVolleyball} 
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
                      src={volleyballEvent} 
                      alt="Sports Event Opening Ceremony"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src={maleAthletes} 
                      alt="Male Athletes with Certificates"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src={womenTeamAward} 
                      alt="Women's Team Award Ceremony"
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src={groupPhotoSports} 
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
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">Student Hostel</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        The Polytechnic has a separate hostel facility for boys within the campus. The hostel runs mess on sharing basis with modern kitchen to ensure adequate hygiene. 
                        Since, the hostel facilities are limited, the allotment of the seats for the hostel is done based on the needs of the candidates.
                      </p>
                      <div className="mb-3">
                        <img 
                          src={hostelBuilding} 
                          alt="JSS Polytechnic Hostel Building"
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Boys Hostel</Badge>
                        <Badge variant="outline" className="text-xs">Shared Mess</Badge>
                        <Badge variant="outline" className="text-xs">Modern Kitchen</Badge>
                        <Badge variant="outline" className="text-xs">Within Campus</Badge>
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

      {/* Library & Information Centre */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Library & Information Centre</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The library is a resource centre for both teaching and learning. It is housed nearly 13,500 volumes 
                  covering all streams of Science and Engineering, and allied subjects. It has updated collection to 
                  the information need of the user community from time to time.
                </p>
                <img 
                  src={libraryInterior} 
                  alt="JSS Polytechnic Library Interior"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <p className="text-gray-700 text-sm">
                  The library and reference section consist of textbooks, reference books, dictionaries, project reports, 
                  previous question papers, newspapers, journals, magazines and CD/DVDs related to curriculum also provides 
                  internet facility. JSSP Library is a member of The National Digital Library of India (NDLI).
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Library Sections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Circulation Section</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Stock Area Section</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Periodical & Newspaper Section</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Reference Section</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">Digital Resource Center</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Library Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Carpet Area:</span>
                      <span>44 SQMTS</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Reading Space:</span>
                      <span>144/108.36/51.64 SQMTS</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Reading Seats:</span>
                      <span>20</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Monthly Users (Books):</span>
                      <span>100-120</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Monthly Users (Reading):</span>
                      <span>600</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Timings:</span>
                      <span>Mon-Fri: 10AM-5:30PM<br/>Sat: 10AM-2PM</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Library Staff:</span>
                      <span>2 (1 with Library degree)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Collections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>E-books:</span>
                      <span className="font-semibold">11,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CDs:</span>
                      <span className="font-semibold">50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technical Magazines:</span>
                      <span className="font-semibold">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General Magazines:</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Newspapers:</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded">
                    <p className="text-xs text-gray-700">
                      <strong>Internet Facility:</strong> 10 PCs available for browsing
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Library Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Yogeesha K S</p>
                        <p className="text-gray-600">Library Assistant</p>
                      </div>
                      <Badge>MLib Sc</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Ramesh M</p>
                        <p className="text-gray-600">Attender</p>
                      </div>
                      <Badge variant="outline">SSLC</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">Services & Facilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Current Awareness Service (CAS)</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Provides the latest information to users in the area of Science and Technology and Engineering.
                </p>
                
                <h4 className="font-semibold mb-2">New Arrival Display</h4>
                <p className="text-sm text-gray-600">
                  One copy of new titles or new editions is displayed for one month to attract students and staff 
                  members for effective library usage and knowledge updates.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Key Rules & Regulations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Register name in Login Register upon entry</li>
                  <li>• Maintain silence and discipline</li>
                  <li>• Mobile phones on silent mode</li>
                  <li>• Return borrowed books before due date</li>
                  <li>• Report damaged books immediately</li>
                  <li>• Lost books must be replaced or paid for</li>
                </ul>
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

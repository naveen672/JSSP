import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Users, MapPin, Calendar, Award } from "lucide-react";
import jssmvpBuilding from "@assets/image_1748545721494.png";

export default function AboutJSSMVP() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About JSS Mahavidyapeetha</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            A legacy of educational excellence spanning over a thousand years, shaping the future through quality education and spiritual guidance.
          </p>
        </div>
      </section>

      {/* Heritage and History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Heritage</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Jagadguru Sri Veerasimhasana Math, a religious monastery situated at Suttur in Mysore District 
                  of Karnataka State, has a history of about one thousand years. This ancient institution has been 
                  a beacon of spiritual and educational enlightenment for generations.
                </p>
                <p className="leading-relaxed">
                  Jagadguru Sri Shivarathrishwara Mahavidyapeetha, popularly known as JSS Mahavidyapeetha (JSSMVP), 
                  sponsored by the above Math, was established during 1954 by the then President of JSSMVP, 
                  His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji.
                </p>
                <p className="leading-relaxed">
                  The vision of His Holiness has triggered an education revolution, particularly in Karnataka State. 
                  Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching many 
                  more programmes covering all aspects of life in the service of the nation.
                </p>
              </div>
            </div>
            
            <div>
              <img 
                src={jssmvpBuilding} 
                alt="JSS Mahavidyapeetha Building"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">JSS Mahavidyapeetha - A symbol of educational excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vision and Legacy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Established 1954</h3>
                <p className="text-sm text-gray-600">Founded with a vision to revolutionize education in Karnataka</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Spiritual Guidance</h3>
                <p className="text-sm text-gray-600">Under the divine guidance of His Holiness Jagadguru</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">National Service</h3>
                <p className="text-sm text-gray-600">Dedicated to serving the nation through quality education</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
            <blockquote className="text-lg italic text-gray-700 text-center">
              "His Holiness's vision, enthusiasm, spirit of dedication is incomparable. The long tradition of the 
              JSS Mahavidyapeetha is being continued now with renewed force and fervor."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Technical Education System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Education System</h2>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              As the number of Technical Institutions has increased considerably, JSS Mahavidyapeetha has established 
              a separate Directorate to look after its Technical Institutions. This Directorate is under the control 
              of a Director (Technical).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Engineering Colleges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <span>Engineering Colleges</span>
                  <Badge>4 Institutions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Sri Jayachamarajendra Engineering College, Mysuru</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Academy of Technical Education (JSSATE), Bengaluru</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Academy of Technical Education (JSSATE), NOIDA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Academy of Technical Education, Mauritius</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Polytechnics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-accent" />
                  <span>Polytechnics</span>
                  <Badge>4 Institutions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Women's Polytechnic, Mysore</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Polytechnic, SJCE Campus, Mysore</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Polytechnic, Nanjangud</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>JSS Polytechnic for the Differently Abled, Mysuru</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Institutions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Institutions & Centers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Training Institutes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Three Industrial Training Institutes</li>
                  <li>• JSS RUDSETI, Mariyala</li>
                  <li>• Two JSS Skill Training Centers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Consultancy Trust</li>
                  <li>• Three Science and Technology Entrepreneurship Parks (STEP)</li>
                  <li>• JSS Institute for Water and Health</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Management & Business</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Nodal Centre for Entrepreneurship and Management Development</li>
                  <li>• JSS Centre for Management Studies, Mysore</li>
                  <li>• JSS Education Foundation, Dubai</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Production Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• JSS Export Production Center, Dharawar</li>
                  <li>• Export Production cum Training Centers at Talavadi, Tamil Nadu</li>
                  <li>• Centers at Harave and Mariyala, Chamarajanagar Taluk</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Urban Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• JSS Urban Haath, Mysore</li>
                  <li>• Rural Development and Self Employment Training</li>
                  <li>• Community Outreach Programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Global Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• JSS Academy of Technical Education, Mauritius</li>
                  <li>• JSS Education Foundation, Dubai</li>
                  <li>• International collaborations and partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Continuing the Legacy</h2>
            <div className="bg-primary/5 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching 
                many more programmes covering all aspects of life in the service of the nation. His Holiness's 
                vision, enthusiasm, and spirit of dedication is incomparable. The long tradition of the JSS 
                Mahavidyapeetha is being continued now with renewed force and fervor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
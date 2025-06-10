import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Users, Shield, Wifi, Car, Utensils, Bed, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import hostel images and video
import hostelImage1 from "@assets/WhatsApp Image 2024-07-06 at 8.53.35 AM (2)_1749580917700.jpeg";
import hostelImage2 from "@assets/WhatsApp Image 2024-07-06 at 8.53.35 AM (1)_1749580922508.jpeg";
import hostelImage3 from "@assets/WhatsApp Image 2024-07-06 at 8.53.35 AM_1749580926513.jpeg";
import hostelImage4 from "@assets/WhatsApp Image 2024-07-06 at 8.53.34 AM_1749580930724.jpeg";
import hostelImage5 from "@assets/WhatsApp Image 2024-07-06 at 8.53.33 AM (3)_1749580934329.jpeg";
import hostelImage6 from "@assets/WhatsApp Image 2024-07-06 at 8.53.33 AM (2)_1749580938449.jpeg";
import hostelImage7 from "@assets/WhatsApp Image 2024-07-06 at 8.53.33 AM (1)_1749580945145.jpeg";
import hostelImage8 from "@assets/WhatsApp Image 2024-07-06 at 8.53.33 AM_1749580948653.jpeg";

export default function Hostel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const hostelImages = [
    hostelImage1,
    hostelImage2,
    hostelImage3,
    hostelImage4,
    hostelImage5,
    hostelImage6,
    hostelImage7,
    hostelImage8
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hostelImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hostelImages.length) % hostelImages.length);
  };

  const hostelFeatures = [
    {
      icon: Bed,
      title: "Comfortable Accommodation",
      description: "Well-furnished rooms with modern amenities for a comfortable stay"
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Hygienic mess facilities providing wholesome and nutritious meals"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "24/7 Wi-Fi connectivity for academic and personal use"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance for student safety"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Convenient transportation facilities to and from the college campus"
    },
    {
      icon: Users,
      title: "Common Areas",
      description: "Recreation rooms, study halls, and common areas for social interaction"
    }
  ];

  const hostelRules = [
    "Students must maintain discipline and follow hostel timings",
    "Visitors are allowed only during specified hours with prior permission",
    "Ragging is strictly prohibited and punishable",
    "Students should keep their rooms clean and tidy",
    "Smoking and alcohol consumption are strictly banned",
    "Students must respect hostel property and common facilities",
    "Late night entry requires prior permission from hostel authorities",
    "Mess timings must be strictly followed"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">JSS Polytechnic Hostel</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            A home away from home providing comfortable accommodation, nutritious meals, and a conducive environment for academic excellence.
          </p>
        </div>
      </section>

      {/* Hostel Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">About Our Hostel</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              JSS Polytechnic hostel provides a safe, comfortable, and supportive living environment for students. 
              Our well-maintained facilities ensure that students can focus on their studies while enjoying a 
              wholesome residential experience that promotes personal growth and academic success.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Accommodation Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Security & Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Meals Per Day</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Wi-Fi Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hostel Gallery</h2>
          
          {/* Main Image Slider */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <img 
                src={hostelImages[currentImageIndex]} 
                alt={`Hostel facility ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {hostelImages.length}
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 max-w-4xl mx-auto mb-8">
            {hostelImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-lg aspect-square ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`Hostel thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </button>
            ))}
          </div>

          {/* Hostel Video */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-4">Hostel Tour Video</h3>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <video 
                controls 
                className="w-full h-64 md:h-96"
                poster={hostelImage1}
              >
                <source src="/attached_assets/WhatsApp Video 2024-07-06 at 8.53.36 AM_1749580912463.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PlayCircle className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hostel Facilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hostelFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Hostel Admission Process</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Building className="h-6 w-6" />
                    Admission Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">1</Badge>
                      <span className="text-sm">Valid college admission confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">2</Badge>
                      <span className="text-sm">Completed hostel application form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">3</Badge>
                      <span className="text-sm">Medical certificate and fitness report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">4</Badge>
                      <span className="text-sm">Parent/guardian consent letter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">5</Badge>
                      <span className="text-sm">Recent passport-size photographs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">6</Badge>
                      <span className="text-sm">Advance payment of hostel fees</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Users className="h-6 w-6" />
                    Fee Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Accommodation (per year)</span>
                      <span className="font-semibold text-blue-600">₹25,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Mess charges (per month)</span>
                      <span className="font-semibold text-blue-600">₹3,500</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Security deposit</span>
                      <span className="font-semibold text-blue-600">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Maintenance charges</span>
                      <span className="font-semibold text-blue-600">₹2,000</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Fee structure is subject to annual revision. 
                        Contact hostel office for current rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Hostel Rules & Regulations</h2>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Shield className="h-6 w-6" />
                  Important Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {hostelRules.slice(0, 4).map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 text-xs">{index + 1}</Badge>
                        <span className="text-sm text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {hostelRules.slice(4).map((rule, index) => (
                      <li key={index + 4} className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 text-xs">{index + 5}</Badge>
                        <span className="text-sm text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    <strong>Important:</strong> Violation of hostel rules may result in disciplinary action, 
                    including suspension from hostel facilities. All students are expected to maintain 
                    discipline and respect the residential community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Hostel Office</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Hostel Warden</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Office Hours:</strong> 9:00 AM - 6:00 PM</p>
                      <p><strong>Emergency Contact:</strong> Available 24/7</p>
                      <p><strong>Location:</strong> Hostel Administrative Block</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Admission Enquiries</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Visit:</strong> Hostel Reception</p>
                      <p><strong>Timing:</strong> Monday to Saturday</p>
                      <p><strong>Documents:</strong> Bring all required certificates</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Apply for Hostel Admission
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
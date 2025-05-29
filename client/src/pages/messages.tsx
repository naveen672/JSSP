import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Award } from "lucide-react";
import principalMessage from "@assets/image_1748545847280.png";

export default function Messages() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Messages</h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Inspirational messages from our leadership guiding our institutional journey towards excellence.
          </p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Users className="h-6 w-6 text-accent" />
                  <span>Principal's Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <img 
                      src={principalMessage} 
                      alt="Principal's Message Document"
                      className="w-full h-auto rounded-lg shadow-lg border"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary mb-4">From the Principal's Desk</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Welcome to JSS Polytechnic, where we are committed to providing quality technical education 
                        that prepares our students for successful careers in engineering and technology.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our institution stands as a beacon of excellence in technical education, fostering innovation, 
                        creativity, and professional development among our students and faculty.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We continue to strive for academic excellence while maintaining our commitment to holistic 
                        development and industry-relevant education.
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 font-medium">
                        Official communication from the Principal's office regarding institutional matters and academic excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Messages</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Director's Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "At JSS Polytechnic, we believe in nurturing not just technical skills but also the character 
                  and values that make our graduates responsible professionals and contributing members of society."
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Our commitment to excellence in technical education continues to drive innovation and success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-accent" />
                  <span>Academic Dean's Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "We are dedicated to providing our students with industry-relevant curriculum, hands-on learning 
                  experiences, and the support they need to excel in their chosen fields."
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Academic excellence through innovative teaching methods and comprehensive learning experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Vision & Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Vision of the Institute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Vision of the institute to be recognized as a prestigious academic Centre for excellence in 
                    technical education and to meet the needs of Academia, Industry & Society.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Mission of the Institute</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-accent">M1:</span>
                      <span>To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-accent">M2:</span>
                      <span>To promote industry institutional collaboration through MOUs and internship programs.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-accent">M3:</span>
                      <span>To infuse ethical and responsible engineering practices to create successful professionals.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
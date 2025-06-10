import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, BookOpen } from "lucide-react";
import jssMainBuilding from "@assets/b1.jpg";

export default function AboutJSS() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About JSS Polytechnic</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            One of the premier and oldest Polytechnics under JSS Mahavidyapeetha, established in 1954. 
            We are committed to excellence in technical education with over 300 educational institutions 
            across the country, serving more than 1,00,000 students from kindergarten to post-doctoral courses.
          </p>
        </div>

        {/* JSS Mahavidyapeetha Background */}
        <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">JSS Mahavidyapeetha Heritage</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Institutional Legacy</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jagadguru Sri Shivarathreeshwara Mahavidyapeetha (JSSMVP) was established in 1954 by 
                His Holiness Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji. Registered under the 
                Societies Registration Act 1960, it has witnessed enormous growth in education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Mahavidyapeetha continues to play a vital role in expanding educational activities 
                across several branches of knowledge, welfare, and culture, spanning from crèches for 
                toddlers to advanced research centers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Suttur Math Connection</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suttur Math, a pilgrim center with over a thousand years of history, is situated on the 
                banks of River Kapila in Nanjangud Taluk, Mysuru District. Located 170 km from Bengaluru 
                and 28 km south of Mysuru, it houses the holy shrine of Adi Jagadguru Sri Shivarathreeshwara Shivayogiji.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Math has grown over centuries as a multi-dimensional religious, social, cultural, and 
                educational movement, contributing immensely to societal advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Campus Image */}
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={jssMainBuilding} 
              alt="JSS Polytechnic Main Building" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Vision of the Institute</h3>
              <p className="text-gray-600 leading-relaxed">
                Vision of the institute to be recognized as a prestigious academic Centre for excellence in 
                technical education and to meet the needs of Academia, Industry & Society.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Mission of the Institute</h3>
              <div className="space-y-3 text-gray-600 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M1:</span>
                  <span>To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M2:</span>
                  <span>To promote industry institutional collaboration through MOUs and internship programs.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-accent">M3:</span>
                  <span>To infuse ethical and responsible engineering practices to create successful professionals.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Institutional Highlights from PPT */}
        <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Institutional Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Green Campus Initiative</h4>
              <p className="text-sm text-blue-700">Building enclosed with rooftop solar panels and rainwater harvesting systems</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Higher Education Support</h4>
              <p className="text-sm text-green-700">Special DCET cell for higher education aspirants with dedicated guidance</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Technical Excellence</h4>
              <p className="text-sm text-purple-700">Organized National level Technical Seminars and modern laboratory facilities</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Student Welfare</h4>
              <p className="text-sm text-orange-700">Hostel facility provided with comprehensive student support services</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Industry Placement</h4>
              <p className="text-sm text-red-700">Best at industry placements with strong corporate partnerships</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Quality Assurance</h4>
              <p className="text-sm text-indigo-700">Internal Quality Assurance Cell (IQAC) and Program Assessment Committee</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">300+ Institutions</h4>
              <p className="text-gray-600 text-sm">Under JSS Mahavidyapeetha</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">1,00,000+ Students</h4>
              <p className="text-gray-600 text-sm">From kindergarten to post-doctoral</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">10,000+ Employees</h4>
              <p className="text-gray-600 text-sm">Dedicated Academic Workforce</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">NBA Accreditation</h4>
              <p className="text-gray-600 text-sm">Quality Assured Programs</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution is equipped with state-of-the-art facilities, experienced faculty, and strong industry connections 
            to provide students with a comprehensive learning experience that prepares them for successful careers.
          </p>
        </div>
      </div>
    </section>
  );
}
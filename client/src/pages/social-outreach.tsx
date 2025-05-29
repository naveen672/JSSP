import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Target, Heart, Star, Flag, BookOpen } from "lucide-react";
import nccParadeImage1 from "@assets/image_1748553644737.png";
import nccCeremonyImage from "@assets/image_1748553651567.png";
import nccParadeImage2 from "@assets/image_1748553657422.png";
import nccOfficeImage from "@assets/image_1748553661802.png";

export default function SocialOutreach() {
  const nccMotto = [
    "Obey with the smile",
    "Be punctual",
    "Work hard without refuse",
    "Make no excuse and don't tell lies"
  ];

  const nccMission = [
    "To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure, and Ideals of Selfless Service amongst the Youth of the Country.",
    "To Create a Human Resource of Organized, Trained and Motivated Youth, To Provide Leadership in all Walks of life and be Always Available for the Service of the Nation.",
    "To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces."
  ];

  const nccBenefits = [
    {
      category: "Armed Forces",
      benefit: "For ORs, Sailors, Airmen: 5 to 10 percent bonus marks awarded for recruitment."
    },
    {
      category: "Para Military Forces",
      benefit: "2 to 10 bonus marks awarded for recruitment."
    },
    {
      category: "Department of Telecommunication",
      benefit: "Bonus marks awarded for recruitment."
    },
    {
      category: "CRPF",
      benefit: "NCC cadets holding 3rd division degree eligible for recruitment to gazette posts."
    },
    {
      category: "NCC Careers",
      benefit: "Civilian Gliding instructors/Girl Cadet Instructors/ Whole Time Lady Officers."
    },
    {
      category: "State Governments",
      benefit: "Preference for State Services in certain States."
    },
    {
      category: "Industry",
      benefit: "Some industries give preference to NCC C certificate holders for various jobs related with the field of security."
    },
    {
      category: "NCC Games",
      benefit: "Cash awards to teams and individuals for excellence."
    },
    {
      category: "UPSC",
      benefit: "No UPSC Exams for NCC C certificate holders, only SSB."
    }
  ];

  const nccActivities = [
    {
      title: "NCC Parade & Ceremonies",
      description: "Regular parade sessions and ceremonial events to instill discipline and patriotism among cadets",
      image: nccParadeImage1
    },
    {
      title: "NCC Day Celebration & Awards",
      description: "Annual NCC Day celebrations with award ceremonies recognizing outstanding cadet performance",
      image: nccCeremonyImage
    },
    {
      title: "Military Drills & Training",
      description: "Comprehensive military training including marching drills, formations, and discipline exercises",
      image: nccParadeImage2
    },
    {
      title: "Administrative Operations",
      description: "NCC office operations and administrative activities supporting cadet development programs",
      image: nccOfficeImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-12 w-12 text-yellow-400" />
              <Badge variant="secondary" className="bg-yellow-400 text-green-900 font-semibold text-lg px-4 py-2">
                National Service
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social Outreach Programs
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-4xl mx-auto">
              National Cadet Corps (NCC) - Developing character, comradeship, discipline, leadership, and ideals of selfless service amongst the youth of our nation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* NCC Overview */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 text-2xl">
              <Flag className="h-8 w-8" />
              National Cadet Corps (NCC)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The Aims of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-green-600 mb-4 text-lg">Our Vision</h3>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 font-medium">
                    NCC nurtures responsible, resilient and resourceful cadets to become successful citizens. To inspire the cadets learn and grow with the core Values.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-600 mb-4 text-lg">Motto of NCC</h3>
                <div className="space-y-3">
                  {nccMotto.map((motto, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Star className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-800 font-medium">{motto}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NCC Activities Gallery */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Users className="h-8 w-8" />
              NCC Activities at JSS Polytechnic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {nccActivities.map((activity, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-800 text-2xl">
              <Target className="h-8 w-8" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {nccMission.map((mission, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits of NCC */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800 text-2xl">
              <Award className="h-8 w-8" />
              Benefits of NCC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nccBenefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">{benefit.category}</h4>
                  <p className="text-gray-700 text-sm">{benefit.benefit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* From ANO Desk */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 text-2xl">
              <BookOpen className="h-8 w-8" />
              From ANO Desk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                "We Aim to inculcate the discipline and the mindset to serve the nation in the youths brain. As youth is the power of the nation we need them to volunteer themselves. We help them get the knowledge about army life."
              </p>
              
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-orange-200">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-800 text-lg">Lieut. HARSHA KUMAR</h4>
                  <p className="text-orange-700">Associate NCC Officer</p>
                  <p className="text-orange-600">1 Kar Engr Coy, Mysuru</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800 text-2xl">
              <Heart className="h-8 w-8" />
              Core Values & Development Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-red-600 mb-4 text-lg">Character Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Building strong moral and ethical foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Developing leadership qualities and decision-making skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Fostering discipline and punctuality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2"></span>
                    <span>Promoting secular outlook and unity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-600 mb-4 text-lg">Service & Adventure</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Cultivating spirit of selfless service to nation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Building comradeship and team spirit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Encouraging adventure activities and outdoor skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                    <span>Preparing youth for armed forces career</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p>Active NCC Cadets</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p>Awards & Recognitions</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p>Discipline Training</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <Flag className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">National</h3>
            <p>Service Program</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
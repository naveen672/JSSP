import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ImageLoader } from "@/components/Images";
import { Building2, Award, GraduationCap, Users, BookOpen, Landmark, Medal, Star, Briefcase, TrendingUp, Target, ArrowUp } from "lucide-react";

export default function LeadershipTeam() {
  // Leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Suresh Bhojraj",
      position: "Director",
      organization: "JSS Science & Technical Institutions, JSS Mahavidyapeetha Mysore",
      photo: "/images/leadership/director.png",
      about: "Leading the JSS Science & Technical Institutions with a vision to build excellence in technical education.",
      icon: <Building2 className="h-6 w-6 text-primary" />
    },
    {
      id: 2,
      name: "H R Mahadevaswamy",
      position: "Joint Director",
      organization: "Technical Education Division, JSS Mahavidyapeetha Mysore",
      photo: "/images/leadership/joint-director.png",
      about: "Overseeing the technical education initiatives across JSS institutions to ensure quality education and industry-relevant training.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      id: 3,
      name: "Dr. Bhakthavasthsala K S",
      position: "Principal",
      organization: "JSS Polytechnic, Mysore",
      photo: "/images/leadership/principal.png",
      about: "Providing leadership and guidance to JSS Polytechnic, focusing on holistic development of students through quality technical education.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leadership Team - JSS Polytechnic</title>
        <meta name="description" content="Meet the leadership team of JSS Polytechnic, Mysore." />
      </Helmet>

      <Header />
      
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20 px-4">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg flex items-center justify-center">
            <Medal className="w-8 h-8 mr-3 text-accent" />
            Our Leadership Team
            <Medal className="w-8 h-8 ml-3 text-accent" />
          </h1>
          <div className="mt-6 text-white/90 max-w-3xl mx-auto flex items-center justify-center">
            <Landmark className="w-5 h-5 mr-2 text-white/80" />
            <p>
              Meet the visionary leaders behind JSS Polytechnic who guide our institution toward excellence in technical education.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-4">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">25+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
            
            <div className="flex items-center p-4">
              <div className="bg-secondary/10 rounded-full p-3 mr-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">95%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </div>
            </div>
            
            <div className="flex items-center p-4">
              <div className="bg-accent/10 rounded-full p-3 mr-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent">100+</h3>
                <p className="text-gray-600">Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        {/* Leadership qualities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 transform transition-all hover:scale-105">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Collaborative Leadership</h3>
            </div>
            <p className="text-gray-700">Our leaders work together to create a supportive environment for students and faculty.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 transform transition-all hover:scale-105">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Academic Excellence</h3>
            </div>
            <p className="text-gray-700">Leadership focused on maintaining high academic standards and innovative teaching methods.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 transform transition-all hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Industry Recognition</h3>
            </div>
            <p className="text-gray-700">Our leadership ensures the institute maintains strong industry connections for student placements.</p>
          </div>
        </div>

        {/* Leadership team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-primary/20"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  {leader.icon}
                </div>
                <div className="flex justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <ImageLoader 
                      src={leader.photo} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-1">{leader.name}</h3>
                <div className="flex items-center justify-center text-accent mb-1 font-semibold">
                  <Award className="w-4 h-4 mr-1" />
                  <p>{leader.position}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">{leader.organization}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700">{leader.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Vision section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Landmark className="h-7 w-7 text-primary mr-2" />
            <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Under the guidance of our esteemed leadership team, JSS Polytechnic strives to provide quality technical education 
            that prepares students for industry needs while emphasizing holistic development, ethics, and innovation.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <a href="/about-jssmvp" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              Learn more about our institution
              <ArrowUp className="w-4 h-4 ml-1 transform rotate-45" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
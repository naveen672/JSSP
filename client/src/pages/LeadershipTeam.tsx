import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ImageLoader } from "@/components/Images";

export default function LeadershipTeam() {
  // Leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Suresh Bhojraj",
      position: "Director",
      organization: "JSS Science & Technical Institutions, JSS Mahavidyapeetha Mysore",
      photo: "/images/leadership/director.png",
      about: "Leading the JSS Science & Technical Institutions with a vision to build excellence in technical education."
    },
    {
      id: 2,
      name: "H R Mahadevaswamy",
      position: "Joint Director",
      organization: "Technical Education Division, JSS Mahavidyapeetha Mysore",
      photo: "/images/leadership/joint-director.png",
      about: "Overseeing the technical education initiatives across JSS institutions to ensure quality education and industry-relevant training."
    },
    {
      id: 3,
      name: "Dr. Bhakthavasthsala K S",
      position: "Principal",
      organization: "JSS Polytechnic, Mysore",
      photo: "/images/leadership/principal.png",
      about: "Providing leadership and guidance to JSS Polytechnic, focusing on holistic development of students through quality technical education."
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
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Our Leadership Team
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            Meet the visionary leaders behind JSS Polytechnic who guide our institution toward excellence in technical education.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center p-4 bg-primary/5">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
                  <ImageLoader 
                    src={leader.photo} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                <p className="text-gray-700 font-medium mt-1">{leader.position}</p>
                <p className="text-sm text-gray-600 mt-1">{leader.organization}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700">{leader.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Under the guidance of our esteemed leadership team, JSS Polytechnic strives to provide quality technical education 
            that prepares students for industry needs while emphasizing holistic development, ethics, and innovation.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
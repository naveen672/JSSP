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
      <div className="relative bg-gradient-to-r from-primary via-blue-700 to-indigo-800 py-24 px-4">
        <div className="absolute inset-0 bg-black/25 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Our Leadership Team
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders behind JSS Polytechnic who guide our institution toward excellence in technical education.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadershipTeam.map((leader) => (
            <div 
              key={leader.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-gray-100"
            >
              <div className="flex justify-center p-6 bg-gradient-to-b from-slate-50 to-blue-50">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-200 transition-all duration-300 group-hover:shadow-blue-200/50">
                  <ImageLoader 
                    src={leader.photo} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">{leader.name}</h3>
                <p className="text-lg font-medium mt-1 text-gray-800">{leader.position}</p>
                <p className="text-sm font-medium text-gray-600 mt-1">{leader.organization}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{leader.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12 shadow-lg border border-blue-100">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 mb-6">Our Vision</h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed">
            Under the guidance of our esteemed leadership team, JSS Polytechnic strives to provide quality technical education 
            that prepares students for industry needs while emphasizing holistic development, ethics, and innovation.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
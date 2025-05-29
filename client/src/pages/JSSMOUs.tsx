import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JSSMOUs() {
  return (
    <>
      <Helmet>
        <title>JSS Collaborations & MOUs - JSS Polytechnic</title>
        <meta name="description" content="JSS Polytechnic's collaborations and MOUs with industry partners for training and placement ventures." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            JSS Collaborations & MOUs
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                MOUs Signed in Support of Placement and Training Ventures
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                JSS Polytechnic has signed Memorandums of Understanding (MOUs) with the following companies and industries to enhance placement opportunities and training programs for our students.
              </p>

              {/* Mechanical Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Mechanical Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>KGTTI, Mysuru</li>
                    <li>Flow & Force Engineers, Bengaluru</li>
                    <li>GTTC, Mysuru</li>
                    <li>VIDYUT Automation, Mysuru</li>
                    <li>IRobo Automations Pvt.Ltd, Mysuru</li>
                  </ul>
                </div>
              </div>

              {/* Electronics & Communication Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Electronics & Communication Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ultismart Infotech LLP, Mysuru</li>
                    <li>IQuest Technologies, Mysuru</li>
                    <li>MARCONICS Technologies, Mysuru</li>
                    <li>KGTTI, Mysuru</li>
                  </ul>
                </div>
              </div>

              {/* Computer Science & Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Computer Science & Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Diliber Foundation</li>
                    <li>StormX Technologies Pvt Ltd</li>
                    <li>Sai Sofsol Hebbal Industrial Area Mysuru</li>
                    <li>Ecclesia Advanced Computer Technology Mysuru</li>
                    <li>MyViz Mysuru</li>
                    <li>Jupiter King Infotech, Srirampura, Mysuru</li>
                  </ul>
                </div>
              </div>

              {/* Mechatronics Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Mechatronics Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>BDS Enterprises, Mysuru</li>
                    <li>KGTTI, Mysuru</li>
                    <li>GTTC, Mysuru</li>
                  </ul>
                </div>
              </div>

              {/* Electrical & Electronics Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Electrical & Electronics Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vidyut Automation, Mysuru</li>
                    <li>Sri Sai Enterprises, Hebbal, Mysuru</li>
                  </ul>
                </div>
              </div>

              {/* Civil Engineering */}
              <div className="mb-10">
                <div className="bg-primary text-white py-3 px-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Civil Engineering</h3>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-lg p-4 bg-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>CAD DESK</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">Benefits of Industry Collaborations</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Enhanced practical training opportunities for students</li>
                <li>Industry-relevant curriculum development</li>
                <li>Internship and placement assistance</li>
                <li>Access to state-of-the-art technologies and industry practices</li>
                <li>Guest lectures and workshops by industry experts</li>
                <li>Research and development collaboration</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
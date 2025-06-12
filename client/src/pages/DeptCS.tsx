import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function DeptCS() {
  return (
    <>
      <Helmet>
        <title>Computer Science Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Computer Science Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Academics", path: "/academics" },
          { label: "Departments", path: "/academics" },
          { label: "Computer Science & Engineering", path: "/dept-cs" }
        ]} 
      />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Computer Science & Engineering Department
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision & Mission Section */}
            <section className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Vision</h2>
                <p className="text-gray-700">
                  To produce technically competent professionals in Computer Science and Engineering through quality teaching – learning environment to meet the needs of Academia, Industry and Society.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: To impart technical knowledge and skills with quality teaching – learning process and supportive infrastructure facilities.</li>
                  <li>M2: To motivate students towards lifelong learning and help them to find right career opportunities.</li>
                  <li>M3: To inculcate the qualities of leadership, personality development and social responsibility in the students.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Program Educational Objectives</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Obtain a strong technical foundation to pursue higher education.</li>
                  <li>Pursue a successful career utilizing his/her education to become an excellent employee or entrepreneur.</li>
                  <li>Become socially responsible with good leadership qualities, ethical values and effective interpersonal skills.</li>
                </ul>
              </div>
            </section>

            {/* HOD's Message */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                From HOD's Desk
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Department of Computer Science and Engineering (CSE) was established in the year 1987. It is recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake of students is 60. The department has well equipped computer labs, in accordance with the curriculum.
                </p>
                <p>
                  Most of the students opt for higher education after Diploma. Out of these, many of them secure top ranks in DCET and pursue higher studies in prestigious engineering colleges, like RVCE (Bengaluru), PES (Bengaluru) and SJCE (Mysuru), and NIE (Mysuru).
                </p>
                <p>
                  We also have students who are placed in reputed companies, such as Infosys, Wipro, and Theorem. In addition to handling sessions, our dedicated staff members mentor students and motivate them to be technically competent and socially responsible.
                </p>
                <p className="text-sm italic">
                  Note: All the faculties nature of association is regular Employees
                </p>
              </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Achievements
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Student Placements</h3>
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Academic year</th>
                        <th className="py-2 px-4 border-b text-center">RVCE, Bengaluru</th>
                        <th className="py-2 px-4 border-b text-center">SJCE, Mysuru</th>
                        <th className="py-2 px-4 border-b text-center">NIE, Mysuru</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">2018</td>
                        <td className="py-2 px-4 border-b text-center">1</td>
                        <td className="py-2 px-4 border-b text-center">7</td>
                        <td className="py-2 px-4 border-b text-center">4</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">2019</td>
                        <td className="py-2 px-4 border-b text-center">4</td>
                        <td className="py-2 px-4 border-b text-center">10</td>
                        <td className="py-2 px-4 border-b text-center">0</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">2020</td>
                        <td className="py-2 px-4 border-b text-center">1</td>
                        <td className="py-2 px-4 border-b text-center">9</td>
                        <td className="py-2 px-4 border-b text-center">8</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-medium">Total</td>
                        <td className="py-2 px-4 border-b text-center font-medium">6</td>
                        <td className="py-2 px-4 border-b text-center font-medium">16</td>
                        <td className="py-2 px-4 border-b text-center font-medium">12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="list-disc pl-5 space-y-2">
                  <li>3 day state level workshop for faculty on newly introduced 'Statistics and Analytics Lab' in C-20 curriculum with around 150 participants conducted.</li>
                  <li>5 days State Level FDP on Full Stack Development conducted.</li>
                  <li>Alumni placed in reputed companies in India and Abroad.</li>
                  <li>Encouragement for toppers and 100% attendance students.</li>
                  <li>Industry visits, workshops, technical talks by industry experts arranged frequently for exposure of students.</li>
                  <li>Educating public about security in E-transactions in Suttur Jathra exhibition.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column - Faculty & Staff */}
          <div className="space-y-8">
            {/* Faculty Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Teaching Faculty
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Shinu Koshy</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 30/7/2003</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Sowmyashree.H.G</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 14/7/2006</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Lokesha. K.R</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 17/7/2006</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Somaprabha .S</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 29/1/2008</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Shruthi. S</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 10-03-2009</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Keerthana M</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 18/1/2024</p>
                </div>
              </div>
            </section>

            {/* CS Lab Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                CS Laboratory
              </h2>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600 italic">Well-equipped modern computer laboratories with latest hardware and software</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptCivil() {
  return (
    <>
      <Helmet>
        <title>Civil Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Civil Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Civil Engineering Department
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
                  To develop efficient Civil Engineering professionals who serve competently, collaboratively, and ethically to create a sustainable world and enhance the quality of life.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: To impart quality education & practical training in collaboration with industry through prescribed curriculum.</li>
                  <li>M2: To develop professionally skilled and ethical planners, designers & constructors.</li>
                  <li>M3: To develop leadership skills in decision making while shaping public, environmental & infrastructure policy.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Program Educational Objectives</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>PEO1: To apply technical knowledge in analyzing problems in the field of civil engineering, with maximum economic benefits to society and minimum damage to the environment.</li>
                  <li>PEO2: To enhance soft skills, which will enable them to work as leaders, team members and contribute to nation building.</li>
                  <li>PEO3: To make them committed to professional ethics and focus on ensuring quality, safety and environmental sustainability in all their professional activities.</li>
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
                  The Civil Engineering Department was established in the year 2007, recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 40 students.
                </p>
                <p>
                  The department is committed to educating the students in the field of Civil Engineering, with professional skills and ethical values through teaching- learning process and develop them to face the societal challenges and to meet the needs of the stakeholders.
                </p>
                <p>
                  The program has well-equipped Civil Engineering laboratories with adequate facilities and high end equipments.
                </p>
                <p>
                  As a part of academic curriculum, students take up industrial visit and internship, to augment much needed practical exposure.
                </p>
                <p>
                  Guest lectures by personnel from industry, entrepreneurs, and researchers in the field of Civil Engineering.
                </p>
                <p>
                  Many students are serving at reputed organizations like RAMCO, Shobha Constructions and those who are pursuing higher studies are studying in prestigious Engineering colleges, like PESIT SJCE, NIE.
                </p>
                <p>
                  Staff and students are provided with unlimited free internet access at e-Library during spare time, so that they can develop and enhance their knowledge acquired in class rooms.
                </p>
                <p className="text-sm italic">
                  Note: All the faculties nature of association is regular Employees
                </p>
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
                  <p className="font-semibold text-lg">Mahadevaprabhu K M</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">BE | Joined: 13/7/2009</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Bhavya M</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 03-10-2011</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Akshay kumar S</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 10-10-2013</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Roopeshkumar B</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 16/7/2014</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Yogitha H M</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 02-04-2016</p>
                </div>
              </div>
            </section>

            {/* Supporting Staff Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Supporting Staff
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Manju B</p>
                  <p className="text-primary">Lab helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Basavanna</p>
                  <p className="text-primary">Lab helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptEE() {
  return (
    <>
      <Helmet>
        <title>Electrical & Electronics Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Electrical & Electronics Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Electrical & Electronics Engineering Department
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
                  To be an excellent centre for the fundamental education in the field of Electrical & Electronics Engineering and to reach the needs of industry, academia and community.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: To provide quality education in the area of Electrical & Electronics Engineering for increasing the opportunities in higher education & employment by giving the best practice of teaching-learning process.</li>
                  <li>M2: To impart the value-based system of education by providing professional ethics & good communication skills to meet the challenges in the society.</li>
                  <li>M3: To provide practical knowledge to students by collaborating with industry, research organizations and academia to encourage creativity and innovation.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Program Educational Objectives</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Graduates will pursue higher education.</li>
                  <li>Graduates will have successful career opportunities in Electrical & Electronics industries and other institutions.</li>
                  <li>Graduates will exhibit leadership qualities with professional ethics for the development of society.</li>
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
                  Electrical and Electronics Engineering programme was established in the year 2007-08, recognised by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 40 students.
                </p>
                <p>
                  The department has well qualified and experienced teaching faculty.
                </p>
                <p>
                  The core courses of Electrical and Electronics Engineering programme offers a variety of opportunities to the aspirants be it for securing employment or to grow as an entrepreneur.
                </p>
                <p>
                  At the end of the course, the students will be able to apply the knowledge acquired to identify, design/ redesign and solve Engineering problems.
                </p>
                <p>
                  Many students are either employees of prestigious organisations like L&T, TRIPHASE Technology, Asian Paints, ABB, Toyota Kirloskar, Wipro or pursuing their higher studies in coveted institutions, like RVCE, SJCE, NIE.
                </p>
                <p>
                  Staff and students are provided with unlimited free internet access at e-Library during spare time, so that they can develop and enhance their knowledge acquired in class rooms.
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
                  <p className="font-semibold text-lg">Prathibha.B</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 01-01-2009</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Sadhana M.V</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 01-01-2010</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Sneha. S</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 29/7/2010</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Shwetha. M.P</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 28/2/2011</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Vidya</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 01-10-2023</p>
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
                  <p className="font-semibold text-lg">Madhusudhan N B</p>
                  <p className="text-primary">Instructor</p>
                  <p className="text-sm text-gray-600">BE</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Ravi S K</p>
                  <p className="text-primary">Mechanic</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Somashekara A N</p>
                  <p className="text-primary">Helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Prashanth H S</p>
                  <p className="text-primary">Helper</p>
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
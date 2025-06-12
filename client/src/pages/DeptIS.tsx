import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptIS() {
  return (
    <>
      <Helmet>
        <title>Information Science and Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Information Science and Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Information Science and Engineering Department
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
                  To be recognized as a prestigious academic centre for excellence in technical education and to meet the needs of Academia, Industry & Society.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: To impart holistic outcome based education in both technical and non technical programs through state of the art curriculum and effective teaching-learning process.</li>
                  <li>M2: To promote industry institutional collaboration through MOUs and internship programs.</li>
                  <li>M3: To infuse ethical and responsible engineering practices to create successful professionals.</li>
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
                  The Department of Information Science and Engineering was established in the year 1987, recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 30 students.
                </p>
                <p>
                  The department has well equipped computer facility with the latest hardware, software and peripherals with internet facilities.
                </p>
                <p>
                  The students pursuing higher studies are studying in prestigious Engineering colleges like PESIT, SJCE, NIE etc…
                </p>
                <p>
                  The department is dedicated to education and overall excellence.
                </p>
                <p>
                  In addition to classes, students also have the opportunity to interact with faculty and supporting staff for mentoring.
                </p>
                <p>
                  Staff and students are provided with unlimited free internet access at e-library during spare time, so that they can develop and enhance their knowledge acquired in class rooms.
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
                  <p className="font-semibold text-lg">Tejaswini M P</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 07-12-2007</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Shruthi M</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 08-06-2009</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Sowrabha MC</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 11-07-2022</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Jayarajeshwari K</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 18/1/2024</p>
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
                  <p className="font-semibold text-lg">Nagakanya M P</p>
                  <p className="text-primary">Lab helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Mahadevaswamy K N</p>
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
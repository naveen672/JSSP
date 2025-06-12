import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptSC() {
  return (
    <>
      <Helmet>
        <title>Science Department - JSS Polytechnic</title>
        <meta name="description" content="Science Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Science Department
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Overview */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Department Overview
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Science Department at JSS Polytechnic provides a strong foundation in basic sciences 
                  including Physics, Chemistry, and Mathematics that forms the core of engineering education.
                </p>
                <p>
                  Our dedicated faculty members ensure that students develop a solid understanding of 
                  scientific principles and analytical thinking that will serve them throughout their 
                  engineering careers.
                </p>
                <p>
                  The department is equipped with modern laboratories for practical demonstrations and 
                  experiments that enhance the theoretical knowledge gained in classrooms.
                </p>
                <p>
                  Beyond regular curriculum, the department also organizes various workshops, seminars, 
                  and special lectures to keep students updated with the latest developments in the field 
                  of science and technology.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Faculty */}
          <div className="space-y-8">
            {/* Faculty Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Teaching Faculty
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Pankaja</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">MSc | Joined: 28/7/2004</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Arun</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MPhil | Joined: 07-01-2003</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Geetha</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MSc | Joined: 17/7/2010</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Chaitra</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MSc | Joined: 21/12/2022</p>
                </div>
              </div>
            </section>

            {/* Lab Facilities */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Laboratory Facilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The department maintains state-of-the-art laboratories including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Physics Laboratory</li>
                  <li>Chemistry Laboratory</li>
                  <li>Applied Science Research Lab</li>
                </ul>
                <p className="mt-4">
                  These facilities are equipped with modern equipment and instruments to provide 
                  students with hands-on experience and practical knowledge.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
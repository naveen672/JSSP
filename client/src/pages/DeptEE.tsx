import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";
import { ImageLoader } from "@/components/Images";

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
            
            {/* Student Testimonial Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Student Testimonial
              </h2>
              <div className="flex flex-col gap-6">
                {/* Student Photo and Info */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-full sm:w-1/6 flex justify-center">
                    <div className="rounded-lg overflow-hidden border-4 border-primary/20 shadow-md">
                      <ImageLoader 
                        src="/images/student.png"
                        alt="Trupti Ananth Jain"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-5/6">
                    <h3 className="text-xl font-bold text-primary">Trupti Ananth Jain</h3>
                    <p className="text-sm text-gray-600 mb-2">Electrical & Electronics Engineering • 2019-2022 Batch</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Top Performer</span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">National Paper Presenter</span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Academic Excellence</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                  <div className="relative">
                    <Quote className="text-primary/20 absolute -top-4 -left-4 w-12 h-12" />
                    <div className="pl-4 space-y-3 text-gray-700">
                      <p className="italic">
                        I am immensely proud and grateful to share my journey as a student of the Department of Electrical and Electronics Engineering at JSS Polytechnic, Mysore. These past three years have been a transformative chapter of my life—both academically and personally.
                      </p>
                      <p className="italic">
                        From the very beginning, the department laid a strong foundation in core electrical and electronics concepts. I was not only taught the theory with clarity, but I also received hands-on practical exposure, which deepened my understanding and gave me confidence to apply knowledge in real-world situations.
                      </p>
                      <p className="italic">
                        What truly sets this department apart is the unwavering support and dedication of the faculty and staff. They recognized my potential and consistently motivated me to push beyond my limits. The environment they created fostered both learning and leadership.
                      </p>
                      <p>
                        With the constant encouragement and mentorship of the department—and the cooperation and teamwork of my talented colleagues—I had the honor of securing:
                      </p>
                      <ul className="list-disc pl-6 font-medium">
                        <li>First Place in a National-Level Paper Presentation</li>
                        <li>First Place Twice in State-Level Paper Presentations</li>
                      </ul>
                      <p className="italic">
                        Because of the nurturing environment, technical knowledge, and continuous guidance I received from my mentors and peers, I was able to become a topper throughout the three years of my diploma journey.
                      </p>
                      <p className="text-right font-semibold pt-4">
                        - Trupti Ananth Jain
                      </p>
                    </div>
                  </div>
                </div>
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
            
            {/* Department Achievements Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">
                Department Achievements
              </h2>
              <div className="space-y-3">
                <div className="bg-primary/5 p-3 rounded-md">
                  <p className="font-medium">National Level Paper Presentation Winners</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-md">
                  <p className="font-medium">State Level Project Competition Finalists</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-md">
                  <p className="font-medium">High Placement Rate in Top Companies</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-md">
                  <p className="font-medium">Students Admitted to Leading Engineering Colleges</p>
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
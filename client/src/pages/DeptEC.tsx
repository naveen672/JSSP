import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptEC() {
  return (
    <>
      <Helmet>
        <title>Electronics & Communication Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Electronics & Communication Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Electronics & Communication Engineering Department
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
                  To excel in the emerging area of Electronics and Communication Engineering by imparting knowledge with relevant practices to meet the industrial and societal needs.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: Imparting quality technical education to the students by providing excellent teaching.</li>
                  <li>M2: Establishing Industry institute interaction to make students ready for the industrial environment.</li>
                  <li>M3: Inculcating ethical values and leadership abilities in the students so as to work towards the growth of the society.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Program Educational Objectives</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Demonstrate, update and adapt domain knowledge in the area of Electronics and Communication Engineering and the allied fields to propose solutions for the core industry in the ever changing global enterprise with ethical practices.</li>
                  <li>Assume leadership roles and succeed in their chosen career path, in industry or public service through engineering ability, life skills and multidisciplinary skill set acquired.</li>
                  <li>Pursue higher education institutes of national level.</li>
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
                  The Electronics & Communication Engineering Department was established in year 1987, recognized by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 60 students.
                </p>
                <p>
                  The department has modern, well-equipped Laboratories with adequate facilities, with high end electronic gadgets.
                </p>
                <p>
                  It is committed to provide students with an environment for overall development.
                </p>
                <p>
                  The department has consistent academic record and also provides excellent career opportunities in various sectors, through placement.
                </p>
                <p>
                  Many students are serving at reputed organizations like ABB, Werth Electronics, AT&S, L&T Infotech and those who are pursuing higher studies are studying in prestigious Engineering colleges, like PESIT, SJCE, NIE.
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
                  <p className="font-semibold text-lg">Dr. Asha Kulkarni</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">PhD | Joined: 15/9/1997</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Yamuna K</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 09-03-1998</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Vimala H N</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 25/7/2003</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Pavithra B</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech | Joined: 07-10-2006</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Niranjanamurthy M</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 19/10/2013</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Parashivamurthy</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 25/3/1998</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Yogitha M S</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE | Joined: 01-07-2024</p>
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
                  <p className="font-semibold text-lg">Rashmi N S</p>
                  <p className="text-primary">Instructor</p>
                  <p className="text-sm text-gray-600">DEC</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Chandrashekara M P</p>
                  <p className="text-primary">Instructor</p>
                  <p className="text-sm text-gray-600">DEC</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Manjunath S R</p>
                  <p className="text-primary">Instructor</p>
                  <p className="text-sm text-gray-600">DEC</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Shilpa G</p>
                  <p className="text-primary">Mechanic</p>
                  <p className="text-sm text-gray-600">ITI, BA</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Srikantamurthy</p>
                  <p className="text-primary">Lab Helper</p>
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
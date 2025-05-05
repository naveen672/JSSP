import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeptME() {
  return (
    <>
      <Helmet>
        <title>Mechanical Engineering Department - JSS Polytechnic</title>
        <meta name="description" content="Mechanical Engineering Department at JSS Polytechnic for women, offering quality education and practical training." />
      </Helmet>

      <Header />

      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Mechanical Engineering Department
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
                  To develop programme with excellence in teaching-learning to produce competent professionals in Mechanical Engineering with ethical values to meet the needs of the industry and society.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>M1: To benefit the society by imparting quality technical education to students by providing excellent Teaching learning Environment in collaboration with industry and academia.</li>
                  <li>M2: To apply the knowledge of basic and contemporary science, engineering and innovative skills to identify problems in Academia, Industry and Society and to develop practical solutions to them.</li>
                  <li>M3: To impart ethical values, leadership, teamwork, communication skills and hands-on activities for day-to-day mechanical engineering problems.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary border-b border-gray-200 pb-2">Program Educational Objectives</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>To enhance their technical knowledge by pursuing higher studies.</li>
                  <li>To lead successful careers in wider ranges of industries by acquiring the knowledge through continuous learning.</li>
                  <li>To develop entrepreneurship skills and become a successful entrepreneur.</li>
                  <li>To develop professional ethics and responsibilities to address societal and environmental issues.</li>
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
                  Mechanical Engineering department is one of the oldest and evergreen engineering programmes, established in the year 1987, recognised by DTE, Bengaluru and affiliated to AICTE, New Delhi. The current intake is 60 students.
                </p>
                <p>
                  The department has committed, experienced and highly qualified teaching faculty.
                </p>
                <p>
                  It has very good supporting staff, with hands on experience in imparting practical training in well-equipped laboratories, workshop and machine shop, with adequate and high end equipment's.
                </p>
                <p>
                  The department has a very good track record of successful students who have passed with flying colours.
                </p>
                <p>
                  Many students are either employees of prestigious organisations like Infosys, Toyota Kirloskar, Wipro, L&T, to name a few or pursuing their higher studies in coveted institutions, like RVCE, PESIT, SJCE, NIE.
                </p>
                <p>
                  In addition, students are given one to one attention, for their all-round development, be it academics, sports, placement or ethical engineering practices.
                </p>
                <p>
                  Staff and students are provided with unlimited free internet access at e-Library during spare time, so that they can develop and enhance their knowledge acquired in class rooms.
                </p>
                <p>
                  Students express that their stay in the department is not only an experience to reckon with but is an emotional attachment to be experienced.
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
                  <p className="font-semibold text-lg">Rajashekara. H.M</p>
                  <p className="text-primary">HOD</p>
                  <p className="text-sm text-gray-600">BE</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Prashanthkumar N Malavade</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">MTech</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Dr. Bhaktavatsala. K.S</p>
                  <p className="text-primary">Principal</p>
                  <p className="text-sm text-gray-600">PhD</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Uday R</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">M.Tec</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Chandrashekharamurthy. K.B</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">BE</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Thirumalesha. B.R</p>
                  <p className="text-primary">Lecturer</p>
                  <p className="text-sm text-gray-600">ME</p>
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
                  <p className="font-semibold text-lg">Nagendra. H.C</p>
                  <p className="text-primary">Instructor</p>
                  <p className="text-sm text-gray-600">DME</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Prakash.N</p>
                  <p className="text-primary">Lab Helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Udayakumar. R</p>
                  <p className="text-primary">Lab Helper</p>
                  <p className="text-sm text-gray-600">ITI</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-semibold text-lg">Mahadevaswamy</p>
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
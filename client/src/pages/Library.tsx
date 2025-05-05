import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '@/components/Breadcrumb';
import { Book, Library as LibraryIcon, Users, Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import { newsItems } from '@/data/collegeData';

export default function Library() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <Helmet>
        <title>Library & Information Centre | JSS Polytechnic</title>
        <meta name="description" content="Library and Information Centre at JSS Polytechnic - A resource centre for teaching and learning with extensive collection of books and digital resources." />
      </Helmet>
      
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <LibraryIcon className="mr-3" size={32} />
            Library & Information Centre
          </h1>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Facilities', path: '/facilities' },
            { label: 'Library & Information Centre', path: '/library' }
          ]} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">About Our Library</h2>
              <p className="mb-4 text-gray-800">
                The library is a resource centre for both teaching and learning. It is housed nearly 13,500 volumes covering all streams of Science and Engineering, and allied subjects. It has updated collection to the information need of the user community from time to time.
              </p>
              <p className="mb-4 text-gray-800">
                The library and reference section consist of textbooks, reference books, Dictionaries, Projects report, Previous Question papers, Newspapers, Journals, Magazines and CD/DVDs related to curriculum also provides internet facilities.
              </p>
            </section>
            
            {/* Library Details Table */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Library Details</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">Category</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Carpet Area of Library (in SQMTS)</td>
                      <td className="py-3 px-4 border border-gray-300">44 SQMTS</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Reading Space (in SQMTS)</td>
                      <td className="py-3 px-4 border border-gray-300">144/108.36/51.64 SQMTS</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Number of seats in Reading Space</td>
                      <td className="py-3 px-4 border border-gray-300">20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Number of users (Issued book) per month</td>
                      <td className="py-3 px-4 border border-gray-300">100-120</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Number of users (Reading space) per month</td>
                      <td className="py-3 px-4 border border-gray-300">600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Timings: During Working Day and Weekend</td>
                      <td className="py-3 px-4 border border-gray-300">Monday – Friday 10AM-5.30PM<br />Saturday 10AM – 2PM</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Number of Library staff</td>
                      <td className="py-3 px-4 border border-gray-300">2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Number of Library staff with a degree in library</td>
                      <td className="py-3 px-4 border border-gray-300">1</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Library Management</td>
                      <td className="py-3 px-4 border border-gray-300">Gurukula</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Computerization for Search</td>
                      <td className="py-3 px-4 border border-gray-300">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Library Sections */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Library Sections</h2>
              <p className="mb-4 text-gray-800">The library consists of the following sections:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                <li>Circulation Section</li>
                <li>Stock Area Section</li>
                <li>Periodical and Newspaper section</li>
                <li>Reference Section</li>
                <li>Digital Resource Center</li>
              </ul>
            </section>
            
            {/* Library Resource Collections */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Library Resource Collections</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">Resource Type</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">e-books</td>
                      <td className="py-3 px-4 border border-gray-300">11,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">CDs</td>
                      <td className="py-3 px-4 border border-gray-300">50</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Technical Magazines</td>
                      <td className="py-3 px-4 border border-gray-300">05</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">General Magazines</td>
                      <td className="py-3 px-4 border border-gray-300">03</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">Newspapers</td>
                      <td className="py-3 px-4 border border-gray-300">02</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Human Resources for Library */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Human Resources for Library</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">Name</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Designation</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300">Yogeesha K S</td>
                      <td className="py-3 px-4 border border-gray-300">Library assistant</td>
                      <td className="py-3 px-4 border border-gray-300">MLib Sc</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300">Ramesh M</td>
                      <td className="py-3 px-4 border border-gray-300">Attender</td>
                      <td className="py-3 px-4 border border-gray-300">SSLC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Library Expenditure */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Library Expenditure</h2>
              <p className="mb-4 text-gray-800">Library expenditure on Books, Magazines/Journals, and Newspaper</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 border border-gray-300 text-left">Year</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Books (Rs)</th>
                      <th className="py-3 px-4 border border-gray-300 text-left">Magazines/Journals/Newspaper (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">2022-23 (CFY)</td>
                      <td className="py-3 px-4 border border-gray-300">8,737</td>
                      <td className="py-3 px-4 border border-gray-300">2,880</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border border-gray-300 font-medium">2021-22 (CFYm1)</td>
                      <td className="py-3 px-4 border border-gray-300">19,560</td>
                      <td className="py-3 px-4 border border-gray-300">3,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-3 px-4 border border-gray-300 font-medium">2020-21 (CFYm2)</td>
                      <td className="py-3 px-4 border border-gray-300">83,737</td>
                      <td className="py-3 px-4 border border-gray-300">2,880</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Additional Services */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Additional Services</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Digital Resource Center</h3>
                <p className="text-gray-800">Library's Digital center is having a good collection of e-books.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Current Awareness Service (CAS)</h3>
                <p className="text-gray-800">This service provides the latest information to users in the area of Science and Technology and Engineering.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Internet Facility</h3>
                <p className="text-gray-800">10 PCs are available for the users to browse the internet.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">New Arrival Display</h3>
                <p className="text-gray-800">In the New Arrival section, one copy of the new title or new edition is displayed for one Month for attracting the students and staff members for using the library effectively and at the same time update their knowledge.</p>
              </div>
            </section>
            
            {/* Library Rules */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Rules and Regulations of the Library</h2>
              <ul className="list-disc pl-5 mb-4 text-gray-800 space-y-2">
                <li>Students should register their name in the Login Register.</li>
                <li>The personal belongings should be kept in track while entering the library.</li>
                <li>Only blank sheets of paper are allowed inside the library for taking notes.</li>
                <li>Students asked to maintain silence and discipline in and around the library.</li>
                <li>Students are asked to switch off their mobile or keep it in silent mode.</li>
                <li>All the students are eligible to borrow books.</li>
                <li>Borrowed books should be returned before the due date.</li>
                <li>Before leaving library with borrowed books, the student is asked to check the condition of the books.</li>
                <li>If any pages are found missing or torn or any other damage found by student at the time of issue, it should be reported to the librarian.</li>
                <li>If the borrowed book is lost, the concerned student should Report about the book to the librarian. He/she should replace the same title, author edition and publication with fine. Otherwise, The concerned student should pay two times cost of the book.</li>
                <li>If any student is found to be involved in stealing or destroying/damaging any type of reading Materials, he/she is penalized.</li>
                <li>No library item shall be taken out of the library without due procedure.</li>
              </ul>
            </section>
          </div>
          
          {/* Sidebar with Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Calendar className="mr-2" size={20} />
                Library Hours
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>10:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Book className="mr-2" size={20} />
                Resource Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total e-books:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">11,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Technical Magazines:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">General Magazines:</span>
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">3</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Users className="mr-2" size={20} />
                Contact Library
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <User className="mr-2 mt-1 text-primary" size={16} />
                  <div>
                    <span className="font-medium block">Yogeesha K S</span>
                    <span className="text-sm text-gray-600">Library Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
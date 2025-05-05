import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/collegeData';
import { 
  CheckCircle, 
  Users, 
  History, 
  Award, 
  Briefcase, 
  BookOpen,
  User
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">About JSS Polytechnic</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Learning today, leading tomorrow - Our journey of excellence in technical education
          </p>
        </div>
      </div>

      {/* Our History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <History className="text-primary mr-3" size={32} />
                <h2 className="text-3xl font-heading font-bold text-primary">Our History</h2>
              </div>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-neutral-gray mb-4">
                JSS Polytechnic was established in 1990 with a vision to provide quality technical education
                to students from various backgrounds. Starting with just two departments and 120 students,
                we have grown steadily over the decades.
              </p>
              <p className="text-neutral-gray mb-4">
                Under the guidance of our esteemed management and with the dedication of our faculty,
                the institution has evolved into a premier center for technical education in the region.
                Today, we offer various diploma programs and have state-of-the-art facilities.
              </p>
              <p className="text-neutral-gray">
                Our commitment to academic excellence, industry-relevant curriculum,
                and holistic development of students has earned us recognition and respect
                in the field of technical education.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80" 
                alt="JSS Polytechnic History" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-neutral-gray mb-4">
                To impart quality technical education that develops innovative thinking, ethical values,
                and leadership qualities among students, preparing them to meet the changing needs
                of the industry and society.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Providing industry-relevant technical education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Fostering innovation and creative thinking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Developing leadership and ethical values</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Creating socially responsible technicians</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-neutral-gray mb-4">
                To be a premier technical institution known for excellence in education, innovation,
                and research, producing skilled technical professionals who contribute to the
                technological advancement of the nation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Becoming a center of excellence in technical education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Establishing strong industry-academia partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Promoting research and innovation among students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={20} />
                  <span>Achieving 100% placement for eligible students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-primary mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Leadership Team</h2>
            </div>
            <div className="w-24 h-1 bg-secondary mx-auto mt-2 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              Meet the dedicated professionals who guide our institution towards excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                position: 'Principal',
                bio: 'Ph.D in Mechanical Engineering with 25 years of experience in academia and industry.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
              },
              {
                name: 'Prof. Meena Sharma',
                position: 'Vice Principal',
                bio: 'Expert in Computer Science with extensive research in AI and machine learning.',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
              },
              {
                name: 'Dr. Suresh Patel',
                position: 'Head of Academics',
                bio: 'Specializes in curriculum development and educational leadership.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="bg-neutral rounded-lg overflow-hidden shadow-md">
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.position}</p>
                  <p className="text-neutral-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Achievements</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <User size={40} />, value: '5000+', label: 'Successful Alumni' },
              { icon: <BookOpen size={40} />, value: '6', label: 'Diploma Programs' },
              { icon: <Award size={40} />, value: '30+', label: 'Years of Excellence' },
              { icon: <Briefcase size={40} />, value: '98%', label: 'Placement Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-primary-light rounded-lg">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

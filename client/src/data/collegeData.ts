// News Items for the Ticker
export const newsItems = [
  'Admissions open for 2023-24 academic year',
  'JSS Polytechnic wins Best Technical Institution Award',
  'Graduation ceremony scheduled for May 15th',
  'New Computer Science lab inaugurated by Education Minister',
  '100% placement record for the 5th consecutive year'
];

// Import images for Hero Slideshow and other sections
import image10 from '@assets/10.jpg';
import image11 from '@assets/11.jpg';
import image12 from '@assets/12.jpg';
import image13 from '@assets/13.jpg';
import jssLogo from '@assets/jsslogo.png';
import ecImage from '@assets/image_1747620347406.png';
import isImage from '@assets/image_1747621477155.png';
import csImage from '@assets/image_1747621497744.png';
import eeImage from '@assets/image_1747621805604.png';
import meImage from '@assets/image_1747621810106.png';
import ceImage from '@assets/image_1747623137655.png';
import truptiImage from '@assets/image_1747737669295.png';

// Hero Slideshow Data
export const heroSlides = [
  {
    image: image12,
    title: 'Welcome to JSS Polytechnic',
    description: 'A premier institution dedicated to technical excellence and innovation.',
    primaryButton: {
      text: 'Apply Now',
      url: '/admissions'
    },
    secondaryButton: {
      text: 'Learn More',
      url: '/about'
    }
  },
  {
    image: image13,
    title: 'State-of-the-Art Campus',
    description: 'Modern infrastructure and facilities for comprehensive technical education.',
    primaryButton: {
      text: 'Campus Tour',
      url: '/facilities'
    },
    secondaryButton: {
      text: 'Our Facilities',
      url: '/facilities'
    }
  },
  {
    image: image11,
    title: 'Lush Green Environment',
    description: 'Study in a beautiful campus with modern amenities and serene surroundings.',
    primaryButton: {
      text: 'Explore Campus',
      url: '/facilities'
    },
    secondaryButton: {
      text: 'Student Life',
      url: '/student-support'
    }
  },
  {
    image: image10,
    title: 'NCC and Extracurricular Activities',
    description: 'Comprehensive development through various non-academic programs and activities.',
    primaryButton: {
      text: 'Join Activities',
      url: '/student-support'
    },
    secondaryButton: {
      text: 'NCC at JSS',
      url: '/ncc-annual-report'
    }
  }
];

// Programs Data
export const programs = [
  {
    id: 1,
    title: 'Diploma in Mechanical Engineering',
    description: 'Learn design, manufacturing, and maintenance of mechanical systems with hands-on training.',
    image: '/mechanical_image.jpg',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-me'
  },
  {
    id: 2,
    title: 'Diploma in Computer Science',
    description: 'Master programming, database management, and software development skills.',
    image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1716112801~exp=1716113401~hmac=8ea84de9e1b5fb80ea4a4f15dc4dc0ed01bc4c33fcfa05f5b5ff55b1c89da53e',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-cs'
  },
  {
    id: 3,
    title: 'Diploma in Electrical Engineering',
    description: 'Study power systems, electrical machines, and control systems with practical applications.',
    image: '/electrical_image.jpg',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-ee'
  },
  {
    id: 4,
    title: 'Diploma in Electronics & Communication',
    description: 'Explore electronic circuits, communication systems, and signal processing technologies.',
    image: '/ec_image.jpg',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-ec'
  },
  {
    id: 5,
    title: 'Diploma in Information Science',
    description: 'Study information systems, data management, and computing technologies.',
    image: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1716112855~exp=1716113455~hmac=5fc697d58c4ff2f11a3e5d9d3f2eee4e2ab09ffc3d8c03f15c4daaf80ae0c4f2',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-is'
  },
  {
    id: 6,
    title: 'Diploma in Civil Engineering',
    description: 'Learn structural design, construction management, and infrastructure development.',
    image: '/civil_image.jpg',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-ce'
  }
];

// About Section Data
export const aboutInfo = {
  description: [
    'JSS Polytechnic is a premier technical education institution committed to excellence in education, research, and innovation. Established with a vision to nurture skilled technicians and engineers, we have been at the forefront of technical education for over three decades.',
    'Our institution is equipped with state-of-the-art facilities, experienced faculty, and strong industry connections to provide students with a comprehensive learning experience that prepares them for successful careers.'
  ],
  features: [
    '30+ Years of Excellence',
    'Experienced Faculty',
    'Industry Partnerships',
    'Modern Facilities'
  ],
  stats: {
    value: '98%',
    label: 'Placement Rate'
  },
  imageUrl: image10,
  logoUrl: jssLogo
};

// Facilities Data
export const facilities = [
  {
    id: 1,
    title: 'Computer Labs',
    description: 'Advanced computing facilities with latest software and hardware.',
    iconName: 'computer'
  },
  {
    id: 2,
    title: 'Technical Workshops',
    description: 'Fully equipped workshops for hands-on technical training.',
    iconName: 'science'
  },
  {
    id: 3,
    title: 'Digital Library',
    description: 'Extensive collection of books, journals, and digital resources.',
    iconName: 'library'
  },
  {
    id: 4,
    title: 'Sports Complex',
    description: 'Modern sports facilities for physical fitness and recreation.',
    iconName: 'sports'
  }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    quote: 'JSS Polytechnic provided me with both technical knowledge and practical skills that helped me succeed in my career. The supportive faculty and excellent infrastructure made my learning experience outstanding.',
    name: 'Trupti Ananth Jain',
    program: 'Computer Science Engineering',
    year: '2019',
    avatar: truptiImage
  }
];

// CTA Section Data
export const ctaInfo = {
  title: 'Ready to Start Your Technical Journey?',
  description: 'Applications are now open for the upcoming academic year. Join JSS Polytechnic and build a strong foundation for your technical career.',
  primaryButton: {
    text: 'Apply Now',
    url: '/admissions'
  },
  secondaryButton: {
    text: 'Schedule a Visit',
    url: '/contact'
  }
};

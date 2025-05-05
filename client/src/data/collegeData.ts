// News Items for the Ticker
export const newsItems = [
  'Admissions open for 2023-24 academic year',
  'JSS Polytechnic wins Best Technical Institution Award',
  'Graduation ceremony scheduled for May 15th',
  'New Computer Science lab inaugurated by Education Minister',
  '100% placement record for the 5th consecutive year'
];

// Import images for Hero Slideshow
import image10 from '@assets/10.jpg';
import image11 from '@assets/11.jpg';
import image12 from '@assets/12.jpg';
import image13 from '@assets/13.jpg';

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
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-me'
  },
  {
    id: 2,
    title: 'Diploma in Computer Science',
    description: 'Master programming, database management, and software development skills.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-cs'
  },
  {
    id: 3,
    title: 'Diploma in Electrical Engineering',
    description: 'Study power systems, electrical machines, and control systems with practical applications.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-ee'
  },
  {
    id: 4,
    title: 'Diploma in Electronics & Communication',
    description: 'Explore electronic circuits, communication systems, and signal processing technologies.',
    image: 'https://images.unsplash.com/photo-1563770557593-e11b79937af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-ec'
  },
  {
    id: 5,
    title: 'Diploma in Information Science',
    description: 'Study information systems, data management, and computing technologies.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
    duration: '3 Years',
    type: 'Full-time',
    departmentLink: '/dept-is'
  },
  {
    id: 6,
    title: 'Diploma in Civil Engineering',
    description: 'Learn structural design, construction management, and infrastructure development.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
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
  imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
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
    quote: 'JSS Polytechnic has provided me with not just technical knowledge but also practical skills that helped me secure a job immediately after graduation. The faculty support was exceptional.',
    name: 'Rahul Singh',
    program: 'Mechanical Engineering',
    year: '2020',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    quote: 'The industry partnerships at JSS Polytechnic gave me opportunities for internships that helped me understand real-world applications of what we learned in classrooms.',
    name: 'Anjali Patel',
    program: 'Computer Science',
    year: '2021',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    quote: 'The hands-on training in well-equipped laboratories at JSS Polytechnic has been the highlight of my education. It prepared me well for my current job as an electrical supervisor.',
    name: 'Vikram Rao',
    program: 'Electrical Engineering',
    year: '2019',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
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

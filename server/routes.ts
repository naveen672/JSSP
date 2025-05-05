import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the college website
  const apiRouter = app.route('/api');

  // Get news items for the news ticker
  app.get('/api/news', (_req, res) => {
    res.json({
      news: [
        'Admissions open for 2023-24 academic year',
        'JSS Polytechnic wins Best Technical Institution Award',
        'Graduation ceremony scheduled for May 15th',
        'New Computer Science lab inaugurated by Education Minister',
        '100% placement record for the 5th consecutive year',
        'JSS Polytechnic selected for national research grant'
      ]
    });
  });

  // Get hero slides data
  app.get('/api/hero-slides', (_req, res) => {
    res.json({
      slides: [
        {
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80',
          title: 'Shaping Futures Through Technical Excellence',
          description: 'Discover cutting-edge diploma programs designed to prepare you for tomorrow\'s challenges.',
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
          image: 'https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80',
          title: 'State-of-the-Art Campus Facilities',
          description: 'Modern laboratories, workshops, and learning spaces designed for hands-on technical education.',
          primaryButton: {
            text: 'Campus Tour',
            url: '/campus-life'
          },
          secondaryButton: {
            text: 'Our Facilities',
            url: '/campus-life'
          }
        },
        {
          image: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80',
          title: 'Industry-Connected Learning',
          description: 'Partnerships with leading companies ensuring our graduates are industry-ready from day one.',
          primaryButton: {
            text: 'Our Partners',
            url: '/about'
          },
          secondaryButton: {
            text: 'Success Stories',
            url: '/about'
          }
        }
      ]
    });
  });

  // Get programs data
  app.get('/api/programs', (_req, res) => {
    res.json({
      programs: [
        {
          id: 1,
          title: 'Diploma in Mechanical Engineering',
          description: 'Learn design, manufacturing, and maintenance of mechanical systems with hands-on training.',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        },
        {
          id: 2,
          title: 'Diploma in Computer Science',
          description: 'Master programming, database management, and software development skills.',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        },
        {
          id: 3,
          title: 'Diploma in Electrical Engineering',
          description: 'Study power systems, electrical machines, and control systems with practical applications.',
          image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        },
        {
          id: 4,
          title: 'Diploma in Civil Engineering',
          description: 'Learn to design, construct, and maintain infrastructure and building projects.',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        },
        {
          id: 5,
          title: 'Diploma in Electronics & Communication',
          description: 'Study electronic devices, circuits, and communication systems with practical applications.',
          image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        },
        {
          id: 6,
          title: 'Diploma in Automobile Engineering',
          description: 'Learn to design, manufacture, and service vehicles and automotive systems.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
          duration: '3 Years',
          type: 'Full-time'
        }
      ]
    });
  });

  // Get facilities data
  app.get('/api/facilities', (_req, res) => {
    res.json({
      facilities: [
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
        },
        {
          id: 5,
          title: 'Hostel Facilities',
          description: 'Separate hostel facilities for boys and girls with comfortable accommodation and 24/7 security.',
          iconName: 'home'
        },
        {
          id: 6,
          title: 'Cafeteria',
          description: 'Spacious cafeteria serving nutritious meals and snacks at affordable prices.',
          iconName: 'food'
        },
        {
          id: 7,
          title: 'Transportation',
          description: 'College buses covering major routes in and around the city for convenient commuting.',
          iconName: 'bus'
        }
      ]
    });
  });

  // Get testimonials data
  app.get('/api/testimonials', (_req, res) => {
    res.json({
      testimonials: [
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
        },
        {
          id: 4,
          quote: 'The mentorship I received at JSS Polytechnic was invaluable. The faculty members went above and beyond to ensure we understood the concepts and could apply them effectively.',
          name: 'Priya Desai',
          program: 'Civil Engineering',
          year: '2022',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
        }
      ]
    });
  });

  // Handle contact form submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, inquiry, message } = req.body;
    
    // In a real implementation, you would save this to a database
    // and potentially send an email notification
    
    // For now, we'll just return a success response
    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you shortly.'
    });
  });

  // Handle admission inquiries
  app.post('/api/admission-inquiry', (req, res) => {
    const { name, email, phone, program, message } = req.body;
    
    // In a real implementation, you would save this to a database
    // and potentially send an email notification
    
    res.json({
      success: true,
      message: 'Thank you for your interest. Our admissions team will contact you soon.'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

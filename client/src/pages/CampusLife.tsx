import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { newsItems, facilities } from '@/data/collegeData';
import { 
  Calendar, 
  Users, 
  Award, 
  Home,
  Utensils,
  Bus
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

export default function CampusLife() {
  const getFacilityIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'computer': <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>,
      'science': <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>,
      'library': <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>,
      'sports': <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    };
    
    return iconMap[iconName] || iconMap['computer'];
  };

  const facilitiesWithIcons = facilities.map(facility => ({
    ...facility,
    icon: getFacilityIcon(facility.iconName)
  }));

  const events = [
    {
      title: "Annual Technical Fest",
      date: "March 15-17, 2024",
      description: "A three-day technical festival featuring competitions, workshops, and exhibitions.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "Cultural Day",
      date: "February 20, 2024",
      description: "Celebrate the diversity and talents of our students through performances and exhibits.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      title: "Industry Expo",
      date: "April 10, 2024",
      description: "Connect with industry representatives and explore career opportunities.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker news={newsItems} />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Campus Life</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Experience a vibrant and enriching campus environment at JSS Polytechnic
          </p>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Campus Facilities</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              Our campus is equipped with modern facilities to provide a conducive learning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesWithIcons.map((facility, index) => (
              <div key={index} className="bg-neutral p-6 rounded-lg shadow-md text-center">
                {facility.icon}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">{facility.title}</h3>
                <p className="text-neutral-gray">{facility.description}</p>
              </div>
            ))}
            
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Hostel Facilities</h3>
              <p className="text-neutral-gray">Separate hostel facilities for boys and girls with comfortable accommodation and 24/7 security.</p>
            </div>
            
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Cafeteria</h3>
              <p className="text-neutral-gray">Spacious cafeteria serving nutritious meals and snacks at affordable prices.</p>
            </div>
            
            <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bus className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Transportation</h3>
              <p className="text-neutral-gray">College buses covering major routes in and around the city for convenient commuting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-primary mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Student Activities</h2>
            </div>
            <div className="w-24 h-1 bg-secondary mx-auto mt-2 mb-6"></div>
            <p className="max-w-2xl mx-auto text-neutral-gray">
              We offer a wide range of extracurricular activities to enrich your campus experience
            </p>
          </div>
          
          <Tabs defaultValue="clubs">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="clubs">Student Clubs</TabsTrigger>
              <TabsTrigger value="events">Events & Celebrations</TabsTrigger>
              <TabsTrigger value="sports">Sports & Recreation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clubs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary">Tech Club</h3>
                    </div>
                    <p className="text-neutral-gray mb-4">
                      A platform for tech enthusiasts to explore, learn, and create innovative projects and solutions.
                    </p>
                    <p className="text-sm text-primary-light">80+ active members</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary">Cultural Club</h3>
                    </div>
                    <p className="text-neutral-gray mb-4">
                      Celebrates diverse art forms including dance, music, drama, and other performing arts.
                    </p>
                    <p className="text-sm text-primary-light">60+ active members</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary">Literary Club</h3>
                    </div>
                    <p className="text-neutral-gray mb-4">
                      For students passionate about reading, writing, debates, and enhancing communication skills.
                    </p>
                    <p className="text-sm text-primary-light">45+ active members</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <Carousel>
                <CarouselContent>
                  {events.map((event, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <div className="flex items-center mb-2">
                            <Calendar className="text-primary mr-2" size={18} />
                            <span className="text-sm text-primary-light">{event.date}</span>
                          </div>
                          <h3 className="text-xl font-heading font-bold text-primary mb-2">{event.title}</h3>
                          <p className="text-neutral-gray">{event.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            
            <TabsContent value="sports">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Sports Facilities" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">Sports Facilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Indoor sports: Table Tennis, Chess, Carrom, Badminton</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Outdoor sports: Cricket, Football, Basketball, Volleyball</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Well-equipped gymnasium for fitness enthusiasts</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Professional coaches for various sports</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Sports Achievements" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">Sports Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium">State Level Cricket Champions</h4>
                        <p className="text-sm text-neutral-gray">2023 Inter-Polytechnic Tournament</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium">Runners-up in Basketball</h4>
                        <p className="text-sm text-neutral-gray">2022 District Level Sports Meet</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium">Individual Gold in Table Tennis</h4>
                        <p className="text-sm text-neutral-gray">2023 State Technical Festival</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

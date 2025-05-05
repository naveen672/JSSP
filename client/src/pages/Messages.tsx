import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { MessageSquare } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Messages() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "Messages", path: "/messages" }
        ]} 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Messages</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">Messages from leadership coming soon.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
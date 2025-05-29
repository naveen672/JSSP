import { Bell, Calendar, Trophy } from "lucide-react";

export default function NewsTicker() {
  return (
    <div className="bg-primary text-white py-3 overflow-hidden border-b border-primary-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 mr-6 flex-shrink-0">
            <Bell className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Latest News</span>
          </div>
          <div className="flex space-x-12 text-sm whitespace-nowrap animate-ticker">
            <span className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Admissions open for Academic Year 2024-25 - Apply now!</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Annual Sports Meet scheduled for March 15-17, 2024</span>
            </span>
            <span className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Congratulations to our 98% placement record this year!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

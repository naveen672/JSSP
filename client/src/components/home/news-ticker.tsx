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
              <span>Admissions open for 2023-24 academic year</span>
            </span>
            <span className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-accent flex-shrink-0" />
              <span>JSS Polytechnic wins Best Technical Institution Award</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Graduation ceremony scheduled for May 15th</span>
            </span>
            <span className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-accent flex-shrink-0" />
              <span>New Computer Science lab inaugurated by Education Minister</span>
            </span>
            <span className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-accent flex-shrink-0" />
              <span>100% placement record for the 5th consecutive year</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsTicker() {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="flex space-x-8 text-sm whitespace-nowrap animate-ticker">
            <span className="flex items-center space-x-2">
              <span>📢</span>
              <span>Admissions open for Academic Year 2024-25 - Apply now!</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>📅</span>
              <span>Annual Sports Meet scheduled for March 15-17, 2024</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🎓</span>
              <span>Congratulations to our 98% placement record this year!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

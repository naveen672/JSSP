import React, { useState } from 'react';

export default function StudentImage() {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    return (
      <div className="bg-gray-200 w-full h-[200px] flex items-center justify-center rounded-lg">
        <p className="text-gray-600 text-sm text-center p-4">Student Photo</p>
      </div>
    );
  }
  
  return (
    <img
      src="/student.png"
      alt="Trupti Ananth Jain"
      className="w-full h-auto object-cover"
      onError={() => setImageError(true)}
    />
  );
}
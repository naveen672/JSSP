import React, { useEffect, useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ImageLoader({ src, alt, className, width, height }: ImageLoaderProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    // Try different paths to find the image
    const paths = [
      src,                                     // Try original path
      `/images${src.startsWith('/') ? '' : '/'}${src.split('/').pop()}`,  // Try /images/filename.png
      `/public${src.startsWith('/') ? '' : '/'}${src}`,                   // Try /public/path
      `/client/public${src.startsWith('/') ? '' : '/'}${src}`             // Try /client/public/path
    ];
    
    // Only try alternative paths if we've had failed attempts
    const pathToTry = attempts < paths.length ? paths[attempts] : src;
    
    const img = new Image();
    img.onload = () => {
      setImageSrc(pathToTry);
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      // Try next path on error
      if (attempts < paths.length - 1) {
        setAttempts(prev => prev + 1);
      }
    };
    
    img.src = pathToTry;
  }, [src, attempts]);

  const styleProps: React.CSSProperties = {};
  if (width) styleProps.width = width;
  if (height) styleProps.height = height;

  return (
    <>
      {imageLoaded ? (
        <img 
          src={imageSrc} 
          alt={alt} 
          className={className} 
          style={styleProps}
        />
      ) : (
        <div 
          className={`flex items-center justify-center bg-gray-100 ${className}`}
          style={styleProps}
        >
          <span className="text-xs text-gray-500">{alt}</span>
        </div>
      )}
    </>
  );
}

export default function Images() {
  return null;
}
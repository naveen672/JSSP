export default function VideoTest() {
  const testVideoPath = "/attached_assets/WhatsApp%20Video%202025-06-06%20at%2010.33.10_5867aa06_1749575036616.mp4";
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Video Test Page</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Test Video 1 - Basic HTML5 Video</h2>
          <video
            className="w-full max-w-2xl"
            controls
            preload="metadata"
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src={testVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Direct Link Test</h2>
          <a 
            href={testVideoPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Click to open video directly in browser
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Video Information</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Video Path:</strong> {testVideoPath}</p>
            <p><strong>Full URL:</strong> {window.location.origin + testVideoPath}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
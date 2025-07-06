import { useState, useEffect } from 'react';
import Card from '../components/Card';
import CTA from '../components/CTA';
function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/videos/')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  return (
     <div>
    <div className="container mx-auto mt-5 p-6 pt-20 h-[70vh]">
      <h1 className="text-3xl font-bold text-primary">Videos by Dr. Samuel Owokoniran</h1>
      <p className="mt-4">Watch motivational talks and interviews from <em>Success Driven Life with Dr. Sam</em>.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {videos.map((video) => (
          <Card
            key={video.id}
            title={video.title}
            description={video.description || 'Watch this inspiring speech by Dr. Samuel Owokoniran.'}
            image={`https://img.youtube.com/vi/${video.youtube_id}/0.jpg`}
            actionText="Watch Now"
            onAction={() => window.open(`https://www.youtube.com/watch?v=${video.youtube_id}`, '_blank')}
          />
        ))}
      </div>
    </div>
    <CTA />
   </div>
  );
}

export default Videos;
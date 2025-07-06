import { useState, useEffect } from 'react';
import Button from './Button';

function HeroSection() {
 const images = [
  '/images/image8.jpg',
  '/images/image6.jpg',
  '/images/image4.jpg',
];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto  flex flex-col md:flex-row items-center">
        {/* Left Side - Image Slider with Callout */}
        <div className="w-full md:w-1/2 p-4 relative">
          <img src={images[currentImage]} alt="Hero" className="w-full h-96 object-cover rounded-lg" />
          <div className="absolute top-4 left-4 bg-white text-primary p-4 rounded-lg shadow-lg w-1/2">
            <h3 className="text-lg font-bold" style={{ color: '#006400' }}>Providing Global Solutions</h3>
            <p className="text-sm">Transformative solutions that go beyond expectation</p>
            <Button text="Learn More" onClick={() => window.location.href = '/about'} primary={false} />
          </div>
        </div>
        {/* Right Side - Text and Stats */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#FFC107' }}>
            Transforming Challenges Into Opportunities
          </h1>
          <p className="text-lg mb-6">
            Microbits Consultancy provides world-class training and consulting services to help organizations achieve transformational outcomes.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Button text="Explore Author" onClick={() => window.location.href = '/about'} />
            <Button text="Our Organization" onClick={() => window.location.href = '/about'} primary={false} outline={true} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="text-2xl font-bold">16+</p>
              <p className="text-sm">Books Published</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm">Lives Impacted</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm">Countries</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="text-2xl font-bold">12+</p>
              <p className="text-sm">Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
import Button from './Button';

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 text-center w-full">
      <h2 className="text-4xl font-bold mb-4">Master Financial Strategy Like a Pro</h2>
      <p className="text-xl mb-8">
        Unlock the secrets of financial success with our exclusive training programs designed
        to transform your approach to business finance.
      </p>
      
      <div className="flex justify-center gap-4 mb-10">
        <Button 
          text="Explore Training Programs" 
          className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3"
        />
        <Button 
          text="Speak to Our Experts" 
          className="bg-transparent border-2 border-white hover:bg-blue-700 px-6 py-3"
        />
      </div>
      
      <div className="flex justify-center gap-8 text-sm">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Proven Strategies
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Case Studies
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Practical Tools
        </span>
      </div>
    </div>
  );
}

export default CTA;
import Button from './Button';

const PromoSection = () => {
  return (
    <section className="bg-gray-100 mx-auto px-6 py-16 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Track Record</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With close to a decade of experience, we've worked with multinationals and blue-chip companies worldwide in conjunction with our parent company, Better Ways.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
          <i className="fas fa-graduation-cap text-4xl text-blue-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Certified Expertise</h3>
          <p className="text-gray-600">
            We are a Centre for Management Development Certified Training Firm with faculty members averaging 20+ years experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
          <i className="fas fa-globe text-4xl text-blue-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Global Standards</h3>
          <p className="text-gray-600">
            Our services align with international best practices in Accounting, Auditing, Tax, and Management Advisory.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
          <i className="fas fa-flask text-4xl text-blue-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Scientific Approach</h3>
          <p className="text-gray-600">
            Our delivery methods are carefully chosen to facilitate skill development and knowledge acquisition for maximum impact.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <Button 
          text="Learn More" 
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3"
        />
        <Button 
          text="Get Started" 
          className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3"
        />
      </div>
    </section>
  );
};

export default PromoSection;
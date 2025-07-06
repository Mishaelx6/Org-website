import Navbar from '../components/Navbar';
import PromoSection from '../components/Promosection';
import CTA from '../components/CTA';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="pt-16 flex flex-col flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">About Microbits Consultancy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A new world of performance and relationship, transforming challenges into opportunities.
          </p>
        </section>
         <section className="py-16 bg-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Microbits Consultancy</h2>
              <p className="text-lg text-gray-700">
                Microbits Consultancy Limited is a globally recognized firm with nearly a decade of experience, dedicated to transforming challenges into opportunities. Certified by the Centre for Management Development, we offer tailored training and consulting services across strategy, finance, taxation, digital marketing, business management, and compliance. Our mission is to treat every client request as a goldmine, delivering innovative solutions that exceed expectations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/images/image8.jpg" alt="Microbits Team" className="rounded-lg shadow-md w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-5 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-heart text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-600">A deep commitment to our business and clients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-hands-helping text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Respect</h3>
                <p className="text-gray-600">Valuing staff and clients with dignity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-shield-alt text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">Upholding the highest ethical standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-balance-scale text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Discipline</h3>
                <p className="text-gray-600">Adhering to professional ethics.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <i className="fas fa-hands text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Empathy</h3>
                <p className="text-gray-600">Caring for the needs of end users.</p>
              </div>
            </div>
            <p className="text-center mt-8 text-lg text-gray-700">
              Together, these values form our acronym <span className="font-bold text-primary">PRIDE</span>, reflecting the beauty of our stakeholders.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To deploy all our resources and energy in affirmation that we will treat every client request as a goldmine to generate transformational outcomes and sustainable new innovations in problem-solving.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the client’s first choice in problem-solving and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Track Record</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-certificate text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Certified Expertise</h3>
                <p className="text-gray-600">
                  A Centre for Management Development Certified Training Firm with faculty averaging 20+ years of experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-globe text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                <p className="text-gray-600">
                  Services aligned with international best practices in Accounting, Auditing, Tax, and Management Advisory.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-flask text-4xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Scientific Approach</h3>
                <p className="text-gray-600">
                  Delivery methods chosen to facilitate skill development and knowledge acquisition for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <img src="/images/image4.jpg" alt="Office Environment" className="rounded-lg shadow-md" />
              <img src="/images/image5.jpg" alt="Global Event" className="rounded-lg shadow-md" />
              <img src="/images/image6.jpg" alt="Team Building" className="rounded-lg shadow-md" />
              <img src="/images/image7.jpg" alt="Award Ceremony" className="rounded-lg shadow-md" />
              <img src="/images/image8.jpg" alt="Consulting Session" className="rounded-lg shadow-md" />
            </div>
             </div>
        </section>

        {/* Call to Action */}
        <PromoSection
          
        />
      </div>
     <CTA/>
    </div>
  );
}

export default About;
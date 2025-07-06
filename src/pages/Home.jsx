import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import CTA from '../components/CTA';
import Button from '../components/Button';
import PromoSection from '../components/PromoSection';

const MrSam="/images/image2.jpg"
const AbooutOrg="/images/image8.jpg"

function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col pt-16 flex flex-col">
      <HeroSection />
      <div className="bg-white py-12 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold p-4 text-primary mb-6 text-center relative">
            Meet Our Visionary Leader
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img
                  src={MrSam}
                  alt="Dr. Samuel Owokoniran"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-100 rounded-full opacity-50"
                  style={{ zIndex: -1 }}
                ></div>
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full md:w-2/3 text-gray-800">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  CEO & Founder
                </span>
                <h2 className="text-3xl font-bold mb-2">Dr. Samuel Owokoniran</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Bestselling Author | Keynote Speaker | Business Strategist
                </p>
                <p className="text-base leading-relaxed">
                  With nearly a decade of leadership at Microbits Consultancy, Dr. Owokoniran has established himself as a transformative figure in the consulting industry, helping organizations turn challenges into opportunities.
                </p>
                <p className="text-base leading-relaxed mt-2">
                  As a 16-time published author whose works have been translated into 12 languages, Dr. Owokoniran combines academic rigor with practical business wisdom. His books on mindful leadership, innovation, and cultural transformation have inspired professionals worldwide.
                </p>
                <p className="text-base leading-relaxed mt-2">
                  A dynamic public speaker, Dr. Owokoniran regularly shares his insights at international conferences, corporate retreats, and leadership workshops. His TED-style talks on “Transforming Challenges into Goldmines” have garnered over 50,000 views.
                </p>
                <p className="text-base leading-relaxed mt-2">
                  Under his leadership, Microbits Consultancy has grown into a globally recognized firm providing strategic solutions to both private and public institutions across 24 countries.
                </p>
                {/* Stats Row */}
                <div className="flex flex-wrap justify-between mt-6 gap-4">
                  <div className="bg-primary text-white p-2 rounded-lg text-center w-24">
                    <p className="text-lg font-bold">16+</p>
                    <p className="text-xs">Books Published</p>
                  </div>
                  <div className="bg-primary text-white p-2 rounded-lg text-center w-24">
                    <p className="text-lg font-bold">24</p>
                    <p className="text-xs">Countries Reached</p>
                  </div>
                  <div className="bg-primary text-white p-2 rounded-lg text-center w-24">
                    <p className="text-lg font-bold">50K+</p>
                    <p className="text-xs">Lives Impacted</p>
                  </div>
                  <div className="bg-primary text-white p-2 rounded-lg text-center w-24">
                    <p className="text-lg font-bold">12+</p>
                    <p className="text-xs">Years Experience</p>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-center md:justify-start mt-6 space-x-4">
                  <Button text="View Publications" onClick={() => window.location.href = '/books'} />
                  <Button text="Watch Talks" onClick={() => window.location.href = '/videos'} primary={false} outline={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-12 flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center relative">
            About Microbits Consultancy
            <span className="absolute bottom-0 left-1/2 w-1/4 h-1 bg-yellow transform -translate-x-1/2"></span>
          </h2>
          <p className="text-center text-lg text-gray-800 mb-6">
            Transforming challenges into opportunities with innovative solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Write-up Section */}
            <div className="w-full md:w-2/3 text-gray-800">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-base leading-relaxed">
                  Microbits Consultancy Limited is a globally recognized consulting firm, certified by the Centre for Management Development. We specialize in training and consulting across strategy, finance, taxation, digital marketing, business management, and compliance. Our mission is to treat every client request as a goldmine, generating transformational outcomes through innovative solutions. With nearly a decade of experience, we have worked with multinationals and public institutions, delivering results that exceed expectations.
                </p>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
              src={AbooutOrg}
                alt="About Microbits"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-primary">Innovation</h3>
              <p className="text-sm text-gray-600">Driving creative solutions.</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="text-lg font-semibold text-primary">Integrity</h3>
              <p className="text-sm text-gray-600">Upholding ethical standards.</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="text-lg font-semibold text-primary">Excellence</h3>
              <p className="text-sm text-gray-600">Delivering top-quality service.</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-md">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold text-primary">Impact</h3>
              <p className="text-sm text-gray-600">Creating meaningful change.</p>
            </div>
          </div>
          {/* Know More Button */}
          <div className="text-center mt-6">
            <Button text="Know More" onClick={() => window.location.href = '/about'} />
          </div>
        </div>
      </section>
            <PromoSection
        
      />
      <section className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold text-primary">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card
            title="Success – Driven Life"
            description="A transformative guide by Dr. Samuel Owokoniran."
            image="/images/image4.jpg"
            actionText="View Book"
            onAction={() => window.location.href = '/books'}
          />
          <Card
            title="Book 2"
            description="Explore more insights from Dr. Samuel Owokoniran."
            image="/images/image5.jpeg"
            actionText="View Book"
            onAction={() => window.location.href = '/books'}
          />


          <Card
            title="Book 3"
            description="Explore more insights from Dr. Samuel Owokoniran."
            image="/images/image5.jpeg"
            actionText="View Book"
            onAction={() => window.location.href = '/books'}
          />

        </div>
      </section>
      <CTA
        title="Join Our Journey"
        description="Discover innovative solutions and inspiring content from Microbits Consultancy."
        buttonText="Get Started"
        onButtonClick={() => window.location.href = '/contact'}
      />
    </div>
  );
}

export default Home;
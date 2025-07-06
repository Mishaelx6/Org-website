    
import CTA from '../components/CTA';

function Contact() {
  return (
   <div>
     <div className="container mx-auto mt-5 p-6 pt-20 h-[70vh]">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row h-[70vh] md:h-auto">
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
            <p className="mt-4 text-gray-700">Reach out to Microbits Consultancy Limited for inquiries and collaborations.</p>
            <p className="mt-2 text-gray-700">
              Email: <a href="mailto:drsamowokoniran@gmail.com" className="text-blue-600 hover:underline">drsamowokoniran@gmail.com</a>
            </p>
            <p className="text-gray-700">
              Phone: <a href="tel:+2347068123337" className="text-blue-600 hover:underline">+234-7068123337</a>
            </p>
            <p className="text-gray-700">Address: Block 51, FHA Phase 2, Karu Abuja, Nigeria</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-blue-600 hover:text-blue-800 text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-blue-600 hover:text-blue-800 text-2xl"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok text-blue-600 hover:text-blue-800 text-2xl"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter text-blue-600 hover:text-blue-800 text-2xl"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-blue-600 hover:text-blue-800 text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex items-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.614318123456!2d7.5898!3d9.0517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMDUiTiA3wrAzMCcwMyJF!5e0!3m2!1sen!2sng!4v1699182400000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
   
    <CTA />
    </div>
  );
}

export default Contact;
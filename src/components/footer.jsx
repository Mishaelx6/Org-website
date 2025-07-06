function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <p>© 2025 Microbits Consultancy Limited. All rights reserved.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <p className="flex items-center gap-2">
            <i className="fas fa-envelope text-blue-400"></i>
            Contact: <a href="mailto:drsamowokoniran@gmail.com" className="text-blue-400 hover:underline">drsamowokoniran@gmail.com</a>
          </p>
          <p className="flex items-center gap-2">
            <i className="fas fa-phone text-blue-400"></i>
            Phone: <a href="tel:+2347068123337" className="text-blue-400 hover:underline">+234-7068123337</a>
          </p>
          <p>Address: Block 51, FHA Phase 2, Karu Abuja</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
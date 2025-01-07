import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/802646d4-05e8-4dc2-bb6c-ccdf0e92c3ae.png" 
                alt="Reveles Clinical" 
                className="h-8"
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/patients" className="text-white hover:text-primary-light">Patients</Link>
            <Link to="/sponsors" className="text-white hover:text-primary-light">Sponsors</Link>
            <Link to="/partners" className="text-white hover:text-primary-light">Partners</Link>
            <Link to="/blog" className="text-white hover:text-primary-light">Blog</Link>
            <Link to="/about" className="text-white hover:text-primary-light">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <div className="bg-blue-600 w-full h-[50vh] text-white p-6 flex flex-col justify-center items-center">
      {/* Footer Main Section */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <div className="flex gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-800 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl hover:text-blue-800 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-2xl hover:text-blue-800 transition" />
          </a>
        </div>
      </div>

      {/* Footer Text Section */}
      <div className="text-center mb-4 text-xl font-bold">
        <p>This is the Ultimate Dynamic Weather App, for more Information contact us at farooquekk92@gmail.com.</p>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pikachu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

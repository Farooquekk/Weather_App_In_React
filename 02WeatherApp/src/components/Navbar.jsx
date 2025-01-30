import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      linksRef.current = linksRef.current.slice(0, 3);

      gsap.fromTo(
        linksRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <nav className="bg-blue-800 p-4 w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-full">
        <h1 className="text-xl font-bold text-white cursor-pointer">The Weather</h1>

        {/* Hamburger Menu */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-white cursor-pointer font-bold">
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="home" smooth={true} duration={500} offset={-70}>
              Home
            </Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About Us
            </Link>
          </li>
          <li className="hover:scale-110 transition-all duration-300">
            <Link to="search" smooth={true} duration={500} offset={-70}>
              Search
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul ref={menuRef} className="md:hidden flex flex-col items-center text-white font-bold p-4 mt-2 space-y-2 w-full bg-blue-900">
          {["Home", "About Us", "Search"].map((item, index) => (
            <li
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="hover:scale-110 transition-all duration-300"
            >
              <Link
                to={item.toLowerCase().replace(/\s+/g, "")} 
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

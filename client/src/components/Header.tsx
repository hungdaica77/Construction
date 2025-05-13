import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold font-roboto">
              <span className="text-[#f7a100]">XÂY DỰNG</span>{" "}
              <span className="text-[#004d99]">HOÀNG LONG</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
                Trang chủ
              </a>
            </Link>
            <a href="#about" className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
              Giới thiệu
            </a>
            <a href="#services" className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
              Dịch vụ
            </a>
            <a href="#projects" className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
              Dự án
            </a>
            <a href="#team" className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
              Đội ngũ
            </a>
            <a href="#contact" className="font-medium text-neutral-dark hover:text-[#004d99] transition duration-300">
              Liên hệ
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-dark hover:text-[#004d99] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/">
              <a onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]">
                Trang chủ
              </a>
            </Link>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]"
            >
              Giới thiệu
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]"
            >
              Dịch vụ
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]"
            >
              Dự án
            </a>
            <a 
              href="#team" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]"
            >
              Đội ngũ
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 font-medium text-neutral-dark hover:text-[#004d99]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

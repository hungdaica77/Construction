import { Facebook, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-roboto mb-6 text-white">CÔNG TY XÂY DỰNG HOÀNG LONG</h3>
            <p className="mb-4 text-white">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là đơn vị xây dựng uy tín hàng đầu tại Việt Nam.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="bg-white bg-opacity-20 hover:bg-[#f7a100] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white bg-opacity-20 hover:bg-[#f7a100] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white bg-opacity-20 hover:bg-[#f7a100] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white bg-opacity-20 hover:bg-[#f7a100] w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-roboto mb-6 text-white">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-white hover:text-[#f7a100] transition duration-300"
                >
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Dự án
                </a>
              </li>
              <li>
                <a href="#team" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-roboto mb-6 text-white">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Xây dựng dân dụng
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Xây dựng công nghiệp
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Thiết kế nội thất
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Tư vấn thiết kế
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Cho thuê thiết bị
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Công trình giao thông
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold font-roboto mb-6 text-white">Đăng Ký Nhận Tin</h3>
            <p className="mb-4 text-white">
              Đăng ký để nhận thông tin mới nhất về dịch vụ và dự án của chúng tôi.
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-neutral-dark" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[#f7a100] hover:bg-opacity-90 text-white px-4 rounded-r-md transition duration-300"
                  aria-label="Subscribe"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-sm text-white">
              Chúng tôi cam kết không gửi spam và bảo mật thông tin của bạn.
            </p>
          </div>
        </div>
        
        <hr className="border-white border-opacity-20 mb-8" />
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-white font-medium">
            &copy; {new Date().getFullYear()} Công Ty Xây Dựng Hoàng Long. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

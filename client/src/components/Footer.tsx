import { Link } from "wouter";
import { ChevronRight, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links - Left Column */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300 cursor-pointer">
                    <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                    Trang chủ
                  </span>
                </Link>
              </li>
              <li>
                <a href="#about" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Dự án
                </a>
              </li>
              <li>
                <a href="#team" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services - Middle Column */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Xây dựng dân dụng
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Xây dựng công nghiệp
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Thiết kế nội thất
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Tư vấn thiết kế
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Cho thuê thiết bị
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-gray-600 hover:text-[#f7a100] transition duration-300">
                  <ChevronRight size={16} className="inline-block mr-2 text-[#f7a100]" /> 
                  Công trình giao thông
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter - Right Column */}
          <div>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="px-4 py-2 rounded-l-md w-full border border-gray-300 focus:outline-none focus:border-[#f7a100]" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[#f7a100] hover:bg-opacity-90 text-white px-4 rounded-r-md transition duration-300"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-600">
              Chúng tôi cam kết không gửi spam và bảo mật thông tin của bạn.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-200 mb-6" />
        
        {/* Copyright */}
        <div className="text-center py-4 bg-[#222] rounded-md">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} <span className="text-[#f7a100] font-medium">Công Ty Xây Dựng Hoàng Long</span>. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

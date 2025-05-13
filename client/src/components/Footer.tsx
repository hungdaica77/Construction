import { Link } from "wouter";
import { Send, Home, Mail, Phone, Printer } from "lucide-react";
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-[#004d99] font-bold text-lg mb-4">CÔNG TY TNHH XÂY DỰNG VÀ VẬN TẢI</h3>
            <h4 className="text-[#f7a100] font-bold text-lg mb-6">MINH THÀNH</h4>
            
            <p className="mb-4 text-gray-700 text-sm">
              Mã số thuế: 12345678 do Sở Kế hoạch và Đầu tư Thành phố Hải Dương cấp ngày 01/01/2020
            </p>
            
            <div className="flex items-start mb-3">
              <Home className="text-[#004d99] mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-sm text-gray-700">
                Thị trấn Lai Cách, Huyện Cẩm Giàng, Thành phố Hải Dương.
              </p>
            </div>
            
            <div className="flex items-center mb-3">
              <Mail className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <a href="mailto:MinhThanhconstruction.vn.com" className="text-sm text-gray-700 hover:text-[#f7a100]">
                MinhThanhconstruction.vn.com
              </a>
            </div>
            
            <div className="flex items-center mb-3">
              <Phone className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <a href="tel:0913566199" className="text-sm text-gray-700 hover:text-[#f7a100]">
                0913566199
              </a>
            </div>
            
            <div className="flex items-center mb-3">
              <Printer className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <p className="text-sm text-gray-700">
                +84 24 9999 9999
              </p>
            </div>
          </div>
          
          {/* Help & Policy */}
          <div>
            <h3 className="text-[#004d99] font-bold text-lg mb-4">HƯỚNG DẪN MUA HÀNG</h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#f7a100] transition duration-300 text-sm">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#f7a100] transition duration-300 text-sm">
                  Khu vực giao hàng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#f7a100] transition duration-300 text-sm">
                  Phương thức thanh toán
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#f7a100] transition duration-300 text-sm">
                  Chính sách bảo mật thông tin
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Social */}
          <div>
            <h3 className="text-[#004d99] font-bold text-lg mb-4">ĐĂNG KÝ NHẬN TIN</h3>
            
            <p className="mb-2 text-gray-700 text-sm">Email của bạn</p>
            <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Nhập email của bạn" 
                  className="px-4 py-2 rounded-l-md w-full border border-gray-300 focus:outline-none focus:border-[#f7a100] text-sm" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-[#6366f1] hover:bg-opacity-90 text-white px-4 rounded-r-md transition duration-300"
                  aria-label="Subscribe"
                >
                  <span className="flex items-center">Gửi</span>
                </button>
              </div>
            </form>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              <a href="#" className="w-10 h-10 bg-[#1877f2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#ff0000] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTiktok size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#5865F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaDiscord size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1DA1F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTwitter size={20} />
              </a>
            </div>
            
            {/* Certificate */}
            <div className="mt-6">
              <img 
                src="https://cdn.dangkywebsitevoibct.vn/images/logoSaleNoti.png" 
                alt="Bộ Công Thương" 
                className="w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

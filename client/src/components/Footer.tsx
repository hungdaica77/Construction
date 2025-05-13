import { BookAudio, Home, Mail, Phone, Printer } from "lucide-react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import BCT_IMG from "../image/bct.jpg";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8" id="footer">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
          Liên Hệ Với Chúng Tôi
        </h2>
        <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg">
          Hãy liên hệ với chúng tôi để được tư vấn và báo giá miễn phí cho dự án
          của bạn.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-[#004d99] font-bold text-lg mb-4">
              CÔNG TY TNHH XÂY DỰNG VÀ VẬN TẢI
              <span className="text-[#f7a100] font-bold text-lg ml-1">
                MINH THANH
              </span>
            </h3>

            <p className="flex items-start mb-3 text-gray-700 text-sm">
              <BookAudio
                className="text-[#004d99] mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              MST: 12345678 do Sở Kế hoạch và Đầu tư Thành phố Hải Dương cấp
              ngày 01/01/2020
            </p>

            <div className="flex items-start mb-3">
              <Home className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <p className="text-sm text-gray-700">
                Thị trấn Lai Cách, Huyện Cẩm Giàng, Hải Dương.
              </p>
            </div>

            <div className="flex items-center mb-3">
              <Mail className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <a
                href="mailto:MinhThanhconstruction.vn.com"
                className="text-sm text-gray-700 hover:text-[#f7a100]"
              >
                MinhThanhConstruction.com
              </a>
            </div>

            <div className="flex items-center mb-3">
              <Phone className="text-[#004d99] mr-3 flex-shrink-0" size={20} />
              <a
                href="tel:0913566199"
                className="text-sm text-gray-700 hover:text-[#f7a100]"
              >
                0913566199
              </a>
            </div>

            <div className="flex items-center mb-3">
              <Printer
                className="text-[#004d99] mr-3 flex-shrink-0"
                size={20}
              />
              <p className="text-sm text-gray-700">+84 24 9999 9999</p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="w-full h-64 bg-gray-200 rounded">
              <div className="w-full h-full flex items-center justify-center bg-gray-100 border border-gray-300">
                <iframe
                  src="https://www.google.com/maps?q=20.940672,106.271153&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-[#004d99] font-bold text-lg mb-4">
              ĐĂNG KÝ NHẬN TIN
            </h3>

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
                  className="bg-[#004d99] hover:bg-opacity-90 text-white px-4 rounded-r-md transition duration-300"
                  aria-label="Subscribe"
                >
                  <span className="flex items-center">Gửi</span>
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              <div className="w-10 h-10 bg-[#1877f2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaFacebook size={20} />
              </div>
              <div className="w-10 h-10 bg-[#ff0000] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaYoutube size={20} />
              </div>
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTiktok size={18} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-[#5865F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaDiscord size={20} />
              </div>
              <div className="w-10 h-10 bg-[#1DA1F2] text-white flex items-center justify-center rounded-md hover:opacity-90 transition-opacity">
                <FaTwitter size={20} />
              </div>
            </div>

            {/* Certificate */}
            <div className="mt-6">
              <img src={BCT_IMG} alt="Bộ Công Thương" className="h-20" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

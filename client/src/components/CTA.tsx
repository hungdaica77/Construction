import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-[#004d99]">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold font-roboto mb-6">
          Bạn Có Dự Án Cần Triển Khai?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Hãy để chúng tôi giúp bạn hiện thực hóa ý tưởng với chất lượng tốt
          nhất và chi phí hợp lý nhất.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#footer"
            className="bg-[#f7a100] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Liên Hệ Ngay
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-[#004d99] text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Dịch Vụ Của Chúng Tôi
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSlider } from "@/lib/hooks/useSlider";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Chất Lượng Xây Dựng Đẳng Cấp",
    description: "Hơn 15 năm kinh nghiệm trong lĩnh vực xây dựng công trình dân dụng và công nghiệp",
    buttons: [
      { text: "Liên Hệ Ngay", link: "#footer", variant: "primary" },
      { text: "Dự Án Của Chúng Tôi", link: "#projects", variant: "outline" }
    ]
  },
  {
    id: 2,
    image: "https://pixabay.com/get/gf3c11c6276dd5cd7bca73d276e0819a68743a8cb3fccd74a82a5ccf4c7d2f0fac245fe6f04914e8b2905bbf27557b78a077554149d04a4ced0061c8fc86b9b15_1280.jpg",
    title: "Thiết Kế Hiện Đại, Bền Vững",
    description: "Chúng tôi cam kết mang đến những công trình chất lượng cao với tiêu chuẩn quốc tế",
    buttons: [
      { text: "Dịch Vụ", link: "#services", variant: "primary" },
      { text: "Tìm Hiểu Thêm", link: "#about", variant: "outline" }
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Đội Ngũ Chuyên Nghiệp",
    description: "Với đội ngũ kỹ sư và công nhân lành nghề, chúng tôi sẵn sàng đáp ứng mọi yêu cầu của khách hàng",
    buttons: [
      { text: "Đội Ngũ", link: "#team", variant: "primary" },
      { text: "Tư Vấn Miễn Phí", link: "#footer", variant: "outline" }
    ]
  },
];

const Hero = () => {
  const { currentIndex, goToSlide, goToNextSlide, goToPrevSlide } = useSlider(slides.length, 5000, true);

  return (
    <section className="relative">
      <div className="hero-slider overflow-hidden h-[500px] md:h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  {slide.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.link}
                      className={`
                        ${button.variant === "primary" 
                          ? "bg-[#f7a100] hover:bg-opacity-90 text-white" 
                          : "bg-transparent border-2 border-white hover:bg-white hover:text-[#004d99] text-white"}
                        font-bold py-3 px-6 rounded-md transition duration-300
                      `}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Large navigation arrows on sides */}
        <button 
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Slider navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white focus:outline-none ${
              currentIndex === index ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

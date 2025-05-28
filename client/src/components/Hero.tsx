import { useSlider } from "@/lib/hooks/useSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../image/construction/73caf6244690f3ceaa81.jpg";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Chất Lượng Xây Dựng Đẳng Cấp",
    description:
      "Cung ứng nhanh chóng, đúng tiến độ, giúp công trình không bị gián đoạn.",
    buttons: [
      { text: "Liên Hệ Ngay", link: "#footer", variant: "primary" },
      { text: "Dự Án Của Chúng Tôi", link: "#projects", variant: "outline" },
    ],
  },
  {
    id: 2,
    image: image1,
    title: "Giá Cả Cạnh Tranh – Minh Bạch",
    description:
      "Giá cả cạnh tranh – minh bạch, tối ưu ngân sách cho nhà thầu và chủ đầu tư.",
    buttons: [
      { text: "Dịch Vụ", link: "#services", variant: "primary" },
      { text: "Tìm Hiểu Thêm", link: "#about", variant: "outline" },
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Dịch Vụ Trọn Gói",
    description:
      "Dịch vụ trọn gói, từ cung cấp vật liệu đến cho thuê thiết bị và vận chuyển tận nơi.",
    buttons: [
      { text: "Đội Ngũ", link: "#team", variant: "primary" },
      { text: "Tư Vấn Miễn Phí", link: "#footer", variant: "outline" },
    ],
  },
];

const Hero = () => {
  const { currentIndex, goToSlide, goToNextSlide, goToPrevSlide } = useSlider(
    slides.length,
    5000,
    true
  );

  return (
    <section className="relative">
      <div className="hero-slider overflow-hidden h-[500px] md:h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={
              slide.image.startsWith("http")
                ? { backgroundImage: `url('${slide.image}')` }
                : undefined
            }
          >
            {/* If image is static, render <img> for better optimization */}
            {!slide.image.startsWith("http") && (
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-fit z-0"
                draggable={false}
              />
            )}
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
                  {slide.title}
                </h1>
                <h1 className="text-lg md:text-xl mb-8">{slide.description}</h1>
                <div className="flex flex-wrap gap-4">
                  {slide.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.link}
                      className={`
                  ${
                    button.variant === "primary"
                      ? "bg-[#f7a100] hover:bg-opacity-90 text-white"
                      : "bg-transparent border-2 border-white hover:bg-white hover:text-[#004d99] text-white"
                  }
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

import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@shared/schema";
import { testimonialData } from "@/lib/data";
import { useSlider } from "@/lib/hooks/useSlider";

const Testimonials = () => {
  // Fetch testimonials data from API
  const { data, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
  
  // Use API data or fallback to static data
  const testimonials = data || testimonialData;
  
  // Calculate how many slides to show based on screen size
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop - 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet - 2 slides
      } else {
        setSlidesToShow(1); // Mobile - 1 slide
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Setup slider functionality
  const { currentIndex, goToSlide, goToNextSlide, goToPrevSlide } = useSlider(
    Math.max(0, testimonials.length - slidesToShow + 1),
    5000
  );
  
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Sự hài lòng của khách hàng luôn là thước đo cho thành công của chúng tôi.
          </p>
        </div>
        
        <div className="testimonial-slider relative">
          <div className="overflow-hidden">
            <div 
              className="testimonial-slides flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-slide flex-shrink-0 px-4`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                    <div className="text-[#f7a100] mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          fill={i < testimonial.rating ? "#f7a100" : "none"} 
                          className={i < testimonial.rating ? "text-[#f7a100]" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="italic mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider controls */}
          <button 
            onClick={goToPrevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white text-[#004d99] p-3 rounded-full shadow-md hover:bg-[#004d99] hover:text-white transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white text-[#004d99] p-3 rounded-full shadow-md hover:bg-[#004d99] hover:text-white transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(Math.max(0, testimonials.length - slidesToShow + 1))].map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full bg-[#004d99] ${
                  currentIndex === i ? "bg-opacity-100" : "bg-opacity-40"
                } focus:outline-none`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useQuery } from "@tanstack/react-query";
import { CheckIcon } from "lucide-react";
import { Service } from "@shared/schema";
import { serviceData } from "@/lib/data";

const Services = () => {
  // Fetch services data from API
  const { data, isLoading, error } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  // Use the API data or fallback to static data
  const services = data || serviceData;

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Chúng tôi cung cấp đa dạng các dịch vụ xây dựng chuyên nghiệp với chất lượng cao và giá cả hợp lý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-roboto text-[#004d99] mb-3">
                  {service.title}
                </h3>
                <p className="mb-4">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {Array.isArray(service.features) && service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-[#f7a100] mr-2">
                        <CheckIcon size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="inline-block font-bold text-[#004d99] hover:text-[#f7a100] transition"
                >
                  Tìm hiểu thêm <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

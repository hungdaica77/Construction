import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Medal, Users, Clock, Handshake } from "lucide-react";
import type { CompanyStats } from "@shared/schema";

const About = () => {
  // Fetch company statistics
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery<CompanyStats>({
    queryKey: ["/api/company-stats"],
  });

  // Default stats if API fails
  const defaultStats = {
    experienceYears: 15,
    completedProjects: 200,
    professionalEngineers: 50,
    satisfiedClients: 180,
  };

  // Use the fetched data or default values if API fails
  const displayStats = stats || defaultStats;

  // Features list
  const features = [
    {
      icon: <Medal className="text-3xl" />,
      title: "Chất Lượng Cao",
      description: "Đảm bảo tiêu chuẩn cao nhất cho mọi công trình",
    },
    {
      icon: <Users className="text-3xl" />,
      title: "Đội Ngũ Chuyên Nghiệp",
      description: "Kỹ sư và công nhân giàu kinh nghiệm",
    },
    {
      icon: <Clock className="text-3xl" />,
      title: "Đúng Tiến Độ",
      description: "Cam kết hoàn thành đúng thời hạn đã cam kết",
    },
    {
      icon: <Handshake className="text-3xl" />,
      title: "Uy Tín Hàng Đầu",
      description: "Được khách hàng tin tưởng và đánh giá cao",
    },
  ];

  return (
    <section id="about" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Giới Thiệu Về Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Công ty xây dựng và vận tải Minh Thanh là đơn vị uy tín hàng đầu
            trong lĩnh vực xây dựng với hơn 20 năm kinh nghiệm trong ngành.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Công trình xây dựng hiện đại"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-roboto text-[#004d99] mb-4">
              Tầm Nhìn & Sứ Mệnh
            </h3>
            <p className="mb-3">
              Minh Thanh tự hào là đối tác tin cậy của nhiều doanh nghiệp, nhà
              thầu và chủ đầu tư trên khắp cả nước. Với uy tín được xây dựng qua
              nhiều năm hoạt động, chúng tôi đã và đang đồng hành cùng khách
              hàng trong hàng trăm dự án xây dựng, giao thông, dân dụng và bất
              động sản quy mô lớn nhỏ.
            </p>

            <p className="mb-6">
              Nhờ mối quan hệ hợp tác bền vững với các nhà cung cấp vật liệu,
              đơn vị vận tải và các bên thi công uy tín, Minh Thanh đảm bảo
              <b className="ml-1">
                nguồn lực luôn ổn định, tiến độ luôn đúng hẹn
              </b>{" "}
              và chất lượng công trình được đặt lên hàng đầu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 text-[#f7a100]">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#footer"
              className="inline-block bg-[#004d99] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Liên Hệ Ngay
            </a>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#004d99] mb-2">
              {displayStats.experienceYears}+
            </div>
            <div className="font-medium">Năm Kinh Nghiệm</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#004d99] mb-2">
              {displayStats.completedProjects}+
            </div>
            <div className="font-medium">Dự Án Hoàn Thành</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#004d99] mb-2">
              {displayStats.professionalEngineers}+
            </div>
            <div className="font-medium">Kỹ Sư Chuyên Nghiệp</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#004d99] mb-2">
              {displayStats.satisfiedClients}+
            </div>
            <div className="font-medium">Khách Hàng Hài Lòng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

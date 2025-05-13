import { Project, Service, TeamMember, Testimonial } from "@shared/schema";

// Static project data for fallback
export const projectData: Project[] = [
  {
    id: 1,
    title: "Khu Dân Cư Green Park",
    category: "residential",
    location: "Quận 7, TP. Hồ Chí Minh",
    description: "Khu dân cư cao cấp với 200 căn biệt thự và nhà phố, được thiết kế hiện đại, tiện nghi.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2022",
  },
  {
    id: 2,
    title: "Trung Tâm Thương Mại Star City",
    category: "commercial",
    location: "Quận 1, TP. Hồ Chí Minh",
    description: "Trung tâm thương mại hiện đại với tổng diện tích 50.000m², gồm khu mua sắm, ẩm thực và giải trí.",
    imageUrl: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2023",
  },
  {
    id: 3,
    title: "Nhà Máy Sản Xuất Tech Solutions",
    category: "industrial",
    location: "KCN Tân Bình, TP. Hồ Chí Minh",
    description: "Nhà máy sản xuất linh kiện điện tử với diện tích 30.000m², được trang bị hiện đại theo tiêu chuẩn quốc tế.",
    imageUrl: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2021",
  },
  {
    id: 4,
    title: "Dự Án Đường Cao Tốc",
    category: "infrastructure",
    location: "TP. Hồ Chí Minh - Long Thành",
    description: "Dự án đường cao tốc dài 25km kết nối TP. Hồ Chí Minh với Long Thành, gồm 3 nút giao và 2 cầu vượt.",
    imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2022",
  },
  {
    id: 5,
    title: "Khách Sạn Luxury Palace",
    category: "commercial",
    location: "Nha Trang, Khánh Hòa",
    description: "Khách sạn 5 sao với 300 phòng, hồ bơi, nhà hàng và các tiện ích cao cấp khác, view nhìn ra biển.",
    imageUrl: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2023",
  },
  {
    id: 6,
    title: "Khu Căn Hộ Cao Cấp Riverside",
    category: "residential",
    location: "Quận 2, TP. Hồ Chí Minh",
    description: "Khu căn hộ cao cấp gồm 5 tòa tháp với 1.000 căn hộ, khu vườn, hồ bơi và các tiện ích hiện đại.",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    completionYear: "2022",
  },
];

// Static service data for fallback
export const serviceData: Service[] = [
  {
    id: 1,
    title: "Xây Dựng Dân Dụng",
    description: "Thiết kế và thi công nhà ở, biệt thự, chung cư, văn phòng và các công trình dân dụng khác với chất lượng cao.",
    imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Nhà ở, biệt thự, chung cư",
      "Văn phòng, trung tâm thương mại",
      "Khách sạn, resort, nhà hàng"
    ]
  },
  {
    id: 2,
    title: "Xây Dựng Công Nghiệp",
    description: "Thiết kế và thi công nhà xưởng, nhà máy, kho bãi và các công trình công nghiệp với tiêu chuẩn kỹ thuật cao.",
    imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Nhà xưởng, nhà máy sản xuất",
      "Kho bãi, trung tâm logistics",
      "Hệ thống xử lý nước thải"
    ]
  },
  {
    id: 3,
    title: "Thiết Kế Nội Thất",
    description: "Thiết kế và thi công nội thất cho nhà ở, văn phòng, khách sạn với phong cách hiện đại, sang trọng.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Thiết kế nội thất nhà ở, căn hộ",
      "Thi công nội thất văn phòng",
      "Trang trí nội thất thương mại"
    ]
  },
  {
    id: 4,
    title: "Tư Vấn Thiết Kế",
    description: "Dịch vụ tư vấn thiết kế kiến trúc, kết cấu và các hệ thống kỹ thuật cho công trình xây dựng.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Thiết kế kiến trúc",
      "Thiết kế kết cấu",
      "Thiết kế hệ thống M&E"
    ]
  },
  {
    id: 5,
    title: "Cho Thuê Thiết Bị",
    description: "Dịch vụ cho thuê máy móc, thiết bị xây dựng hiện đại đáp ứng mọi nhu cầu của công trình.",
    imageUrl: "https://pixabay.com/get/gb76098893afb83cdb055b3c00e8b20e1b3ccd79d96ffbdac7868838e93dc630d916ca963865567ec1af230feee63bcb27c0b9cad74862a3c802ebaa480f8758c_1280.jpg",
    features: [
      "Máy xúc, máy đào",
      "Xe tải, xe ben, xe bơm bê tông",
      "Cần cẩu, xe nâng"
    ]
  },
  {
    id: 6,
    title: "Công Trình Giao Thông",
    description: "Thi công các công trình giao thông như đường, cầu, hầm với chất lượng cao và đúng tiến độ.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Thi công đường bộ",
      "Xây dựng cầu, cống",
      "Hệ thống thoát nước"
    ]
  }
];

// Static team member data for fallback
export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Nguyễn Văn Anh",
    position: "Giám Đốc",
    description: "Hơn 20 năm kinh nghiệm trong lĩnh vực xây dựng, quản lý dự án và phát triển kinh doanh.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Trần Thị Minh",
    position: "Giám Đốc Kỹ Thuật",
    description: "Kỹ sư xây dựng với hơn 15 năm kinh nghiệm, chuyên gia trong lĩnh vực thiết kế và thi công công trình.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Lê Quang Hùng",
    position: "Giám Đốc Dự Án",
    description: "Chuyên gia quản lý dự án với hơn 12 năm kinh nghiệm, đã điều hành nhiều dự án lớn trong và ngoài nước.",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  },
  {
    id: 4,
    name: "Phạm Thị Hương",
    position: "Giám Đốc Tài Chính",
    description: "Chuyên gia tài chính với hơn 10 năm kinh nghiệm, quản lý hiệu quả nguồn vốn cho các dự án lớn.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  }
];

// Static testimonial data for fallback
export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    position: "Giám đốc Công ty ABC",
    content: "Chúng tôi rất hài lòng về chất lượng công trình và tiến độ thi công của Công ty Xây dựng Minh Thanh. Đội ngũ kỹ sư chuyên nghiệp và tận tâm, luôn lắng nghe và đáp ứng mọi yêu cầu của chúng tôi.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Trần Thị Hoa",
    position: "Chủ đầu tư Dự án XYZ",
    content: "Tôi đã hợp tác với nhiều công ty xây dựng, nhưng Minh Thanh là đơn vị chuyên nghiệp nhất. Dự án của tôi được hoàn thành đúng tiến độ với chất lượng vượt trội và chi phí hợp lý.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    position: "Giám đốc Công ty XNK",
    content: "Đội ngũ thiết kế của Minh Thanh đã hiểu rõ nhu cầu và mang đến giải pháp tuyệt vời cho dự án của chúng tôi. Tôi đặc biệt hài lòng với sự tận tâm và khả năng giải quyết vấn đề của họ.",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 4,
    name: "Phạm Thị Lan",
    position: "Khách hàng cá nhân",
    content: "Tôi vô cùng hài lòng với kết quả công trình nhà ở do Minh Thanh thi công. Từ khâu tư vấn, thiết kế đến thi công đều chuyên nghiệp, tỉ mỉ và đảm bảo chất lượng.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

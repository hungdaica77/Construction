import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin } from "lucide-react";
import { Project } from "@shared/schema";
import { projectData } from "@/lib/data";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Fetch projects data from API
  const { data, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Use API data or fallback to static data
  const projects = data || projectData;

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Những dự án nổi bật mà chúng tôi đã thực hiện trong thời gian qua.
          </p>
        </div>

        {/* Project filter */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            className={`m-2 py-2 px-4 rounded-md font-medium transition ${
              activeFilter === "all"
                ? "bg-[#004d99] text-white"
                : "bg-white text-neutral-dark hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            Tất Cả
          </button>
          <button
            className={`m-2 py-2 px-4 rounded-md font-medium transition ${
              activeFilter === "residential"
                ? "bg-[#004d99] text-white"
                : "bg-white text-neutral-dark hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter("residential")}
          >
            Nhà Ở
          </button>
          <button
            className={`m-2 py-2 px-4 rounded-md font-medium transition ${
              activeFilter === "commercial"
                ? "bg-[#004d99] text-white"
                : "bg-white text-neutral-dark hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter("commercial")}
          >
            Thương Mại
          </button>
          <button
            className={`m-2 py-2 px-4 rounded-md font-medium transition ${
              activeFilter === "industrial"
                ? "bg-[#004d99] text-white"
                : "bg-white text-neutral-dark hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter("industrial")}
          >
            Công Nghiệp
          </button>
          <button
            className={`m-2 py-2 px-4 rounded-md font-medium transition ${
              activeFilter === "infrastructure"
                ? "bg-[#004d99] text-white"
                : "bg-white text-neutral-dark hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter("infrastructure")}
          >
            Hạ Tầng
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <a
                    href={`#project-${project.id}`}
                    className="bg-[#f7a100] text-white py-2 px-4 rounded-md font-bold hover:bg-opacity-90 transition"
                  >
                    Xem Chi Tiết
                  </a>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-roboto text-[#004d99] mb-2">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600">
                  <MapPin size={16} className="inline text-[#f7a100] mr-2" />
                  {project.location}
                </p>
                <p className="mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Hoàn thành: {project.completionYear}
                  </span>
                  <a
                    href={`#project-${project.id}`}
                    className="text-[#004d99] hover:text-[#f7a100] font-bold text-sm"
                  >
                    Chi Tiết <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <a
            href="#footer"
            className="inline-block bg-[#004d99] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Xem Thêm Dự Án
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;

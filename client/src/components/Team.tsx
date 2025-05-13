import { useQuery } from "@tanstack/react-query";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { TeamMember } from "@shared/schema";
import { teamData } from "@/lib/data";

const Team = () => {
  // Fetch team members data from API
  const { data, isLoading, error } = useQuery<TeamMember[]>({
    queryKey: ["/api/team-members"],
  });

  // Use API data or fallback to static data
  const teamMembers = data || teamData;

  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#004d99] mb-4">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-[#f7a100] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Đội ngũ chuyên gia giàu kinh nghiệm, luôn sẵn sàng mang đến những giải pháp tối ưu cho khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-roboto text-[#004d99] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#f7a100] font-medium mb-3">{member.position}</p>
                <p className="mb-4 text-sm">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  {member.socialLinks && Array.isArray(member.socialLinks) && member.socialLinks.map((social, index) => {
                    // Render appropriate icon based on social network
                    let icon;
                    if (social.platform === 'facebook') {
                      icon = <Facebook size={18} />;
                    } else if (social.platform === 'linkedin') {
                      icon = <Linkedin size={18} />;
                    } else if (social.platform === 'twitter') {
                      icon = <Twitter size={18} />;
                    }

                    return (
                      <a 
                        key={index} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-dark hover:text-[#004d99] transition"
                      >
                        {icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

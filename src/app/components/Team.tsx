import Title from "./common/Title";
import Image from "next/image";

export function TeamMember(
  image: string,
  name: string,
  position: string,
  description: string
) {
  return (
    <div
      className="flex h-[340px] border border-dark w-full rounded-[45px] dark-shadow p-[35px] flex-col"
      id="about-us"
      data-aos="fade-up"
    >
      <div className="flex h-[102px] items-end">
        <Image
          src={`/images/${image}`}
          width={105}
          height={102}
          alt="avatar"
        ></Image>
        <div className="flex flex-col ml-[20px]">
          <p className="text-[20px] font-medium">{name}</p>
          <p>{position}</p>
        </div>
      </div>
      <div className="flex mt-7 mb-7 h-[1px] w-full bg-dark"></div>
      <p>{description}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section className="flex flex-col mt-[140px]">
      <div className="flex" data-aos="fade-down">
        <Title>Team</Title>
        <p className="max-w-[580px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="flex flex-col w-full gap-10">
        <div className="flex gap-10">
          {TeamMember(
            "john.svg",
            "John Smith",
            "CEO and Founder",
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          )}
          {TeamMember(
            "jane.svg",
            "Jane Doe",
            "Director of Operations",
            "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          )}
          {TeamMember(
            "michael.svg",
            "Michael Brown",
            "Senior SEO Specialist",
            "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          )}
        </div>
        <div className="flex gap-10">
          {TeamMember(
            "emily.svg",
            "Emily Johnson",
            "PPC Manager",
            "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          )}
          {TeamMember(
            "brian.svg",
            "Brian Williams",
            "Social Media Specialist",
            "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          )}
          {TeamMember(
            "sarah.svg",
            "Sarah Kim",
            "Content Creator",
            "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
          )}
        </div>
      </div>
    </section>
  );
}

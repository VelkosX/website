import Image from "next/image";

const teamMembers = [
  {
    name: "Luka Velimirović",
    role: "Project Lead & Engineer",
    bio: "Leading HotBot's technical vision across AI, backend, and mobile. Owns LLM fine-tuning on Vertex AI, the Ktor backend infrastructure, and contributes 10 years of Android expertise to the client app.",
    expertise: ["Vertex AI Fine-tuning", "Ktor Backend", "Android", "Kotlin Multiplatform"],
    image: "/images/luka.png",
  },
  {
    name: "Nikola Velimirović",
    role: "Senior Android Developer",
    bio: "An Android and Kotlin veteran with 10+ years of experience, delivering high-quality apps for tech giants like Reddit and Goldman Sachs. Leading HotBot's Android development with expertise in Jetpack Compose, reactive programming, and clean architecture.",
    expertise: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    image: "/images/nikola.png",
  },
  {
    name: "Strahinja Mihajlović",
    role: "Mobile & AI Integration Developer",
    bio: "A mobile veteran specializing in Swift/SwiftUI and AI integration. Bringing deep LLM implementation experience to HotBot, ensuring seamless AI features across our cross-platform codebase.",
    expertise: ["SwiftUI", "LLM Integration", "Cross-Platform", "Clean Architecture"],
    image: "/images/strahinja.png",
  },
];

export default function TeamAccordion() {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="card group p-12"
          >
            <div className="flex flex-col items-center text-center mb-10">
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-primary-pink/20 to-accent-teal/20 mb-8 ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-serif">
                {member.name}
              </h3>
              <p className="text-lg text-primary-pink font-medium">{member.role}</p>
            </div>

            <p className="text-neutral-600 text-lg mb-10 leading-relaxed text-center">
              {member.bio}
            </p>

            <div>
              <h4 className="text-sm font-bold text-neutral-400 mb-4 uppercase tracking-wider text-center">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-primary-pink/10 hover:text-primary-pink transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

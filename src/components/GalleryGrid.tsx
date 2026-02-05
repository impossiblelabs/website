import type { Project } from "@/data/projects";

interface GalleryGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function GalleryGrid({ projects, onProjectClick }: GalleryGridProps) {
  return (
    <main className="flex flex-wrap pb-16 md:pb-20">
      {projects.map((project, index) => (
        <article
          key={index}
          className="gallery-item relative overflow-hidden cursor-pointer group"
          style={{
            animationDelay: `${0.65 + index * 0.15}s`,
          }}
          onClick={() => onProjectClick(project)}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#34a58e]/0 group-hover:bg-[#34a58e]/20 transition-colors duration-300" />

          {/* Blurred backdrop - full width at bottom */}
          <div className="absolute bottom-0 left-0 right-0 sm:h-25 h-20 backdrop-blur-sm bg-black/10" />

          {/* Title and Description */}
          <div className="absolute bottom-4 left-5 md:bottom-3 md:left-7 z-10">
            <h2 className="font-brand text-white text-xs md:text-sm uppercase tracking-widest">
              {project.title}
            </h2>
            <p className="font-body text-white/70 text-xs md:text-sm mt-1">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </main>
  );
}

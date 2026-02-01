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
          key={project.id}
          className="gallery-item relative overflow-hidden cursor-pointer group"
          style={{
            animationDelay: `${0.65 + index * 0.15}s`,
          }}
          onClick={() => onProjectClick(project)}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#34a58e]/0 group-hover:bg-[#34a58e]/20 transition-colors duration-300" />

          {/* Title */}
          <h2 className="absolute bottom-4 left-5 md:bottom-6 md:left-7 font-brand text-white text-xs md:text-sm uppercase tracking-widest z-10">
            {project.title}
          </h2>
        </article>
      ))}
    </main>
  );
}

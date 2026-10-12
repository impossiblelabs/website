import type { Project } from "@/data/projects";

interface GalleryGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  /** Larger tiles that show the whole image on its brand background */
  featured?: boolean;
  /** Offset for the staggered fade-in, so sections animate in sequence */
  delayOffset?: number;
}

export function GalleryGrid({
  projects,
  onProjectClick,
  featured = false,
  delayOffset = 0,
}: GalleryGridProps) {
  return (
    <div className="flex flex-wrap">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className={`${featured ? "gallery-item-featured" : "gallery-item"} relative overflow-hidden cursor-pointer group`}
          style={{
            animationDelay: `${0.65 + (delayOffset + index) * 0.15}s`,
            backgroundColor: project.background,
          }}
          onClick={() => onProjectClick(project)}
        >
          {/* Background image */}
          <div
            className={`absolute bg-center bg-no-repeat transition-transform duration-500 ${
              featured
                ? "top-6 left-6 right-6 bottom-38 md:bottom-42 bg-contain group-hover:scale-105"
                : "inset-0 bg-cover group-hover:scale-110"
            }`}
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Gradient overlay */}
          {!featured && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#34a58e]/0 group-hover:bg-[#34a58e]/15 transition-colors duration-300" />

          {/* Blurred backdrop - full width at bottom */}
          <div
            className={`absolute bottom-0 left-0 right-0 ${
              featured
                ? "h-32 md:h-36 bg-[#1f2224]"
                : "sm:h-25 h-20 backdrop-blur-sm bg-black/10"
            }`}
          />

          {/* Title and Description */}
          <div className="absolute bottom-4 left-5 right-5 md:bottom-3 md:left-7 md:right-7 z-10">
            {featured && project.tags && (
              <ul className="flex flex-wrap gap-1.5 mb-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-body text-[10px] md:text-xs text-white/80 border border-white/20 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <h2 className="font-brand text-white text-xs md:text-sm uppercase tracking-widest">
              {project.title}
            </h2>
            <p className="font-body text-white/70 text-xs md:text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ProjectModal } from "@/components/ProjectModal";
import { AboutPanel } from "@/components/AboutPanel";
import { products, projects, type Project } from "@/data/projects";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsProjectModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#242629]">
      <main className="pb-16 md:pb-20">
        <SectionLabel title="Products" subtitle="Shipped and in people's hands" />
        <GalleryGrid
          projects={products}
          onProjectClick={handleProjectClick}
          featured
        />

        <SectionLabel title="Experiments" subtitle="Hardware hacks and prototypes" />
        <GalleryGrid
          projects={projects}
          onProjectClick={handleProjectClick}
          delayOffset={products.length}
        />
      </main>

      <Header onAboutClick={() => setIsAboutOpen(true)} />

      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseModal}
      />

      <AboutPanel isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

function SectionLabel({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-baseline gap-3 px-5 md:px-7 py-4 border-b border-white/5">
      <h2 className="font-brand text-white text-xs md:text-sm uppercase tracking-widest">
        {title}
      </h2>
      <span className="font-body text-gray-500 text-xs md:text-sm">
        {subtitle}
      </span>
    </div>
  );
}

export default App;

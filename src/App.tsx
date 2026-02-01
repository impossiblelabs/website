import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ProjectModal } from "@/components/ProjectModal";
import { AboutPanel } from "@/components/AboutPanel";
import { projects, type Project } from "@/data/projects";
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
      <GalleryGrid projects={projects} onProjectClick={handleProjectClick} />

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

export default App;

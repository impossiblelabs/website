import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Lab } from "@/components/Lab";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { products, projects, type Project } from "@/data/projects";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <main>
        <Hero />
        <Products items={products} onSelect={showProject} />
        <Lab items={projects} onSelect={showProject} />
        <About />
      </main>
      <Footer />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;

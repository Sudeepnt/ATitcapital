"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectDetail from "./projectDetail";
export default function Cases() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        if (data?.cases?.projects) {
          setProjectsData(data.cases.projects);
        }
      })
      .catch(error => console.error('Failed to load cases:', error));
  }, []);

  // Handle browser back button for modal
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // If we have a state indicating modal was open, or just simply if we have a selected project
      // Actually, checking if we are going "back" to initial state
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProject]);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    // Push state so back button works
    window.history.pushState({ modal: true }, '', `?project=${project.slug}`);
  };

  const handleClose = () => {
    setSelectedProject(null);
    // Clean up URL if manually closed
    // Check if we need to go back (if state was pushed) or just replace
    if (window.history.state?.modal) {
      window.history.back();
    } else {
      // Fallback for direct URL load or otherwise
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header removed - using global layout */}

        <main className="flex-1 flex items-center justify-center px-6 py-24 w-full">
          <div className="max-w-7xl w-full relative">
            {/* Center Circle Decoration - Desktop Only */}


            <div className="grid grid-cols-1 md:grid-cols-2">
              {projectsData.map((project, index) => {
                const isLastItem = index === projectsData.length - 1;
                const isDesktopBottomRow = index >= projectsData.length - (projectsData.length % 2 === 0 ? 2 : 1);
                const isDesktopLeftCol = index % 2 === 0;

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className={`
                      w-full p-8 md:p-16 border-gray-200 hover:border-[#13343e] transition-all duration-500 group relative
                      ${!isLastItem ? 'border-b' : ''}
                      ${isDesktopBottomRow ? 'md:border-b-0' : ''}
                      ${isDesktopLeftCol ? 'md:border-r' : ''}
                      md:border-solid
                    `}
                  >
                    <button
                      onClick={() => handleProjectSelect(project)}
                      className="block w-full text-left transition-transform duration-500 group-hover:scale-[1.02]"
                    >
                      <p className="text-black text-[clamp(0.75rem,2vw,0.875rem)] uppercase tracking-wider mb-2 md:mb-4 font-bold opacity-100">
                        {project.category}
                      </p>
                      <h2 className="text-[#13343e] text-[clamp(1.75rem,3.5vw,3rem)] font-bold mb-4 md:mb-6 leading-tight">
                        {project.title}
                      </h2>

                      {/* Hover Arrow - Moved Higher */}
                      <div className="h-8 overflow-hidden -mt-2">
                        <span className="text-[#13343e] text-4xl block transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-left">
                          ⟶
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Menu removed - using global layout */}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </>
  );
}

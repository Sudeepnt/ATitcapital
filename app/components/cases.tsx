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
      <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">
        {/* Header removed - using global layout */}

        <main className="flex-1 px-4 md:px-6 w-full flex flex-col overflow-y-auto pb-20">
          <div className="max-w-7xl w-full mx-auto my-auto py-12 md:py-16 pt-[100px]">
            {/* Center Circle Decoration - Desktop Only */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
              {projectsData.map((project, index) => {
                const isLastItem = index === projectsData.length - 1;
                const isDesktopBottomRow = index >= projectsData.length - (projectsData.length % 2 === 0 ? 2 : 1);
                const isDesktopLeftCol = index % 2 === 0;

                return (
                  <motion.div
                    key={project.slug}
                    className={`
                      w-full p-6 md:p-10 border-gray-200 hover:border-[#13343e] transition-all duration-500 group relative
                      ${!isLastItem ? 'border-b' : ''}
                      ${isDesktopBottomRow ? 'md:border-b-0' : ''}
                      ${isDesktopLeftCol ? 'md:border-r' : ''}
                       md:border-solid flex flex-col md:justify-between justify-center h-full overflow-hidden
                    `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleProjectSelect(project)}
                      className="block w-full text-left transition-transform duration-500 group-hover:scale-[1.02]"
                    >
                      {/* Masked Text Reveal Wrapper - Category */}
                      <div className="overflow-hidden mb-0 md:mb-4">
                        <motion.p
                          className="text-black text-[clamp(0.65rem,1.7vw,0.75rem)] uppercase tracking-wider font-bold opacity-100 block"
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{
                            delay: 0.2 + index * 0.2, // Stagger text appearance
                            duration: 0.6,
                            ease: [0.77, 0, 0.175, 1] // Smooth Quart ease
                          }}
                        >
                          {project.category}
                        </motion.p>
                      </div>

                      {/* Masked Text Reveal Wrapper - Title */}
                      <div className="overflow-hidden mb-0 md:mb-6">
                        <motion.h2
                          className="text-[#13343e] text-[clamp(1.275rem,2.04vw,1.7rem)] font-bold leading-tight block"
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{
                            delay: 0.3 + index * 0.2, // Slightly later than category
                            duration: 0.6,
                            ease: [0.77, 0, 0.175, 1]
                          }}
                        >
                          {project.title}
                        </motion.h2>
                      </div>

                      {/* Hover Arrow - Moved Higher */}
                      <div className="hidden md:block h-8 overflow-hidden mt-1">
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

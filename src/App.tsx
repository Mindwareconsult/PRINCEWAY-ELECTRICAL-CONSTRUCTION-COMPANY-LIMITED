import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem, VideoGalleryItem } from './types';
import { INITIAL_PROJECTS, INITIAL_VIDEOS, COMPANY_INFO, BRAND_ASSETS } from './data/companyData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationInitialService, setConsultationInitialService] = useState('Electrical Engineering');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>(BRAND_ASSETS.logoUrl);
  const [heroImageUrl, setHeroImageUrl] = useState<string>(BRAND_ASSETS.heroImageUrl);

  // Versioned storage key ensures latest organized projects & assets load cleanly
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('princeway_projects_v3');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  const [videos, setVideos] = useState<VideoGalleryItem[]>(INITIAL_VIDEOS);

  const saveProjects = (updatedProjects: ProjectItem[]) => {
    setProjects(updatedProjects);
    try {
      localStorage.setItem('princeway_projects_v3', JSON.stringify(updatedProjects));
    } catch (e) {
      console.warn('Failed to save projects to localStorage', e);
    }
  };

  const handleAddProject = (newProject: ProjectItem) => {
    const updated = [newProject, ...projects];
    saveProjects(updated);
  };

  const handleUpdateProjectImage = (projectId: string, imageUrl: string) => {
    const updated = projects.map((p) =>
      p.id === projectId
        ? {
            ...p,
            imageUrl: p.imageUrl || imageUrl,
            galleryImages: p.galleryImages.includes(imageUrl)
              ? p.galleryImages
              : [imageUrl, ...p.galleryImages],
            isCustomUpload: true,
          }
        : p
    );
    saveProjects(updated);
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) =>
        prev
          ? {
              ...prev,
              imageUrl: prev.imageUrl || imageUrl,
              galleryImages: prev.galleryImages.includes(imageUrl)
                ? prev.galleryImages
                : [imageUrl, ...prev.galleryImages],
              isCustomUpload: true,
            }
          : null
      );
    }
  };

  const handleUpdateProjectVideo = (projectId: string, videoUrl: string) => {
    const updated = projects.map((p) =>
      p.id === projectId ? { ...p, videoUrl, isCustomUpload: true } : p
    );
    saveProjects(updated);
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) => (prev ? { ...prev, videoUrl, isCustomUpload: true } : null));
    }
  };

  const handleUpdateVideoUrl = (videoId: string, videoUrl: string) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === videoId ? { ...v, videoUrl } : v))
    );
  };

  const handleBulkAttachMedia = (files: FileList) => {
    let imagesAttached = 0;
    let videosAttached = 0;
    let logoAttached = false;

    const updatedVideos = [...videos];
    const projectImageAdds: Record<string, string[]> = {};

    Array.from(files).forEach((file) => {
      const lower = file.name.toLowerCase();

      if (file.type.startsWith('video/') || lower.endsWith('.mp4')) {
        const objectUrl = URL.createObjectURL(file);
        const matchIdx = updatedVideos.findIndex(
          (v) =>
            v.sourceFilename.toLowerCase() === lower ||
            (lower.includes('4.25.11') && v.sourceFilename.includes('4.25.11')) ||
            (lower.includes('4.25.34') && v.sourceFilename.includes('4.25.34')) ||
            (lower.includes('4.26.24') && v.sourceFilename.includes('4.26.24'))
        );
        const targetIdx =
          matchIdx >= 0 ? matchIdx : updatedVideos.findIndex((v) => !v.videoUrl);
        if (targetIdx >= 0) {
          updatedVideos[targetIdx] = { ...updatedVideos[targetIdx], videoUrl: objectUrl };
          videosAttached++;
        }
        return;
      }

      if (file.type.startsWith('image/')) {
        const objectUrl = URL.createObjectURL(file);
        if (lower.includes('logo')) {
          setLogoUrl(objectUrl);
          logoAttached = true;
          return;
        }
        const targetProjectId = lower.includes('borehole')
          ? 'pw-borehole-01'
          : lower.includes('panel')
          ? 'pw-elec-panel'
          : 'pw-bldg-twostorey';
        projectImageAdds[targetProjectId] = [
          ...(projectImageAdds[targetProjectId] || []),
          objectUrl,
        ];
        imagesAttached++;
      }
    });

    if (videosAttached > 0) {
      setVideos(updatedVideos);
    }

    if (Object.keys(projectImageAdds).length > 0) {
      const updatedProjects = projects.map((p) => {
        const added = projectImageAdds[p.id];
        if (!added || added.length === 0) return p;
        const merged = [...p.galleryImages, ...added];
        return {
          ...p,
          imageUrl: p.imageUrl || merged[0],
          galleryImages: merged,
          isCustomUpload: true,
        };
      });
      saveProjects(updatedProjects);
    }

    return { imagesAttached, videosAttached, logoAttached };
  };

  // URL hash sync
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'about', 'services', 'projects', 'process', 'contact'];
    if (validPages.includes(hash)) {
      setCurrentPage(hash);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(currentHash)) {
        setCurrentPage(currentHash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (initialService?: string) => {
    if (initialService) {
      setConsultationInitialService(initialService);
    } else {
      setConsultationInitialService('Electrical Engineering');
    }
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F5F5F3] flex flex-col font-sans selection:bg-[#FB8F02] selection:text-[#0B0F19]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FB8F02] text-[#0B0F19] font-extrabold text-xs"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        logoUrl={logoUrl}
      />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            projects={projects}
            onSelectProject={(project) => setSelectedProject(project)}
            heroImageUrl={heroImageUrl}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            projects={projects}
            videos={videos}
            onSelectProject={(project) => setSelectedProject(project)}
            onAddProject={handleAddProject}
            onUpdateVideoUrl={handleUpdateVideoUrl}
            onBulkAttachMedia={handleBulkAttachMedia}
          />
        )}
        {currentPage === 'process' && (
          <ProcessPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        logoUrl={logoUrl}
      />

      {/* Floating Direct Call Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded bg-[#161920]/90 hover:bg-[#1E2430] border border-[#2D3340] text-[#B7B9BC] hover:text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded shadow-xl hover:shadow-[#FB8F02]/40 transition-all hover:scale-105 active:scale-95"
          title={`Direct Telephone: ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">CALL: {COMPANY_INFO.phoneDisplay}</span>
          <span className="sm:hidden">CALL</span>
        </a>
      </div>

      {/* Global Consultation / Discuss Project Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialService={consultationInitialService}
      />

      {/* Global Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        videos={videos}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          const cat = selectedProject?.category;
          setSelectedProject(null);
          handleOpenConsultation(cat);
        }}
        onUpdateProjectImage={handleUpdateProjectImage}
        onUpdateProjectVideo={handleUpdateProjectVideo}
      />
    </div>
  );
}

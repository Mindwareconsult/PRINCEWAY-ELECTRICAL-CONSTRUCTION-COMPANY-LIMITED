import React, { useState } from 'react';
import { PageId, ProjectItem, ServiceCategory, VideoGalleryItem } from '../types';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { MapPin, Plus, Upload, ArrowUpRight, Film, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (initialService?: string) => void;
  projects: ProjectItem[];
  videos: VideoGalleryItem[];
  onSelectProject: (project: ProjectItem) => void;
  onAddProject: (project: ProjectItem) => void;
  onUpdateVideoUrl: (videoId: string, videoUrl: string) => void;
  onBulkAttachMedia?: (files: FileList) => { imagesAttached: number; videosAttached: number; logoAttached: boolean };
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenConsultation,
  projects,
  videos,
  onSelectProject,
  onAddProject,
  onUpdateVideoUrl,
  onBulkAttachMedia,
}) => {
  // Mandatory filter order
  const filterCategories = [
    'ALL PROJECTS',
    'ELECTRICAL ENGINEERING',
    'BUILDING CONSTRUCTION',
    'BOREHOLE DRILLING',
  ] as const;

  const [filter, setFilter] = useState<string>('ALL PROJECTS');
  const [showAddForm, setShowAddForm] = useState(false);
  const [attachSummary, setAttachSummary] = useState<string | null>(null);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ServiceCategory>('Electrical Engineering');
  const [newLocation, setNewLocation] = useState('Owerri, Imo State');
  const [newStatus, setNewStatus] = useState<ProjectItem['status']>('Site Record');
  const [newDesc, setNewDesc] = useState('');
  const [newHighlights, setNewHighlights] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');

  const filteredProjects =
    filter === 'ALL PROJECTS'
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === filter);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setNewImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setNewVideoUrl(objectUrl);
  };

  const handleBulkFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !onBulkAttachMedia) return;
    const result = onBulkAttachMedia(files);
    const parts: string[] = [];
    if (result.imagesAttached > 0) parts.push(`${result.imagesAttached} photo(s)`);
    if (result.videosAttached > 0) parts.push(`${result.videosAttached} video(s)`);
    if (result.logoAttached) parts.push('business card/logo');
    setAttachSummary(
      parts.length > 0
        ? `Attached ${parts.join(', ')} into the live showcase.`
        : 'Selected files processed.'
    );
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const highlightsArray = newHighlights
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const newProject: ProjectItem = {
      id: `pw-custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      location: newLocation.trim() || 'Owerri, Imo State',
      status: newStatus,
      description:
        newDesc.trim() || 'Site record documented for Princeway Electrical Construction Company Limited.',
      highlights:
        highlightsArray.length > 0
          ? highlightsArray
          : ['Practical engineering execution', 'Quality-focused site supervision'],
      imageUrl: newImageUrl,
      galleryImages: newImageUrl ? [newImageUrl] : [],
      videoUrl: newVideoUrl || undefined,
      isCustomUpload: true,
    };

    onAddProject(newProject);
    setNewTitle('');
    setNewDesc('');
    setNewHighlights('');
    setNewImageUrl('');
    setNewVideoUrl('');
    setShowAddForm(false);
  };

  const getVisualCategory = (category: ServiceCategory): 'electrical' | 'building' | 'borehole' => {
    if (category === 'Electrical Engineering') return 'electrical';
    if (category === 'Borehole Drilling') return 'borehole';
    return 'building';
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60A5FA] font-semibold">
                PORTFOLIO &amp; FIELD DOCUMENTATION
              </span>
              <div className="h-[1px] w-12 bg-[#353C49]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] font-display leading-tight text-balance">
              Field Execution Across Power, Building &amp; Borehole Works.
            </h1>

            <p className="text-base sm:text-lg text-[#B7B9BC] leading-relaxed">
              Explore project records and field documentation across Electrical Engineering, Building Construction, and Borehole Drilling.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Controls & Gallery */}
      <section className="py-16 bg-[#14171D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Action & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#252A34]">
            {/* Mandatory Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-2 text-xs font-mono rounded-[2px] transition-colors cursor-pointer ${
                    filter === cat
                      ? 'bg-[#2563EB] text-white font-bold'
                      : 'bg-[#0F1115] text-[#B7B9BC] hover:text-white border border-[#252A34]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Upload & Add Project Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {onBulkAttachMedia && (
                <label className="cursor-pointer px-4 py-2 bg-[#161920] hover:bg-[#1E2430] border border-[#2D3340] text-[#F5F5F3] font-mono text-xs font-semibold rounded-[2px] flex items-center gap-2 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Attach Unzipped Photos / Videos</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleBulkFiles}
                    className="hidden"
                  />
                </label>
              )}

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono text-xs font-semibold rounded-[2px] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{showAddForm ? 'Close Add Form' : 'Add Project Record'}</span>
              </button>
            </div>
          </div>

          {attachSummary && (
            <div className="p-3 bg-[#102038] border border-[#2563EB]/50 rounded text-xs text-[#E5E7EB] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
              <span>{attachSummary}</span>
            </div>
          )}

          {/* Collapsible Add Project Form */}
          {showAddForm && (
            <div className="p-6 bg-[#161920] border border-[#2D3340] rounded-lg space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#F5F5F3]">Add Project or Field Record</h3>
                  <p className="text-xs text-[#B7B9BC]">
                    Upload authentic site photographs or MP4 videos directly into the portfolio.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#60A5FA]">PRINCEWAY MEDIA MANAGER</span>
              </div>

              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Owerri Commercial Wiring & Distribution"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0F1115] border border-[#2D3340] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Division Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as ServiceCategory)}
                      className="w-full px-3 py-2 bg-[#0F1115] border border-[#2D3340] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
                    >
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Building Construction">Building Construction</option>
                      <option value="Borehole Drilling">Borehole Drilling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Owerri, Imo State"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0F1115] border border-[#2D3340] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Record Status
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as ProjectItem['status'])}
                      className="w-full px-3 py-2 bg-[#0F1115] border border-[#2D3340] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
                    >
                      <option value="Site Record">Site Record</option>
                      <option value="Active Documentation">Active Documentation</option>
                      <option value="Completed Work">Completed Work</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Attach Site Photo
                    </label>
                    <label className="cursor-pointer w-full px-3 py-2 bg-[#0F1115] hover:bg-[#1E2430] border border-[#2D3340] text-white text-xs font-semibold rounded flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span className="truncate">{newImageUrl ? 'Photo Attached' : 'Select JPEG / PNG'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Attach Site Video (Optional)
                    </label>
                    <label className="cursor-pointer w-full px-3 py-2 bg-[#0F1115] hover:bg-[#1E2430] border border-[#2D3340] text-white text-xs font-semibold rounded flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span className="truncate">{newVideoUrl ? 'Video Attached' : 'Select MP4 Video'}</span>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                    Project Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe the electrical, building, or borehole work documented..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0F1115] border border-[#2D3340] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 text-xs font-mono text-[#B7B9BC] hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase rounded-[2px] cursor-pointer"
                  >
                    Save Project Record
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Media Integrity Notice */}
          <div className="p-4 bg-[#0F1115] border border-[#252A34] rounded text-xs text-[#B7B9BC] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span>
                <strong>Portfolio Media:</strong> Technical division diagrams are shown until you attach your extracted site JPEG and MP4 files directly—keeping every displayed photograph and video 100% genuine to Princeway.
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#8A919E] hidden md:block shrink-0">
              PRINCEWAY PROJECT ARCHIVE
            </span>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-[#161920] border border-[#252A34] hover:border-[#2563EB] rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <ArchitecturalVisual
                      category={getVisualCategory(project.category)}
                      title={project.title}
                      imageUrl={project.imageUrl || project.galleryImages?.[0]}
                      aspectRatio="auto"
                      showBadge={false}
                    />
                    <div className="absolute top-3 left-3 bg-[#0F1115]/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-[#60A5FA] uppercase border border-[#2D3340]">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0F1115]/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono text-[#B7B9BC] border border-[#2D3340]">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#B7B9BC]">
                      <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F5F5F3] group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#B7B9BC] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#252A34] flex items-center justify-between text-xs font-mono text-[#60A5FA]">
                  <span className="font-bold">VIEW PROJECT DETAILS</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center space-y-4">
              <p className="text-base text-[#B7B9BC]">
                No project records match this category yet.
              </p>
              <button
                onClick={() => setFilter('ALL PROJECTS')}
                className="px-4 py-2 bg-[#2563EB] text-white text-xs font-mono font-bold rounded-[2px] cursor-pointer"
              >
                Show All Projects
              </button>
            </div>
          )}

          {/* Project Video Gallery Section */}
          <div className="pt-12 border-t border-[#252A34] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#60A5FA] font-semibold">
                  FIELD VIDEO RECORDS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] font-display">
                  Project Video Gallery
                </h2>
                <p className="text-xs sm:text-sm text-[#B7B9BC] max-w-2xl">
                  Playback support for Princeway&apos;s site MP4 documentation with standard media controls and fullscreen support.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-[#0F1115] border border-[#252A34] rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-video bg-[#161920] border-b border-[#252A34] flex items-center justify-center relative">
                    {vid.videoUrl ? (
                      <video
                        src={vid.videoUrl}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="p-6 text-center space-y-3">
                        <Film className="w-8 h-8 text-[#60A5FA] mx-auto" />
                        <div className="text-xs font-mono text-[#E5E7EB]">
                          {vid.sourceFilename}
                        </div>
                        <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[11px] font-bold uppercase tracking-wider rounded-[2px] cursor-pointer">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Attach MP4 File</span>
                          <input
                            type="file"
                            accept="video/mp4,video/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                onUpdateVideoUrl(vid.id, URL.createObjectURL(file));
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#60A5FA] font-semibold">
                      {vid.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#F5F5F3]">{vid.title}</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{vid.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 bg-[#161920] border border-[#2D3340] rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F3]">
                Planning a Project in Owerri or Across Imo State?
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B9BC] mt-1">
                Discuss your electrical engineering, building construction, or borehole drilling project with Princeway Electrical Construction Company Limited.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] whitespace-nowrap cursor-pointer"
            >
              DISCUSS YOUR PROJECT →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ProjectItem, VideoGalleryItem } from '../types';
import {
  X,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Upload,
  Image as ImageIcon,
  Film,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { YouTubeEmbedCard } from './YouTubeEmbedCard';

interface ProjectModalProps {
  project: ProjectItem | null;
  videos?: VideoGalleryItem[];
  onClose: () => void;
  onOpenConsultation: () => void;
  onUpdateProjectImage?: (projectId: string, imageUrl: string) => void;
  onUpdateProjectVideo?: (projectId: string, videoUrl: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  videos = [],
  onClose,
  onOpenConsultation,
  onUpdateProjectImage,
  onUpdateProjectVideo,
}) => {
  const [uploadUrl, setUploadUrl] = useState('');
  const [showUploadInput, setShowUploadInput] = useState(false);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    setActiveImage(project?.imageUrl || project?.galleryImages?.[0] || '');
  }, [project]);

  if (!project) return null;

  const visualCat =
    project.category === 'Electrical Engineering'
      ? 'electrical'
      : project.category === 'Borehole Drilling'
      ? 'borehole'
      : 'building';

  const gallery =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const currentIdx = Math.max(0, gallery.indexOf(activeImage));
  const hasGallery = gallery.length > 0;

  const linkedVideos = videos.filter(
    (v) =>
      project.linkedVideoIds?.includes(v.id) ||
      v.projectId === project.id
  );

  const handlePrevImage = () => {
    if (gallery.length <= 1) return;
    const prevIdx = (currentIdx - 1 + gallery.length) % gallery.length;
    setActiveImage(gallery[prevIdx]);
  };

  const handleNextImage = () => {
    if (gallery.length <= 1) return;
    const nextIdx = (currentIdx + 1) % gallery.length;
    setActiveImage(gallery[nextIdx]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('video/') && onUpdateProjectVideo) {
      const objectUrl = URL.createObjectURL(file);
      onUpdateProjectVideo(project.id, objectUrl);
      return;
    }

    if (file.type.startsWith('image/') && onUpdateProjectImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUpdateProjectImage(project.id, reader.result);
          setActiveImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleManualUrlSave = () => {
    if (uploadUrl.trim() && onUpdateProjectImage) {
      onUpdateProjectImage(project.id, uploadUrl.trim());
      setActiveImage(uploadUrl.trim());
      setUploadUrl('');
      setShowUploadInput(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#12151B] border border-[#2A303D] rounded-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#171B22] border-b border-[#252A34] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FB8F02] font-semibold">
              {project.category}
            </span>
            <span className="text-[#353A44]">·</span>
            <span className="text-xs font-mono text-[#B7B9BC]">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#B7B9BC] hover:text-white rounded hover:bg-[#232833] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Main Enlarged Stage: show full uncropped image inside clean dark lightbox stage if photo exists, or SVG fallback */}
          {hasGallery ? (
            <div className="relative rounded-lg overflow-hidden border border-[#252A34] bg-[#0A0C10]">
              <div className="relative flex items-center justify-center min-h-[260px] max-h-[460px] w-full">
                <img
                  src={activeImage || gallery[0]}
                  alt={`${project.title} — photo ${currentIdx + 1}`}
                  referrerPolicy="no-referrer"
                  className="max-h-[460px] w-auto max-w-full object-contain mx-auto"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0F1115]/85 hover:bg-[#FB8F02] text-white hover:text-[#0B0F19] border border-[#2D3340] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                      aria-label="Previous project photograph"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0F1115]/85 hover:bg-[#FB8F02] text-white hover:text-[#0B0F19] border border-[#2D3340] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                      aria-label="Next project photograph"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 left-3 text-[11px] font-mono tracking-wider text-[#F5F5F3] bg-[#0F1115]/85 backdrop-blur px-2.5 py-1 border border-[#FB8F02]/40">
                  PRINCEWAY PROJECT PHOTO
                </div>

                {gallery.length > 1 && (
                  <div className="absolute bottom-3 right-3 text-[11px] font-mono text-[#FB8F02] bg-[#0F1115]/90 px-2.5 py-1 rounded border border-[#2D3340]">
                    {currentIdx + 1} / {gallery.length}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden border border-[#252A34]">
              <ArchitecturalVisual
                category={visualCat}
                title={project.title}
                imageUrl={project.imageUrl}
                aspectRatio="16:9"
                showBadge={true}
                eager={true}
              />
            </div>
          )}

          {/* Interactive Lightbox Thumbnail Strip */}
          {gallery.length > 1 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FB8F02]">
                  Project Photographs ({gallery.length} Site Views — Select to Enlarge)
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2.5">
                {gallery.map((img, i) => {
                  const isSelected = (activeImage || gallery[0]) === img;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`aspect-[4/3] rounded overflow-hidden border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#FB8F02] ring-2 ring-[#FB8F02]/30 scale-[1.02]'
                          : 'border-[#252A34] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} site view ${i + 1}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Linked YouTube Field Videos */}
          {linkedVideos.length > 0 && (
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FB8F02]">
                <Film className="w-3.5 h-3.5" />
                <span>
                  Related Field Video Documentation ({linkedVideos.length})
                </span>
              </div>
              <div
                className={`grid gap-4 ${
                  linkedVideos.length === 1
                    ? 'grid-cols-1 max-w-md'
                    : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {linkedVideos.map((vid) => (
                  <YouTubeEmbedCard key={vid.id} video={vid} compact={true} />
                ))}
              </div>
            </div>
          )}

          {/* Custom Attached Video File Player */}
          {project.videoUrl && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FB8F02]">
                <Film className="w-3.5 h-3.5" />
                <span>{project.videoTitle || 'Field Video Documentation'}</span>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#252A34] bg-black">
                <video
                  src={project.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[360px] object-contain"
                />
              </div>
            </div>
          )}

          {/* Media Attach Bar */}
          <div className="p-3 bg-[#161920] border border-[#252A34] rounded flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#B7B9BC]">
              <ImageIcon className="w-4 h-4 text-[#FB8F02] shrink-0" />
              <span>
                {hasGallery || linkedVideos.length > 0
                  ? 'Verified Princeway site documentation linked.'
                  : 'Attach additional site photo or MP4 video.'}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <label className="cursor-pointer px-3 py-1.5 bg-[#202632] hover:bg-[#2A3242] text-[#F5F5F3] font-semibold rounded-[2px] transition-colors flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-[#FB8F02]" />
                <span>Upload Photo / Video</span>
                <input
                  type="file"
                  accept="image/*,video/mp4,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={() => setShowUploadInput(!showUploadInput)}
                className="px-2.5 py-1.5 text-[#B7B9BC] hover:text-white transition-colors cursor-pointer"
              >
                {showUploadInput ? 'Cancel' : 'Enter URL'}
              </button>
            </div>
          </div>

          {showUploadInput && (
            <div className="flex gap-2 p-3 bg-[#0F1115] border border-[#252A34] rounded">
              <input
                type="text"
                placeholder="Paste direct image URL..."
                value={uploadUrl}
                onChange={(e) => setUploadUrl(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-[#161920] border border-[#2A303D] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#FB8F02]"
              />
              <button
                onClick={handleManualUrlSave}
                className="px-4 py-1.5 bg-[#FB8F02] text-[#0B0F19] font-extrabold text-xs rounded hover:bg-[#E07E00] cursor-pointer"
              >
                Apply
              </button>
            </div>
          )}

          {/* Project Title & Metadata */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#F5F5F3]">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B7B9BC]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FB8F02]" />
                <span>{project.location}</span>
              </div>
              <span>·</span>
              <span>Related Service: {project.category}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B7B9BC]">
              Project Overview
            </h4>
            <p className="text-sm text-[#F5F5F3] leading-relaxed">{project.description}</p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FB8F02]">
              Scope &amp; Execution Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 bg-[#161920] border border-[#252A34] rounded-[2px]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FB8F02] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#B7B9BC]">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#171B22] border-t border-[#252A34] flex items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-[#76797E] truncate">
            PRINCEWAY ELECTRICAL CONSTRUCTION COMPANY LIMITED
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Enquire About {project.category}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

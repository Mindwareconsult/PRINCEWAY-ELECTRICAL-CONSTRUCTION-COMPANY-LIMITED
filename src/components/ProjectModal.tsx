import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, CheckCircle2, ArrowRight, Upload, Image as ImageIcon, Film } from 'lucide-react';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
  onUpdateProjectImage?: (projectId: string, imageUrl: string) => void;
  onUpdateProjectVideo?: (projectId: string, videoUrl: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
  onUpdateProjectImage,
  onUpdateProjectVideo,
}) => {
  const [uploadUrl, setUploadUrl] = useState('');
  const [showUploadInput, setShowUploadInput] = useState(false);

  if (!project) return null;

  const visualCat =
    project.category === 'Electrical Engineering'
      ? 'electrical'
      : project.category === 'Borehole Drilling'
      ? 'borehole'
      : 'building';

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
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleManualUrlSave = () => {
    if (uploadUrl.trim() && onUpdateProjectImage) {
      onUpdateProjectImage(project.id, uploadUrl.trim());
      setUploadUrl('');
      setShowUploadInput(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#12151B] border border-[#2A303D] rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#171B22] border-b border-[#252A34] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-semibold">
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
          {/* Main Visual */}
          <div className="relative rounded-lg overflow-hidden border border-[#252A34]">
            <ArchitecturalVisual
              category={visualCat}
              title={project.title}
              imageUrl={project.imageUrl}
              aspectRatio="16:9"
              showBadge={true}
            />
          </div>

          {/* Supporting Gallery Images (if attached) */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#60A5FA]">
                Supporting Site Gallery
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded overflow-hidden border border-[#252A34]">
                    <img
                      src={img}
                      alt={`${project.title} site view ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Embedded Project Video Player (if attached) */}
          {project.videoUrl && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#60A5FA]">
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
              <ImageIcon className="w-4 h-4 text-[#60A5FA] shrink-0" />
              <span>
                {project.imageUrl
                  ? 'Verified Princeway site photograph linked.'
                  : project.expectedAssetHint
                  ? `Ready for extracted ZIP media (${project.expectedAssetHint}).`
                  : 'Attach extracted site photo or MP4 video.'}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <label className="cursor-pointer px-3 py-1.5 bg-[#202632] hover:bg-[#2A3242] text-[#F5F5F3] font-semibold rounded-[2px] transition-colors flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-[#60A5FA]" />
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
                className="flex-1 px-3 py-1.5 bg-[#161920] border border-[#2A303D] rounded text-xs text-[#F5F5F3] focus:outline-none focus:border-[#2563EB]"
              />
              <button
                onClick={handleManualUrlSave}
                className="px-4 py-1.5 bg-[#2563EB] text-white font-bold text-xs rounded hover:bg-[#1D4ED8] cursor-pointer"
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
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA]">
              Scope & Execution Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 bg-[#161920] border border-[#252A34] rounded-[2px]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
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
            className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Enquire About {project.category}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

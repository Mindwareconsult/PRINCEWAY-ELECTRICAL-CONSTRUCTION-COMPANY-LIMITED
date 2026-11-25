import React, { useState } from 'react';
import { VideoGalleryItem } from '../types';
import { Play, ExternalLink, Film } from 'lucide-react';

interface YouTubeEmbedCardProps {
  video: VideoGalleryItem;
  compact?: boolean;
}

export const YouTubeEmbedCard: React.FC<YouTubeEmbedCardProps> = ({
  video,
  compact = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbFallback, setThumbFallback] = useState(false);

  const youtubeId = video.youtubeId;
  const thumbnailUrl = youtubeId
    ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
    : video.posterUrl;
  const externalUrl =
    video.youtubeUrl || (youtubeId ? `https://youtu.be/${youtubeId}` : undefined);

  const aspectClass = video.isShort ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div className="bg-[#0F1115] border border-[#252A34] hover:border-[#FB8F02]/70 rounded-lg overflow-hidden flex flex-col justify-between transition-colors">
      {/* Responsive Video Viewport */}
      <div
        className={`relative bg-[#161920] border-b border-[#252A34] overflow-hidden ${
          video.isShort
            ? 'flex items-center justify-center bg-[#090B0E] py-3 px-4'
            : ''
        }`}
      >
        <div
          className={`relative w-full overflow-hidden rounded ${
            video.isShort ? 'max-w-[260px] mx-auto shadow-xl border border-[#252A34]' : ''
          } ${aspectClass}`}
        >
          {youtubeId && isLoaded ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          ) : youtubeId ? (
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="group relative w-full h-full block text-left cursor-pointer focus:outline-none"
              aria-label={`Play video: ${video.title}`}
            >
              {thumbnailUrl && !thumbFallback ? (
                <img
                  src={thumbnailUrl}
                  alt={video.title}
                  loading="lazy"
                  decoding="async"
                  onError={() => setThumbFallback(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-[#131720] flex flex-col items-center justify-center p-4 text-center">
                  <Film className="w-8 h-8 text-[#FB8F02] mb-2" />
                  <span className="text-xs font-mono text-[#B7B9BC] line-clamp-2">
                    {video.title}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/25 to-black/20 group-hover:via-[#0B0F19]/10 transition-colors" />

              {/* Badges */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                {video.featured && (
                  <span className="px-2 py-0.5 bg-[#FB8F02] text-[#0B0F19] text-[10px] font-mono font-extrabold uppercase rounded-[2px]">
                    FEATURED
                  </span>
                )}
                <span className="px-2 py-0.5 bg-[#013281]/95 text-white text-[10px] font-mono uppercase rounded-[2px] border border-[#FB8F02]/40">
                  {video.isShort ? 'SHORTS' : 'VIDEO'}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#FB8F02]/95 group-hover:bg-[#FB8F02] group-hover:scale-110 text-[#0B0F19] flex items-center justify-center shadow-2xl transition-all duration-200 ring-4 ring-black/30">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Hint */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-[#E5E7EB]">
                <span>CLICK TO PLAY</span>
                <span>{video.isShort ? '9:16' : '16:9'}</span>
              </div>
            </button>
          ) : video.videoUrl ? (
            <video
              src={video.videoUrl}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </div>

      {/* Metadata & Fallback Link */}
      <div className={`${compact ? 'p-4' : 'p-5'} space-y-2 flex-1 flex flex-col justify-between`}>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#FB8F02] font-semibold">
              {video.category}
            </span>
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8A919E] hover:text-[#FB8F02] transition-colors"
                title="Open on YouTube"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <h3 className="text-sm font-bold text-[#F5F5F3] leading-snug">{video.title}</h3>
          {!compact && (
            <p className="text-xs text-[#9CA3AF] leading-relaxed">{video.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

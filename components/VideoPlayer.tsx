'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
}

export default function VideoPlayer({ videoSrc, thumbnailSrc, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden glass">
      {!playing && (
        <>
          <Image src={thumbnailSrc} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
          <div className="absolute inset-0 bg-[#000C1A]/40 flex items-center justify-center">
            <button
              onClick={handlePlay}
              aria-label={`Play ${title}`}
              className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
        </>
      )}
      <video
        ref={videoRef}
        src={videoSrc}
        controls
        className={playing ? 'w-full h-full object-cover' : 'hidden'}
        aria-label={title}
      />
    </div>
  );
}
